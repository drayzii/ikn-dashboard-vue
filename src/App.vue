<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand class="logo-container">
        <router-link to='/'>
          <div class="logo"/>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="menu-item" v-if="isLoggedIn">
            <router-link to='#'>Log out</router-link>
          </b-nav-item>
          <b-nav-item class="menu-item">
            <router-link to='#'>Go to ikiringo.rw</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
};
</script>
