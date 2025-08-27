<template>
  <div class="min-h-screen bg-barbershop-primary text-barbershop-text overflow-x-hidden">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="pt-20">
      <!-- Account for fixed header -->
      <!-- Router View -->
      <router-view />
    </main>

    <!-- Footer (hidden on auth pages) -->
    <Footer v-if="shouldShowFooter" />

    <!-- Scroll to Top Button -->
    <Transition name="fade">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-12 h-12 bg-barbershop-gold hover:bg-barbershop-gold-dark text-black rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useAuthStore } from './stores/auth'

const route = useRoute()
const authStore = useAuthStore()

// Scroll to top functionality
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// Check if we should show footer (hide on auth pages)
const shouldShowFooter = ref(true)

const updateLayoutBasedOnRoute = () => {
  const authPages = ['/login', '/register']
  shouldShowFooter.value = !authPages.includes(route.path)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // Initialize auth store
  authStore.initAuth()

  // Update layout based on current route
  updateLayoutBasedOnRoute()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Watch for route changes to update layout
watch(() => route.path, updateLayoutBasedOnRoute)
</script>

<style scoped>
/* Transition for scroll to top button */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
