<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const visible = ref(true);

const navigateTo = (path: string) => {
  router.push(path);
};

</script>

<template>
  <div class="fab-group" v-if="visible">
    <div @click="navigateTo('/')" class="fab-btn" title="Home / Properties">
      <i class="pi pi-home" style="font-size: 1.2rem;"></i>
    </div>

    <div @click="navigateTo('/favourites')" class="fab-btn" title="Favorites">
      <i class="pi pi-heart-fill" style="font-size: 1.2rem;"></i>
    </div>

    <div @click="navigateTo('/contact')" class="fab-btn" title="Contact Us">
      <i class="pi pi-envelope" style="font-size: 1.2rem;"></i>
    </div>
  </div>
</template>

<style scoped>

</style>
