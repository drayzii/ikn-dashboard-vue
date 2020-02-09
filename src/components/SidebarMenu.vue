<template>
  <div>
    <sidebar-menu :menu="menu" disableHover />
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
          title: 'Statistics',
          icon: 'fas fa-chart-pie',
        },
        {
          href: '/',
          title: 'Add an artist',
          icon: 'fas fa-user-plus',
        },
        {
          href: '/',
          title: 'Manage Artists',
          icon: 'fas fa-user-edit',
        },
        {
          header: true,
          title: 'BOOKINGS',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'View All Bookings',
          icon: 'far fa-calendar-alt',
        },
        {
          header: true,
          title: 'POSTS',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'Add New Post',
          icon: 'fas fa-plus',
        },
        {
          href: '/',
          title: 'Manage Posts',
          icon: 'fas fa-drum',
        },
        {
          header: true,
          title: 'ACCOUNT',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'Settings',
          icon: 'fas fa-user-cog',
        },
      ],
    };
  },
  components: {
    SidebarMenu,
  },
};
</script>
