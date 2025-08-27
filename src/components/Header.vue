<template>
  <header class="fixed top-0 w-full z-50 bg-barbershop-primary/95 backdrop-blur-sm border-b border-barbershop-border">
    <nav class="section-container py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-barbershop-gold rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-xl font-display font-bold text-barbershop-text">BarberShop</h1>
            <p class="text-xs text-barbershop-text-muted">Eleganza & Stile</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="text-barbershop-text hover:text-barbershop-gold transition-colors duration-300">Home</router-link>
          <a href="/#servizi" class="text-barbershop-text hover:text-barbershop-gold transition-colors duration-300">Servizi</a>
          <a href="/#galleria" class="text-barbershop-text hover:text-barbershop-gold transition-colors duration-300">Galleria</a>
          <a href="/#contatti" class="text-barbershop-text hover:text-barbershop-gold transition-colors duration-300">Contatti</a>
        </div>

        <!-- Login Status & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Login Status -->
          <div class="hidden sm:flex items-center space-x-3">
            <div v-if="authStore.isLoggedIn" class="flex items-center space-x-2">
              <router-link to="/area-personale" class="flex items-center space-x-2 hover:text-barbershop-gold transition-colors">
                <div class="w-8 h-8 bg-barbershop-gold rounded-full flex items-center justify-center">
                  <span class="text-black text-sm font-semibold">{{ authStore.userInitials }}</span>
                </div>
                <span class="text-barbershop-text text-sm">{{ authStore.userFullName }}</span>
              </router-link>
              <button @click="logout" class="text-barbershop-text-muted hover:text-barbershop-gold transition-colors text-sm ml-2">
                Esci
              </button>
            </div>
            <router-link v-else to="/login" class="btn-secondary text-sm py-2 px-4">
              Area Personale
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <button @click="toggleMobileMenu" class="md:hidden text-barbershop-text">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 py-4 border-t border-barbershop-border animate-slide-up">
        <div class="flex flex-col space-y-4">
          <router-link to="/" @click="closeMobileMenu" class="text-barbershop-text hover:text-barbershop-gold transition-colors duration-300">Home</router-link>
          <a href="/#servizi" @click="closeMobileMenu" class="text-barbershop-text hover:text-barbershop-gold transition-colors duration-300">Servizi</a>
          <a href="/#galleria" @click="closeMobileMenu" class="text-barbershop-text hover:text-barbershop-gold transition-colors duration-300">Galleria</a>
          <a href="/#contatti" @click="closeMobileMenu" class="text-barbershop-text hover:text-barbershop-gold transition-colors duration-300">Contatti</a>

          <!-- Mobile Login Status -->
          <div class="pt-4 border-t border-barbershop-border">
            <div v-if="authStore.isLoggedIn" class="space-y-2">
              <router-link to="/area-personale" @click="closeMobileMenu" class="flex items-center space-x-2 text-barbershop-text hover:text-barbershop-gold transition-colors">
                <div class="w-8 h-8 bg-barbershop-gold rounded-full flex items-center justify-center">
                  <span class="text-black text-sm font-semibold">{{ authStore.userInitials }}</span>
                </div>
                <span class="text-sm">{{ authStore.userFullName }}</span>
              </router-link>
              <button @click="logout" class="w-full text-left text-barbershop-text-muted hover:text-barbershop-gold transition-colors text-sm">
                Esci
              </button>
            </div>
            <router-link v-else to="/login" @click="closeMobileMenu" class="btn-secondary w-full text-sm py-2 block text-center">
              Area Personale
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const logout = () => {
  authStore.logout()
  closeMobileMenu()
  router.push('/')
}

onMounted(() => {
  // Initialize auth state on component mount
  authStore.initAuth()
})
</script>
