<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
import FloatingActions from '@/components/FloatingActions.vue';
</script>

<template>
  <div id="app-wrapper">
    <AppHeader />

    <main>
      <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
              <component :is="Component" />
          </Transition>
      </RouterView>
    </main>

    <FloatingActions />
  </div>
</template>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


#app-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex-grow: 1;
}


.p-inputtext, .p-inputtextarea {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(212, 175, 55, 0.5) !important;
  color: var(--color-text) !important;
}

.p-inputtext:focus, .p-inputtextarea:focus {
  box-shadow: 0 0 0 1px var(--color-gold) !important;
}

</style>
