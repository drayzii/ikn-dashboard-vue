import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Welcome from '../views/Welcome.vue';
import Dashboard from '../views/Dashboard.vue';
import NewArtist from '../views/NewArtist.vue';
import GalleryPage from '../views/GalleryPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'welcome',
    component: Welcome,
    meta: {
      noAuth: true,
    },
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/new-artist',
    name: 'new-artist',
    component: NewArtist,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }

  if (to.matched.some(record => record.meta.noAuth)) {
    if (!store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/');
  } else {
    next();
  }
});

export default router;
