<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'; 
import { usePropertiesStore } from '@/stores/properties';
import { useThemeStore } from '@/stores/theme';
import type { Property } from '@/stores/properties';
import Button from 'primevue/button';
import Card from 'primevue/card';

const route = useRoute();
const router = useRouter();
const store = usePropertiesStore();
const themeStore = useThemeStore();


const propertyId = route.params.id as string;


const property = computed<Property | undefined>(() => {
    const propertyComputedRef = store.getPropertyById(propertyId);
    return propertyComputedRef.value;
});


const goToContact = () => {

    router.push({ name: 'contact' });

};

const handleFavorite = () => {
    if (property.value) {
        themeStore.toggleFavorite(property.value.id);
    }
};

</script>

<template>
  <div class="property-details-page container animate-in">
    <div v-if="property">
      <h1 class="lux-heading details-title animate-in">{{ property.title }}</h1>
      <p class="location-subtitle animate-in">
          <i class="pi pi-map-marker" style="color: var(--color-gold);"></i> {{ property.location }}
      </p>

      <div class="image-gallery animate-in">
        <img :src="property.imagePath" :alt="property.title" class="main-detail-image"/>
        </div>

      <div class="details-content-grid">
        <div class="description-section info-card animate-in">
            <h2 class="section-heading">About This Property</h2>
            <p class="description-text">{{ property.description }}</p>
        </div>

        <Card class="info-card key-features-card animate-in">
          <template #content>
            <h2 class="section-heading">Key Features</h2>
            <div class="features-list">
                <div class="feature-item">
                    <i class="pi pi-dollar feature-icon"></i>
                    <span>Price: <strong>{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(property.price) }}</strong></span>
                </div>
                <div class="feature-item">
                    <i class="pi pi-home feature-icon"></i>
                    <span>Area: <strong>{{ property.area }} sqm</strong></span>
                </div>
                <div class="feature-item">
                    <i class="pi pi-bed feature-icon"></i>
                    <span>Bedrooms: <strong>{{ property.bedrooms }}</strong></span>
                </div>
                <div class="feature-item">
                    <i class="pi pi-bath feature-icon"></i>
                    <span>Bathrooms: <strong>{{ property.bathrooms }}</strong></span>
                </div>
                <div class="feature-item">
                    <i class="pi pi-tag feature-icon"></i>
                    <span>Type: <strong>{{ property.type }}</strong></span>
                </div>
            </div>

            <h2 class="section-heading mt-5">Property Amenities</h2>
            <ul class="amenities-list">
                <li v-for="amenity in property.amenities" :key="amenity" class="amenity-item">
                    <i class="pi pi-check-circle amenity-icon"></i>
                    <span>{{ amenity }}</span>
                </li>
            </ul>
          </template>
        </Card>
      </div>

      <div class="action-buttons-group animate-in">
        <Button
            label="Request Private Showing"
            class="p-button-gold flex-grow"
            icon="pi pi-calendar"
            @click="goToContact"  />
        <Button
            :icon="themeStore.isFavorite(property.id) ? 'pi pi-heart-fill' : 'pi pi-heart'"
            :label="themeStore.isFavorite(property.id) ? 'Remove from Favorites' : 'Add to Favorites'"
            @click="handleFavorite"
            class="p-button-secondary secondary-gold-btn"
        />
      </div>

    </div>
    <div v-else class="loading-message lux-heading">
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem; color: var(--color-gold);"></i> Loading Exclusive Property...
    </div>
  </div>
</template>

<style scoped>
.property-details-page {
    padding: 60px 5%;
    max-width: 1200px;
    margin: 0 auto;
}

.details-title {
    text-align: center;
    margin-bottom: 10px;
    color: var(--color-text);
}

.location-subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: var(--color-subtitle);
    margin-bottom: 40px;
}

.image-gallery {
    margin-bottom: 50px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: fadeIn 1s ease-out 0.3s forwards;
}

.main-detail-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
}

.details-content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    margin-bottom: 50px;
}

.description-section {
    padding: 30px;
    border-radius: 10px;
    background-color: var(--color-card-background);
    border: 1px solid var(--color-card-border);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.section-heading {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: var(--color-gold);
    margin-bottom: 25px;
    border-bottom: 1px solid rgba(212, 175, 55, 0.3);
    padding-bottom: 10px;
}

.description-text {
    line-height: 1.8;
    color: var(--color-text);
    font-size: 1.1rem;
}

.key-features-card {
    background: var(--color-card-background) !important;
    border-radius: 10px;
    padding: 30px;
}

.features-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 30px;
}

.feature-item {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: var(--color-text);
}

.feature-icon {
    color: var(--color-gold);
    margin-right: 15px;
    font-size: 1.3rem;
}

.amenities-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

.amenity-item {
    font-size: 1.05rem;
    color: var(--color-text);
    display: flex;
    align-items: center;
}

.amenity-icon {
    color: var(--color-gold);
    margin-right: 10px;
}

.action-buttons-group {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    justify-content: center;
}

.flex-grow {
    flex-grow: 1;
    max-width: 300px;
}

.secondary-gold-btn {
    background: transparent !important;
    border: 1px solid var(--color-gold) !important;
    color: var(--color-gold) !important;
    max-width: 300px;
}
.secondary-gold-btn:hover {
    background: rgba(212, 175, 55, 0.1) !important;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
}

.loading-message {
    text-align: center;
    margin-top: 100px;
    font-size: 1.8rem;
    color: var(--color-gold);
}

/* Animations */
.property-details-page .animate-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.8s ease-out forwards;
}
.details-title { animation-delay: 0.1s; }
.location-subtitle { animation-delay: 0.2s; }
.image-gallery { animation-delay: 0.3s; }
.description-section { animation-delay: 0.4s; }
.key-features-card { animation-delay: 0.5s; }
.action-buttons-group { animation-delay: 0.6s; }


/* Responsive adjustments */
@media (max-width: 992px) {
    .details-content-grid {
        grid-template-columns: 1fr;
    }
    .action-buttons-group {
        flex-direction: column;
        align-items: center;
    }
    .flex-grow, .secondary-gold-btn {
        width: 100%;
        max-width: 400px;
    }
}
@media (max-width: 600px) {
    .main-detail-image {
        height: 300px;
    }
    .amenities-list {
        grid-template-columns: 1fr;
    }
}
</style>
