<template>
  <div class="jumbotron-container">
    <b-jumbotron
      class="home-jumbotron"
      header="Welcome to Ikiringo"
      lead="Log in to continue"
    >
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
