<template>
  <div class="jumbotron-container">
    <b-jumbotron
      class="home-jumbotron"
      header="Welcome to Ikiringo"
      lead="Log in to continue"
    >
    <b-form-input v-model="text" class="welcome-input" type="email" placeholder="Email"/>
    <b-form-input v-model="text" type="password" class="welcome-input" placeholder="Password"/>
    <router-link to='/login'>
      <b-button class="login-button" variant="outline-primary">
        Log In
      </b-button>
      </router-link>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
