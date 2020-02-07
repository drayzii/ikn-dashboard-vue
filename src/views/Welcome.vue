<template>
  <div class="jumbotron-container">
    <b-jumbotron
      class="home-jumbotron"
      header="Welcome to Ikiringo"
      lead="Log in to continue"
    >
      <b-button class="login-button" variant="outline-primary">
        <router-link to='/login'>Log In</router-link>
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
