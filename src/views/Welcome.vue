<template>
  <div class="jumbotron-container welcome-page">
    <b-jumbotron
      class="home-jumbotron"
      header="Ikiringo Dashboard"
      header-level="4"
      lead="Log in to continue"
    >
    <b-form-input v-model="email" class="welcome-input" type="email" placeholder="Email"/>
    <b-form-input v-model="password" type="password" class="welcome-input" placeholder="Password"/>
    <b-button class="login-button" v-if="!isLogin" variant="outline-primary" @click="handleSubmit">
      LOGIN
    </b-button>
    <b-button class="login-button" v-else variant="outline-primary">
      <div class="d-flex justify-content-center p-0">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      email: '',
      password: '',
      isLogin: false,
    };
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit() {
      this.isLogin = true;
      this.login({
        email: this.email,
        password: this.password,
      }).then(() => {
        this.$router.go({ path: '/' });
      }).catch((error) => {
        this.$bvToast.toast(error, {
          title: 'Login Error',
          variant: 'danger',
          toaster: 'b-toaster-top-right',
          autoHideDelay: 3000,
          appendToast: false,
        });
        this.password = '';
        this.isLogin = false;
      });
    },
  },
};
</script>
