<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useThemeStore } from '@/stores/theme';
import type { Property } from '@/types/property'; // **تم التعديل هنا: إضافة كلمة 'type'**
import Button from 'primevue/button';
import Tag from 'primevue/tag';


const props = defineProps<{
    property: Property;
}>();

const router = useRouter();
const themeStore = useThemeStore();


const goToDetails = (id: string) => {
    router.push({ name: 'property-details', params: { id } });
};


const isFavorite = computed(() => themeStore.isFavorite(props.property.id));

// تبديل حالة المفضلة
const toggleFavorite = (event: Event) => {
    event.stopPropagation();
    themeStore.toggleFavorite(props.property.id);
};


</script>

<template>
  <div class="property-card" @click="goToDetails(property.id)">
    <div class="card-image">
      <img :src="property.imagePath" :alt="property.title" class="property-img"/>

      <Tag :value="property.type" class="type-tag"/>

      <button class="favorite-btn" @click="toggleFavorite">
        <i :class="['pi', isFavorite ? 'pi-heart-fill' : 'pi-heart']"></i>
      </button>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ property.title }}</h3>
      <p class="card-location"><i class="pi pi-map-marker"></i> {{ property.location }}</p>

      <div class="card-details">
        <div class="detail-item">
          <i class="pi pi-th-large"></i> <span>{{ property.area }} sqm</span>
        </div>
        <div class="detail-item">
          <i class="pi pi-bed"></i> <span>{{ property.bedrooms }} Beds</span>
        </div>
        <div class="detail-item">
          <i class="pi pi-bath"></i> <span>{{ property.bathrooms }} Baths</span>
        </div>
      </div>

      <div class="card-footer">
        <span class="card-price">{{ property.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</span>
        <Button
          label="View Details"
          class="p-button-gold p-button-sm"
          icon="pi pi-arrow-right"
          iconPos="right"
          @click="goToDetails(property.id)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.property-card {
    background: var(--color-card-background) !important;
    border: 1px solid var(--color-card-border);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;

    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.property-card:hover {
    transform: translateY(-10px);
    border-color: var(--color-gold);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
}

.card-image {
    height: 200px;
    background-color: var(--color-primary-dark);
    position: relative;
    overflow: hidden;
}

.property-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.property-card:hover .property-img {
    transform: scale(1.05);
}

.type-tag {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: var(--color-gold);
    color: var(--color-primary-dark);
    font-weight: bold;
    font-size: 0.8rem;
    padding: 4px 10px;
}

.favorite-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    outline: none;
}

.favorite-btn i {
    color: var(--color-gold);
    font-size: 1.1rem;
    transition: transform 0.3s;
}

.favorite-btn:hover {
    background: var(--color-gold);
}

.favorite-btn:hover i {
    color: var(--color-primary-dark);
    transform: scale(1.1);
}

.card-content {
    padding: 20px;
    text-align: left;
}

.card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 5px;
    color: var(--color-text);
}

.card-location {
    color: var(--color-subtitle);
    font-size: 0.95rem;
    margin-bottom: 20px;
}

.card-location i {
    color: var(--color-gold);
    margin-right: 5px;
}

.card-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-top: 1px solid var(--color-card-border);
    padding-top: 15px;
}

.detail-item {
    display: flex;
    align-items: center;
    color: var(--color-subtitle);
    font-size: 0.9rem;
}

.detail-item i {
    color: var(--color-gold);
    margin-right: 5px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-price {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--color-gold);
}
</style>
