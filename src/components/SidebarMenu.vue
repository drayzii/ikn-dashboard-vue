<template>
  <div>
    <sidebar-menu
      :menu="menu"
      @toggle-collapse="onToggleCollapse"
      disableHover
      collapsed
    />
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';

export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'ARTISTS',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fas fa-chart-pie',
        },
        {
          href: '/new-artist',
          title: 'Add an artist',
          icon: 'fas fa-user-plus',
        },
        {
          href: '/gallery',
          title: 'Gallery',
          icon: 'fas fa-images',
        },
        {
          href: '/artists',
          title: 'Manage Artists',
          icon: 'fas fa-user-edit',
        },
        {
          header: true,
          title: 'BOOKINGS',
          hiddenOnCollapse: true,
        },
        {
          href: '/bookings',
          title: 'View All Bookings',
          icon: 'far fa-calendar-alt',
        },
        {
          header: true,
          title: 'POSTS',
          hiddenOnCollapse: true,
        },
        {
          href: '/add-post',
          title: 'Add New Post',
          icon: 'fas fa-plus',
        },
        {
          href: '/posts',
          title: 'Manage Posts',
          icon: 'fas fa-drum',
        },
        {
          header: true,
          title: 'ACCOUNT',
          hiddenOnCollapse: true,
        },
        {
          href: '/settings',
          title: 'Settings',
          icon: 'fas fa-user-cog',
        },
      ],
    };
  },
  components: {
    SidebarMenu,
  },
  methods: {
    onToggleCollapse(collapsed) {
      this.onToggle(collapsed);
    },
  },
  props: {
    onToggle: Function,
  },
};
</script>
