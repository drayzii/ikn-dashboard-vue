<template>
  <div class="container">
    <sidebar-menu :onToggle="onToggle" />
      <form enctype="multipart/form-data"
      v-on:submit.prevent='uploadImages'>
        <div class="dropbox mt-2">
          <b-form-file multiple :disabled="isSaving" accept="image/*" v-model="newImages"
           class="mt-3 file-input" plain></b-form-file>
            <p v-if="!isSaving && !imagesLength">
              Drag your image(s) here to upload<br> or click to browse
            </p>
            <p v-if="imagesLength && !isSaving">
              Selected {{ imagesLength }} files
            </p>
            <div v-if="isSaving" class="d-flex justify-content-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only"></span>
              </div>
              <div></div>
              <div class="px-2">Uploading files...</div>
            </div>
        </div>
        <b-container fluid>
          <b-row class="my-3" >
            <b-col sm="1">
              <label for="section">Section:</label>
            </b-col>
            <b-col sm="3">
              <b-form-input id="section" v-model="section"></b-form-input>
            </b-col>
          </b-row>
        <input v-if="imagesLength" :disabled="isSaving" type='submit' value='UPLOAD'
          class='btn btn-primary login-button' />
        </b-container>
        <div>
        </div>
      </form>
      <b-container fluid class="my-5">
        <div class="row">
            <div  v-for="(image, index) in smallImages" :key="index"
            class="col-md-3 image-container mb-3 wrapper px-2">
                <b-icon-trash class="delete" @click="deleteImage(image.id)"
                v-b-tooltip.hover title="Delete"></b-icon-trash>
              <b-img  @click="modealOpenClose(index)" fluid-grow
                :src="image.url" alt="Image 2"></b-img>
            </div>
        </div>
      </b-container>
      <div class="full" v-if="isOpen" @click="modealOpenClose(0)">
        <span class="close">&times;</span>
        <b-img class="modal-content"
        :src="availableImages[index].url" alt="Image 2"></b-img>
      </div>
  </div>
</template>

<script>
/* eslint-disable array-callback-return */

import { mapGetters } from 'vuex';
import SidebarMenu from '../components/SidebarMenu.vue';

export default {
  name: 'GalleryPage',
  data() {
    return {
      newImages: [],
      index: 0,
      section: '',
      isOpen: false,
    };
  },
  components: {
    SidebarMenu,
  },
  computed: {
    ...mapGetters(['availableImages', 'smallImages']),
    isSaving() {
      return this.$store.state.isSaving;
    },
    imagesLength() {
      return this.newImages.length;
    },
  },
  methods: {
    changeFiles(files) {
      const formData = new FormData();
      if (!files.length) return;
      Array
        .from(files)
        .map((file) => {
          formData.append('images', file);
        });
      // eslint-disable-next-line consistent-return
      return formData;
    },
    uploadImages() {
      this.$store.commit('isSaving', true);
      const data = this.changeFiles(this.newImages);
      data.append('section', this.section);
      this.$store.dispatch('uploadImages', data);
      this.newImages = [];
    },
    onToggle(collapsed) {
      this.classes = collapsed ? 'collapsed' : 'expanded';
    },
    modealOpenClose(ind) {
      this.isOpen = !this.isOpen;
      this.index = ind;
    },
    deleteImage(id) {
      this.$store.dispatch('deleteImages', id);
    },
  },
  created() {
    this.$store.dispatch('getImages');
  },
};
</script>

<style lang="scss">
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px;
    position: relative;
    cursor: pointer;
  }

  .file-input {
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue;
  }

  .dropbox p, .d-flex {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }

  .image-container {
    position: relative;
  }
  .delete {
    position: absolute;
    font-size: 30px;
    &:hover {
      color: red;
    }
  }
  input {
    display: block;
  }

  .full {
  border: 1px black solid;
  position: fixed;
  z-index: 99;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.9);
}
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #fff;
  font-size: 60px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 1024px){
  .full {
    padding-top: 100px
  }
  .modal-content {
    width: 100%;
    height: 80%;
  }
}
</style>
