<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { usePropertiesStore } from '@/stores/properties';
import PropertyCard from '@/components/PropertyCard.vue';

const themeStore = useThemeStore();
const propertiesStore = usePropertiesStore();

const favoriteProperties = computed(() => {
  return propertiesStore.properties.filter(p => themeStore.isFavorite(p.id));
});
</script>

<template>
  <div class="favorites-view container animate-in">
    <h1 class="lux-heading favorite-title">Your Exclusive Favorites List</h1>
    <p class="favorite-subtitle">Review your saved properties before making your final selection.</p>

    <div v-if="favoriteProperties.length > 0" class="properties-grid">
      <PropertyCard
        v-for="property in favoriteProperties"
        :key="property.id"
        :property="property"
      />
    </div>

    <div v-else class="empty-state">
      <i class="pi pi-heart-slash" style="font-size: 3rem; color: var(--color-gold);"></i>
      <h2 class="empty-heading">No Properties Saved Yet</h2>
      <p class="empty-text">Click the <i class="pi pi-heart" style="color: var(--color-gold);"></i> icon on any property card to add it to your exclusive list.</p>
    </div>
  </div>
</template>

<style scoped>
.favorites-view {
    padding: 60px 5%;
    text-align: center;
}

.favorite-title {
    margin-bottom: 10px;
}

.favorite-subtitle {
    font-size: 1.2rem;
    color: var(--color-subtitle);
    margin-bottom: 40px;
}

.properties-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 35px;
    padding: 20px 0;
}

.empty-state {
    padding: 100px 20px;
    border: 1px dashed var(--color-card-border);
    border-radius: 10px;
    background: var(--color-card-background);
    margin: 50px auto;
    max-width: 600px;
}

.empty-heading {
    font-family: 'Playfair Display', serif;
    color: var(--color-text);
    margin-top: 20px;
    font-size: 2rem;
}

.empty-text {
    color: var(--color-subtitle);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 15px;
}

@media (max-width: 768px) {
    .favorites-view {
        /* تقليل الحشو الأفقي قليلاً */
        padding-left: 3%;
        padding-right: 3%;
    }

    .favorite-title {
        /* تقليل حجم الخط الرئيسي قليلاً */
        font-size: 2.2rem;
    }

    .properties-grid {
        /* تقليل الفراغ بين البطاقات على الأجهزة الأصغر */
        gap: 25px;
        /* يمكن تخفيف minmax لـ 280px إذا شعرت أن 300px كبيرة جداً */
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
}

@media (max-width: 500px) {
    .favorites-view {
        /* تقليل الحشو الجانبي على الهواتف لزيادة مساحة المحتوى */
        padding-left: 15px;
        padding-right: 15px;
    }

    .empty-heading {
        font-size: 1.5rem;
    }

    .empty-state {
        margin: 30px auto; /* تقليل الهامش العمودي قليلاً */
        padding: 50px 15px;
    }
}
</style>
