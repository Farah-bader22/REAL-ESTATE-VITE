<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useThemeStore } from '@/stores/theme';

const router = useRouter();
const themeStore = useThemeStore();

const goToFavorites = () => {
  router.push('/favourites');
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div class="fab-group">
    <button class="fab-btn" title="Favorites" @click="goToFavorites">
      <i class="pi pi-heart" style="font-size: 1.3rem;"></i>
    </button>

    <button class="fab-btn" title="Scroll to Top" @click="scrollToTop">
      <i class="pi pi-arrow-up" style="font-size: 1.3rem;"></i>
    </button>

    <button class="fab-btn theme-toggle-fab" title="Toggle Theme" @click="themeStore.toggleTheme">
      <i :class="themeStore.isDarkMode ? 'pi pi-sun' : 'pi pi-moon'" style="font-size: 1.3rem;"></i>
    </button>
  </div>
</template>

<style scoped>

.fab-group {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.fab-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color-gold) !important;
    color: var(--color-primary-dark) !important;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: transform 0.3s, opacity 0.3s;
}

.fab-btn:hover {
    transform: scale(1.1);
}
</style>
