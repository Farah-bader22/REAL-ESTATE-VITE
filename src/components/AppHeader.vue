<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
const themeStore = useThemeStore();
</script>

<template>
  <header class="app-header">
    <router-link to="/" class="logo">EXCLUSIVE.</router-link>
    <nav class="nav-links">
      <router-link to="/" class="nav-item">Properties</router-link>
      <router-link to="/contact" class="nav-item">Contact Us</router-link>
      <router-link to="/favourites" class="nav-item">
        <i class="pi pi-heart" style="color: var(--color-gold);"></i>
      </router-link>

      <button @click="themeStore.toggleTheme" class="theme-toggle-btn">
        <i :class="themeStore.isDarkMode ? 'pi pi-sun' : 'pi pi-moon'" :style="{ color: themeStore.isDarkMode ? 'var(--color-gold)' : 'var(--color-text)' }"></i>
      </button>

    </nav>
  </header>
</template>

<style scoped>
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    background-color: var(--color-background); /* يستخدم متغير الثيم */
    border-bottom: 1px solid var(--color-card-border); /* يستخدم متغير الثيم */
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--color-gold);
    text-decoration: none;
    letter-spacing: 2px;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 25px;
}

.nav-item {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 600;
    padding: 5px 0;
    transition: color 0.3s;
    position: relative;
}

.nav-item:hover {
    color: var(--color-gold);
}

.nav-item::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: var(--color-gold);
    transition: width 0.3s ease;
}

.nav-item:hover::after, .router-link-exact-active::after {
    width: 100%;
    left: 0;
    background: var(--color-gold);
}

.theme-toggle-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 0;
    margin-left: 10px;
    transition: transform 0.3s;
}

.theme-toggle-btn:hover {
    transform: rotate(360deg);
}

@media (max-width: 768px) {
    .app-header {
        flex-direction: column;
        gap: 15px;
    }
    .nav-links {
        gap: 15px;
    }
}
</style>
