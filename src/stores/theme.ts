

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  // الوضع المبدئي: داكن (Dark)
  const isDarkMode = ref(true);

  // قائمة المفضلة (سنضع فيها IDs العقارات)
  const favorites = ref<string[]>([]);

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light');
  }

  function toggleFavorite(id: string) {
    const index = favorites.value.indexOf(id);
    if (index === -1) {
      favorites.value.push(id);
    } else {
      favorites.value.splice(index, 1);
    }
  }

  function isFavorite(id: string): boolean {
    return favorites.value.includes(id);
  }

  // تهيئة الثيم عند بدء التطبيق
  if (isDarkMode.value) {
     document.documentElement.setAttribute('data-theme', 'dark');
  }

  return { isDarkMode, favorites, toggleTheme, toggleFavorite, isFavorite };
});
