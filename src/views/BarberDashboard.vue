<template>
  <div class="min-h-screen bg-barbershop-primary pt-20">
    <div class="section-container py-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-3xl font-display font-bold text-barbershop-text mb-2">
              Dashboard Barbiere
            </h1>
            <p class="text-barbershop-text-muted">
              Gestisci prenotazioni, clienti e monitora l'andamento del salone
            </p>
          </div>
          <div class="mt-4 md:mt-0 flex space-x-3">
            <button
              @click="activeSection = 'overview'"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                activeSection === 'overview' 
                  ? 'bg-barbershop-gold text-black' 
                  : 'bg-barbershop-secondary text-barbershop-text hover:bg-barbershop-accent'
              ]"
            >
              Panoramica
            </button>
            <button
              @click="activeSection = 'appointments'"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                activeSection === 'appointments' 
                  ? 'bg-barbershop-gold text-black' 
                  : 'bg-barbershop-secondary text-barbershop-text hover:bg-barbershop-accent'
              ]"
            >
              Prenotazioni
            </button>
            <button
              @click="activeSection = 'clients'"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                activeSection === 'clients' 
                  ? 'bg-barbershop-gold text-black' 
                  : 'bg-barbershop-secondary text-barbershop-text hover:bg-barbershop-accent'
              ]"
            >
              Clienti
            </button>
          </div>
        </div>
      </div>

      <!-- Overview Section -->
      <div v-if="activeSection === 'overview'">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-barbershop-text-muted text-sm">Prenotazioni Oggi</p>
                <p class="text-2xl font-bold text-barbershop-gold">{{ todayStats.appointments }}</p>
              </div>
              <div class="w-12 h-12 bg-barbershop-gold/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            <div class="mt-2 flex items-center text-sm">
              <span class="text-green-400">+12%</span>
              <span class="text-barbershop-text-muted ml-2">vs ieri</span>
            </div>
          </div>

          <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-barbershop-text-muted text-sm">Fatturato Oggi</p>
                <p class="text-2xl font-bold text-barbershop-gold">€{{ todayStats.revenue }}</p>
              </div>
              <div class="w-12 h-12 bg-barbershop-gold/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
            </div>
            <div class="mt-2 flex items-center text-sm">
              <span class="text-green-400">+8%</span>
              <span class="text-barbershop-text-muted ml-2">vs ieri</span>
            </div>
          </div>

          <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-barbershop-text-muted text-sm">Clienti Totali</p>
                <p class="text-2xl font-bold text-barbershop-gold">{{ totalStats.clients }}</p>
              </div>
              <div class="w-12 h-12 bg-barbershop-gold/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
            </div>
            <div class="mt-2 flex items-center text-sm">
              <span class="text-green-400">+24</span>
              <span class="text-barbershop-text-muted ml-2">questo mese</span>
            </div>
          </div>

          <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-barbershop-text-muted text-sm">Tasso Completamento</p>
                <p class="text-2xl font-bold text-barbershop-gold">{{ totalStats.completionRate }}%</p>
              </div>
              <div class="w-12 h-12 bg-barbershop-gold/20 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
            </div>
            <div class="mt-2 flex items-center text-sm">
              <span class="text-green-400">+2%</span>
              <span class="text-barbershop-text-muted ml-2">vs mese scorso</span>
            </div>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <!-- Revenue Chart -->
          <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
            <h3 class="text-lg font-semibold text-barbershop-text mb-4">Fatturato Settimanale</h3>
            <div class="h-64 flex items-end justify-between space-x-2">
              <div
                v-for="(day, index) in weeklyRevenue"
                :key="index"
                class="flex-1 bg-barbershop-gold/20 hover:bg-barbershop-gold/40 transition-colors rounded-t"
                :style="{ height: `${(day.amount / Math.max(...weeklyRevenue.map(d => d.amount))) * 100}%` }"
              >
                <div class="h-full flex flex-col justify-end p-2">
                  <div class="text-xs text-barbershop-text text-center">€{{ day.amount }}</div>
                  <div class="text-xs text-barbershop-text-muted text-center mt-1">{{ day.day }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Appointments Chart -->
          <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
            <h3 class="text-lg font-semibold text-barbershop-text mb-4">Prenotazioni per Servizio</h3>
            <div class="space-y-4">
              <div v-for="service in serviceStats" :key="service.name" class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-barbershop-gold rounded-full"></div>
                  <span class="text-barbershop-text">{{ service.name }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-24 bg-barbershop-accent rounded-full h-2">
                    <div 
                      class="bg-barbershop-gold h-2 rounded-full transition-all duration-500"
                      :style="{ width: `${(service.count / Math.max(...serviceStats.map(s => s.count))) * 100}%` }"
                    ></div>
                  </div>
                  <span class="text-barbershop-text-muted text-sm w-8">{{ service.count }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Today's Schedule -->
        <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-barbershop-text">Programma di Oggi</h3>
            <span class="text-barbershop-text-muted">{{ currentDate }}</span>
          </div>
          
          <div v-if="todayAppointments.length === 0" class="text-center py-8">
            <div class="w-16 h-16 bg-barbershop-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-barbershop-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <p class="text-barbershop-text-muted">Nessuna prenotazione per oggi</p>
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="appointment in todayAppointments"
              :key="appointment.id"
              class="flex items-center justify-between p-4 bg-barbershop-accent rounded-lg"
            >
              <div class="flex items-center space-x-4">
                <div class="text-center">
                  <div class="text-barbershop-gold font-semibold">{{ appointment.time }}</div>
                  <div class="text-xs text-barbershop-text-muted">{{ appointment.duration }}min</div>
                </div>
                <div>
                  <h4 class="font-semibold text-barbershop-text">{{ appointment.clientName }}</h4>
                  <p class="text-sm text-barbershop-text-muted">{{ appointment.service }}</p>
                  <p class="text-xs text-barbershop-text-muted">{{ appointment.phone }}</p>
                </div>
              </div>
              <div class="text-right">
                <div class="text-barbershop-gold font-semibold">€{{ appointment.price }}</div>
                <span :class="[
                  'text-xs px-2 py-1 rounded-full',
                  appointment.status === 'confirmed' ? 'bg-green-500/20 text-green-400' :
                  appointment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                ]">
                  {{ getStatusText(appointment.status) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Appointments Section -->
      <div v-if="activeSection === 'appointments'">
        <AppointmentManagement />
      </div>

      <!-- Clients Section -->
      <div v-if="activeSection === 'clients'">
        <ClientManagement />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import AppointmentManagement from '../components/AppointmentManagement.vue'
import ClientManagement from '../components/ClientManagement.vue'

const activeSection = ref('overview')

// Mock data for dashboard
const todayStats = ref({
  appointments: 12,
  revenue: 420
})

const totalStats = ref({
  clients: 847,
  completionRate: 94
})

const weeklyRevenue = ref([
  { day: 'Lun', amount: 280 },
  { day: 'Mar', amount: 340 },
  { day: 'Mer', amount: 220 },
  { day: 'Gio', amount: 380 },
  { day: 'Ven', amount: 450 },
  { day: 'Sab', amount: 520 },
  { day: 'Dom', amount: 0 }
])

const serviceStats = ref([
  { name: 'Taglio Capelli', count: 145 },
  { name: 'Rasatura', count: 89 },
  { name: 'Cura Barba', count: 76 },
  { name: 'Trattamento Viso', count: 34 },
  { name: 'Shampoo', count: 67 }
])

const todayAppointments = ref([
  {
    id: '1',
    time: '09:00',
    duration: 30,
    clientName: 'Marco Rossi',
    service: 'Taglio Capelli',
    phone: '+39 123 456 7890',
    price: 25,
    status: 'confirmed'
  },
  {
    id: '2',
    time: '09:30',
    duration: 45,
    clientName: 'Giuseppe Verdi',
    service: 'Taglio + Rasatura',
    phone: '+39 987 654 3210',
    price: 45,
    status: 'confirmed'
  },
  {
    id: '3',
    time: '10:30',
    duration: 30,
    clientName: 'Andrea Bianchi',
    service: 'Cura Barba',
    phone: '+39 555 123 4567',
    price: 15,
    status: 'pending'
  }
])

const currentDate = computed(() => {
  return new Date().toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

const getStatusText = (status: string) => {
  switch (status) {
    case 'confirmed': return 'Confermato'
    case 'pending': return 'In Attesa'
    case 'completed': return 'Completato'
    case 'cancelled': return 'Cancellato'
    default: return status
  }
}

onMounted(() => {
  // Load dashboard data
})
</script>
