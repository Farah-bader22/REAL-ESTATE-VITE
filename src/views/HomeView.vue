<script setup lang="ts">
import { ref, computed } from 'vue';
import PropertyCard from '@/components/PropertyCard.vue';
import { usePropertiesStore } from '@/stores/properties';
import InputText from 'primevue/inputtext';

const propertiesStore = usePropertiesStore();
const searchQuery = ref('');

// تصفية العقارات بناءً على البحث
const filteredProperties = computed(() => {
  const query = searchQuery.value.toLowerCase();
  if (!query) {
    return propertiesStore.properties;
  }
  return propertiesStore.properties.filter(property =>
    property.title.toLowerCase().includes(query) ||
    property.location.toLowerCase().includes(query) ||
    property.type.toLowerCase().includes(query)
  );
});
</script>

<template>
  <div class="home-view container">
    <div class="hero-section">
      <h1 class="lux-heading hero-title animate-in">Discover Our Exclusive Listings</h1>
      <p class="hero-subtitle animate-in">A curated selection of the finest properties worldwide.</p>

      <div class="search-bar animate-in">
          <i class="pi pi-search search-icon"></i>
          <InputText
              type="text"
              v-model="searchQuery"
              placeholder="Search by location, type, or title..."
              class="p-inputtext-lg custom-search-input"
          />
      </div>
    </div>

    <div v-if="filteredProperties.length > 0" class="properties-grid">
      <PropertyCard
        v-for="(property, index) in filteredProperties"
        :key="property.id"
        :property="property"
        class="animate-in"
        :style="{ '--delay-factor': `${index * 0.1}s` }"
      />
    </div>
    <div v-else class="empty-state">
      <h2>No Listings Found</h2>
      <p>Try adjusting your search criteria.</p>
    </div>
  </div>
</template>

<style scoped>
.home-view {
    padding-top: 50px;
    padding-bottom: 80px;
    text-align: center;
}

.hero-section {
    margin-bottom: 70px;
}

.hero-title {
    color: var(--color-text);
}

.hero-subtitle {
    font-size: 1.3rem;
    color: var(--color-subtitle);
    margin-bottom: 40px;
}

.search-bar {
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--color-card-background);
    border: 1px solid var(--color-card-border);
    border-radius: 30px;
    padding: 10px 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}

.search-bar:focus-within {
    border-color: var(--color-gold);
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.3);
}

.search-icon {
    font-size: 1.2rem;
    color: var(--color-gold);
    margin-right: 10px;
}

.custom-search-input {
    flex-grow: 1;
    border: none !important;
    background: transparent !important;
    padding: 0 !important;
    font-size: 1rem;
    color: var(--color-text) !important;
}

.custom-search-input:focus {
    box-shadow: none !important;
}

.properties-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 35px;
    padding: 20px 0;
}

.empty-state {
    padding: 100px 20px;
    color: var(--color-subtitle);
}


@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: var(--delay-factor, 0s);
}


.hero-title { animation-delay: 0.1s; }
.hero-subtitle { animation-delay: 0.3s; }
.search-bar { animation-delay: 0.5s; }

@media (max-width: 768px) {
    .hero-title {
        /* تقليل حجم الخط الرئيسي قليلاً */
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }

    .properties-grid {
        /* تقليل الفراغ بين البطاقات على الأجهزة الأصغر */
        gap: 25px;
        /* يمكن تخفيف minmax لـ 280px إذا شعرت أن 300px كبيرة جداً */
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
}

@media (max-width: 500px) {
    .home-view {
        /* تقليل الحشو الجانبي على الهواتف لزيادة مساحة المحتوى */
        padding-left: 15px;
        padding-right: 15px;
    }

    .hero-section {
        margin-bottom: 50px;
    }

    .search-bar {
        padding: 8px 15px; /* تقليل حشو شريط البحث */
    }
}
</style>
