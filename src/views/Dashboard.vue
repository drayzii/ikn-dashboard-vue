<template>
  <div class="dashboard-page">
    <sidebar-menu />
    <div class="dashboard-content"></div>
  </div>
</template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue';

export default {
  data() {
    return {};
  },
  components: {
    SidebarMenu,
  },
};
</script>
