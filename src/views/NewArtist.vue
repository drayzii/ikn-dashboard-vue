<template>
  <div class="dashboard-page">
    <sidebar-menu :onToggle="onToggle" />
    <div :class="`dashboard-content ${classes}`">
      <b-card class="text-center paper">
        <div class="col-sm-6 new-artist-form">
          <h3>Add a new Artist</h3>
          <b-form @submit.prevent="onSubmit">
            <b-form-input
              id="input-2"
              class="new-artist-input"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>

            <b-form-select
              id="input-3"
              class="new-artist-input"
              v-model="form.title"
              :options="titles"
              required
            ></b-form-select>

            <div class="text-left new-artist-input">
              <b-form-file
                v-model="form.file"
                class=""
                placeholder="Add artist's picture..."
              ></b-form-file>
              <div class="m-1">Uploading ...</div>
            </div>


            <b-form-textarea
              id="textarea"
              class="new-artist-input"
              v-model="form.bio"
              placeholder="Enter the artist's Bio..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>

            <b-button type="submit" variant="primary" class="login-button">
              Add Artist
            </b-button>
          </b-form>
        </div>
        <div class="col-sm-3"/>
      </b-card>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue';

export default {
  data() {
    return {
      classes: 'collapsed',
      form: {
        name: '',
        title: null,
        file: null,
        bio: '',
      },
      titles: [
        { value: null, text: 'Choose the artist\'s title' },
        { value: 'dancer', text: 'Dancer' },
        { value: 'singer', text: 'Singer' },
      ],
    };
  },
  components: {
    SidebarMenu,
  },
  methods: {
    onToggle(collapsed) {
      this.classes = collapsed ? 'collapsed' : 'expanded';
    },
    onSubmit() {
      // console.log(this.form);
    },
  },
};
</script>
