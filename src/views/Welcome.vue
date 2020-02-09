<template>
  <div class="jumbotron-container">
    <b-jumbotron
      class="home-jumbotron"
      header="Welcome to Ikiringo"
      lead="Log in to continue"
    >
    <b-form-input v-model="email" class="welcome-input" type="email" placeholder="Email"/>
    <b-form-input v-model="password" type="password" class="welcome-input" placeholder="Password"/>
    <b-button class="login-button" variant="outline-primary" @click="handleSubmit">
      Log In
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
    };
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit() {
      this.login({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
