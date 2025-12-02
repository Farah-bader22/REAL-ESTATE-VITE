

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import PropertyDetailsView from '@/views/PropertyDetailsView.vue';

import FavoritesView from '@/views/FavoritesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/property/:id',
      name: 'property-details',
      component: PropertyDetailsView,
      props: true
    },
  
    {
      path: '/favourites',
      name: 'favorites',
      component: FavoritesView
    }
  ]
});

export default router;
