<template>
  <div class="min-h-screen bg-barbershop-primary pt-20">
    <div class="section-container py-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-3xl font-display font-bold text-barbershop-text mb-2">
              Area Personale
            </h1>
            <p class="text-barbershop-text-muted">Benvenuto, {{ authStore.userFullName }}</p>
          </div>
          <div class="mt-4 md:mt-0">
            <button @click="handleLogout" class="btn-secondary">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Esci
            </button>
          </div>
        </div>
      </div>

      <!-- Dashboard Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Profile Card -->
        <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-barbershop-gold rounded-full flex items-center justify-center">
              <span class="text-black font-semibold text-lg">{{ authStore.userInitials }}</span>
            </div>
            <div class="ml-4">
              <h3 class="text-barbershop-text font-semibold">{{ authStore.userFullName }}</h3>
              <p class="text-barbershop-text-muted text-sm">{{ authStore.user?.email }}</p>
            </div>
          </div>
          <div class="text-barbershop-text-muted text-sm">
            <p>📞 {{ authStore.user?.telefono }}</p>
          </div>
        </div>

        <!-- Appointments Summary -->
        <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-barbershop-text font-semibold">Prossimi Appuntamenti</h3>
            <div
              class="w-10 h-10 bg-barbershop-gold/20 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-barbershop-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div class="text-2xl font-bold text-barbershop-gold mb-2">
            {{ authStore.activeAppointments.length }}
          </div>
          <p class="text-barbershop-text-muted text-sm">
            {{
              authStore.activeAppointments.length === 0
                ? 'Nessun appuntamento'
                : 'Appuntamenti attivi'
            }}
          </p>
        </div>

        <!-- Quick Actions -->
        <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
          <h3 class="text-barbershop-text font-semibold mb-4">Azioni Rapide</h3>
          <div class="space-y-3">
            <router-link to="/prenota-appuntamento" class="block w-full btn-primary text-center">
              Prenota Appuntamento
            </router-link>
            <button class="block w-full btn-secondary text-center">Contatta il Salone</button>
          </div>
        </div>
      </div>

      <!-- Main Content Tabs -->
      <div
        class="bg-barbershop-secondary border border-barbershop-border rounded-xl overflow-hidden"
      >
        <!-- Tab Navigation -->
        <div class="border-b border-barbershop-border">
          <nav class="flex space-x-8 px-6">
            <button
              @click="activeTab = 'appointments'"
              :class="[
                'py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200',
                activeTab === 'appointments'
                  ? 'border-barbershop-gold text-barbershop-gold'
                  : 'border-transparent text-barbershop-text-muted hover:text-barbershop-text hover:border-barbershop-text-muted',
              ]"
            >
              Le Mie Prenotazioni
            </button>
            <button
              @click="activeTab = 'profile'"
              :class="[
                'py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200',
                activeTab === 'profile'
                  ? 'border-barbershop-gold text-barbershop-gold'
                  : 'border-transparent text-barbershop-text-muted hover:text-barbershop-text hover:border-barbershop-text-muted',
              ]"
            >
              Profilo
            </button>
          </nav>
        </div>

        <!-- Tab Content -->
        <div class="p-6">
          <!-- Appointments Tab -->
          <div v-if="activeTab === 'appointments'">
            <div v-if="authStore.appointments.length === 0" class="text-center py-12">
              <div
                class="w-16 h-16 bg-barbershop-accent rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-barbershop-text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-barbershop-text mb-2">Nessuna Prenotazione</h3>
              <p class="text-barbershop-text-muted mb-6">
                Non hai ancora prenotato alcun appuntamento. Prenota ora il tuo primo taglio!
              </p>
              <router-link to="/prenota-appuntamento" class="btn-primary">
                Prenota il Primo Appuntamento
              </router-link>
            </div>

            <div v-else class="space-y-4">
              <div
                v-for="appointment in authStore.appointments"
                :key="appointment.id"
                class="bg-barbershop-accent border border-barbershop-border rounded-lg p-6"
              >
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div class="flex-1">
                    <div class="flex items-center mb-2">
                      <h4 class="text-lg font-semibold text-barbershop-text mr-3">
                        {{ appointment.service }}
                      </h4>
                      <span
                        :class="[
                          'px-3 py-1 rounded-full text-xs font-medium',
                          appointment.status === 'confirmed'
                            ? 'bg-green-500/20 text-green-400'
                            : appointment.status === 'pending'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : appointment.status === 'completed'
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-red-500/20 text-red-400',
                        ]"
                      >
                        {{ getStatusText(appointment.status) }}
                      </span>
                    </div>
                    <div class="flex items-center text-barbershop-text-muted text-sm mb-2">
                      <svg
                        class="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {{ formatDate(appointment.date) }} alle {{ appointment.time }}
                    </div>
                    <div class="flex items-center text-barbershop-text-muted text-sm">
                      <svg
                        class="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                      €{{ appointment.price }}
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:ml-6">
                    <div class="flex space-x-2">
                      <button
                        v-if="
                          appointment.status === 'confirmed' || appointment.status === 'pending'
                        "
                        @click="cancelAppointment(appointment.id)"
                        :disabled="authStore.loading"
                        class="btn-secondary text-sm"
                      >
                        Cancella
                      </button>
                      <button v-if="appointment.status === 'completed'" class="btn-primary text-sm">
                        Prenota di Nuovo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Tab -->
          <div v-if="activeTab === 'profile'">
            <div class="max-w-2xl">
              <h3 class="text-xl font-semibold text-barbershop-text mb-6">
                Informazioni Personali
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-barbershop-text mb-2"> Nome </label>
                  <input
                    type="text"
                    :value="authStore.user?.nome"
                    readonly
                    class="w-full px-4 py-3 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-barbershop-text mb-2">
                    Cognome
                  </label>
                  <input
                    type="text"
                    :value="authStore.user?.cognome"
                    readonly
                    class="w-full px-4 py-3 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-barbershop-text mb-2"> Email </label>
                  <input
                    type="email"
                    :value="authStore.user?.email"
                    readonly
                    class="w-full px-4 py-3 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-barbershop-text mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    :value="authStore.user?.telefono"
                    readonly
                    class="w-full px-4 py-3 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text"
                  />
                </div>
              </div>

              <div class="mt-8">
                <button class="btn-primary mr-4">Modifica Profilo</button>
                <button class="btn-secondary">Cambia Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const activeTab = ref('appointments')

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}

const cancelAppointment = async (appointmentId: string) => {
  if (confirm('Sei sicuro di voler cancellare questo appuntamento?')) {
    await authStore.cancelAppointment(appointmentId)
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'Confermato'
    case 'pending':
      return 'In Attesa'
    case 'completed':
      return 'Completato'
    case 'cancelled':
      return 'Cancellato'
    default:
      return status
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('it-IT', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

onMounted(() => {
  // Initialize auth state from localStorage if needed
  authStore.initAuth()
})
</script>
