<template>
  <div
    class="min-h-screen flex items-center justify-center bg-barbershop-primary py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <!-- Logo -->
        <div class="flex justify-center mb-6">
          <div class="w-16 h-16 bg-barbershop-gold rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              />
            </svg>
          </div>
        </div>

        <h2 class="text-3xl font-display font-bold text-barbershop-text mb-2">
          Accedi alla tua Area Personale
        </h2>
        <p class="text-barbershop-text-muted">Inserisci le tue credenziali per accedere</p>
      </div>

      <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
        <div class="space-y-4">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-barbershop-text mb-2">
              Email
            </label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              autocomplete="email"
              class="appearance-none relative block w-full px-4 py-3 border border-barbershop-border bg-barbershop-secondary text-barbershop-text placeholder-barbershop-text-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-barbershop-gold focus:border-transparent transition-colors duration-200"
              placeholder="La tua email"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-barbershop-text mb-2">
              Password
            </label>
            <div class="relative">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="current-password"
                class="appearance-none relative block w-full px-4 py-3 pr-12 border border-barbershop-border bg-barbershop-secondary text-barbershop-text placeholder-barbershop-text-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-barbershop-gold focus:border-transparent transition-colors duration-200"
                placeholder="La tua password"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-barbershop-text-muted hover:text-barbershop-gold transition-colors duration-200"
              >
                <svg
                  v-if="!showPassword"
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <div
          v-if="authStore.error"
          class="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-lg p-3"
        >
          {{ authStore.error }}
        </div>

        <!-- Demo Credentials -->
        <div class="bg-barbershop-accent/50 border border-barbershop-border rounded-lg p-4">
          <p class="text-barbershop-text-muted text-sm mb-2">
            <strong>Credenziali di demo:</strong>
          </p>
          <p class="text-barbershop-text text-sm">
            Email: mario.rossi@email.com<br />
            Password: password123
          </p>
        </div>

        <!-- Remember me and Forgot password -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              v-model="rememberMe"
              type="checkbox"
              class="h-4 w-4 text-barbershop-gold bg-barbershop-secondary border-barbershop-border rounded focus:ring-barbershop-gold focus:ring-2"
            />
            <label for="remember-me" class="ml-2 block text-sm text-barbershop-text">
              Ricordami
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="text-barbershop-gold hover:text-barbershop-gold-light transition-colors duration-200"
            >
              Password dimenticata?
            </a>
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            :disabled="authStore.loading"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-black bg-barbershop-gold hover:bg-barbershop-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barbershop-gold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!authStore.loading">Accedi</span>
            <span v-else class="flex items-center">
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Accesso in corso...
            </span>
          </button>
        </div>

        <!-- Register Link -->
        <div class="text-center">
          <p class="text-barbershop-text-muted">
            Non hai ancora un account?
            <router-link
              to="/register"
              class="text-barbershop-gold hover:text-barbershop-gold-light transition-colors duration-200 font-medium"
            >
              Registrati qui
            </router-link>
          </p>
        </div>
      </form>

      <!-- Back to Home -->
      <div class="text-center">
        <router-link
          to="/"
          class="inline-flex items-center text-barbershop-text-muted hover:text-barbershop-gold transition-colors duration-200"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Torna alla Homepage
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Form data
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const handleLogin = async () => {
  const success = await authStore.login(email.value, password.value)

  if (success) {
    router.push('/area-personale')
  }
}
</script>
