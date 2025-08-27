<template>
  <div class="min-h-screen bg-barbershop-primary pt-20">
    <div class="section-container py-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center mb-4">
          <router-link 
            to="/area-personale" 
            class="text-barbershop-text-muted hover:text-barbershop-gold transition-colors mr-4"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </router-link>
          <h1 class="text-3xl font-display font-bold text-barbershop-text">
            Prenota un Appuntamento
          </h1>
        </div>
        <p class="text-barbershop-text-muted">
          Scegli il servizio, la data e l'orario che preferisci
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Services Selection -->
        <div class="lg:col-span-1">
          <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
            <h3 class="text-xl font-semibold text-barbershop-text mb-6">
              Seleziona il Servizio
            </h3>
            <div class="space-y-3">
              <div
                v-for="service in services"
                :key="service.id"
                @click="selectedService = service"
                :class="[
                  'p-4 border rounded-lg cursor-pointer transition-all duration-200',
                  selectedService?.id === service.id
                    ? 'border-barbershop-gold bg-barbershop-gold/10'
                    : 'border-barbershop-border hover:border-barbershop-text-muted bg-barbershop-accent'
                ]"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-semibold text-barbershop-text">{{ service.name }}</h4>
                    <p class="text-sm text-barbershop-text-muted mt-1">{{ service.description }}</p>
                    <p class="text-xs text-barbershop-text-muted mt-2">
                      Durata: {{ service.duration }} min
                    </p>
                  </div>
                  <div class="text-right">
                    <span class="text-lg font-bold text-barbershop-gold">€{{ service.price }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Selected Service Summary -->
            <div v-if="selectedService" class="mt-6 p-4 bg-barbershop-accent border border-barbershop-border rounded-lg">
              <h4 class="font-semibold text-barbershop-text mb-2">Servizio Selezionato</h4>
              <div class="text-sm text-barbershop-text-muted">
                <p>{{ selectedService.name }}</p>
                <p>Durata: {{ selectedService.duration }} min</p>
                <p class="text-barbershop-gold font-semibold">€{{ selectedService.price }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Calendar and Time Slots -->
        <div class="lg:col-span-2">
          <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
            <h3 class="text-xl font-semibold text-barbershop-text mb-6">
              Seleziona Data e Orario
            </h3>

            <!-- Calendar Navigation -->
            <div class="flex items-center justify-between mb-6">
              <button
                @click="previousMonth"
                class="p-2 text-barbershop-text-muted hover:text-barbershop-gold transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <h4 class="text-lg font-semibold text-barbershop-text">
                {{ currentMonthYear }}
              </h4>
              <button
                @click="nextMonth"
                class="p-2 text-barbershop-text-muted hover:text-barbershop-gold transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <!-- Calendar Grid -->
            <div class="grid grid-cols-7 gap-1 mb-6">
              <!-- Day Headers -->
              <div
                v-for="day in dayHeaders"
                :key="day"
                class="p-2 text-center text-sm font-medium text-barbershop-text-muted"
              >
                {{ day }}
              </div>

              <!-- Calendar Days -->
              <div
                v-for="date in calendarDays"
                :key="date.key"
                @click="selectDate(date)"
                :class="[
                  'p-2 text-center text-sm cursor-pointer transition-all duration-200 rounded',
                  date.isCurrentMonth
                    ? date.isToday
                      ? 'bg-barbershop-gold text-black font-semibold'
                      : date.isSelected
                        ? 'bg-barbershop-gold/20 text-barbershop-gold border border-barbershop-gold'
                        : date.isAvailable
                          ? 'text-barbershop-text hover:bg-barbershop-accent'
                          : 'text-barbershop-text-muted cursor-not-allowed'
                    : 'text-barbershop-text-muted/50 cursor-not-allowed'
                ]"
              >
                {{ date.day }}
              </div>
            </div>

            <!-- Time Slots -->
            <div v-if="selectedDate">
              <h4 class="text-lg font-semibold text-barbershop-text mb-4">
                Orari Disponibili - {{ formatSelectedDate }}
              </h4>
              
              <div v-if="availableTimeSlots.length === 0" class="text-center py-8">
                <div class="w-12 h-12 bg-barbershop-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-barbershop-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p class="text-barbershop-text-muted">
                  Nessun orario disponibile per questa giornata
                </p>
              </div>

              <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <button
                  v-for="timeSlot in availableTimeSlots"
                  :key="timeSlot.time"
                  @click="selectedTimeSlot = timeSlot"
                  :disabled="!timeSlot.available"
                  :class="[
                    'p-3 text-sm font-medium rounded-lg transition-all duration-200',
                    selectedTimeSlot?.time === timeSlot.time
                      ? 'bg-barbershop-gold text-black'
                      : timeSlot.available
                        ? 'bg-barbershop-accent border border-barbershop-border text-barbershop-text hover:border-barbershop-gold'
                        : 'bg-barbershop-primary border border-barbershop-border text-barbershop-text-muted cursor-not-allowed opacity-50'
                  ]"
                >
                  {{ timeSlot.time }}
                </button>
              </div>
            </div>

            <!-- Booking Summary -->
            <div v-if="selectedService && selectedDate && selectedTimeSlot" class="mt-8 p-6 bg-barbershop-accent border border-barbershop-border rounded-lg">
              <h4 class="text-lg font-semibold text-barbershop-text mb-4">
                Riepilogo Prenotazione
              </h4>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-barbershop-text-muted">Servizio:</span>
                  <span class="text-barbershop-text">{{ selectedService.name }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-barbershop-text-muted">Data:</span>
                  <span class="text-barbershop-text">{{ formatSelectedDate }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-barbershop-text-muted">Orario:</span>
                  <span class="text-barbershop-text">{{ selectedTimeSlot.time }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-barbershop-text-muted">Durata:</span>
                  <span class="text-barbershop-text">{{ selectedService.duration }} min</span>
                </div>
                <div class="flex justify-between border-t border-barbershop-border pt-2 mt-3">
                  <span class="text-barbershop-text font-semibold">Totale:</span>
                  <span class="text-barbershop-gold font-bold text-lg">€{{ selectedService.price }}</span>
                </div>
              </div>

              <button
                @click="confirmBooking"
                :disabled="authStore.loading"
                class="w-full mt-6 btn-primary"
              >
                <span v-if="!authStore.loading">Conferma Prenotazione</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Prenotazione in corso...
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Services data
const services = ref([
  {
    id: 1,
    name: 'Taglio Classico',
    description: 'Taglio tradizionale personalizzato',
    duration: 45,
    price: 35
  },
  {
    id: 2,
    name: 'Rasatura Tradizionale',
    description: 'Rasatura con rasoio a mano libera',
    duration: 30,
    price: 25
  },
  {
    id: 3,
    name: 'Cura della Barba',
    description: 'Trimming e modellatura barba',
    duration: 30,
    price: 20
  },
  {
    id: 4,
    name: 'Taglio + Rasatura',
    description: 'Pacchetto completo taglio e rasatura',
    duration: 75,
    price: 50
  },
  {
    id: 5,
    name: 'Trattamento Viso',
    description: 'Pulizia e idratazione del viso',
    duration: 45,
    price: 40
  }
])

// State
const selectedService = ref(null)
const selectedDate = ref(null)
const selectedTimeSlot = ref(null)
const currentDate = ref(new Date())

// Calendar computed properties
const dayHeaders = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']

const currentMonthYear = computed(() => {
  return currentDate.value.toLocaleDateString('it-IT', {
    month: 'long',
    year: 'numeric'
  })
})

const formatSelectedDate = computed(() => {
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const days = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    
    const isCurrentMonth = date.getMonth() === month
    const isToday = date.getTime() === today.getTime()
    const isSelected = selectedDate.value && date.getTime() === selectedDate.value.getTime()
    const isAvailable = date >= today && isCurrentMonth && date.getDay() !== 0 // No Sundays
    
    days.push({
      key: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      date: new Date(date),
      day: date.getDate(),
      isCurrentMonth,
      isToday,
      isSelected,
      isAvailable
    })
  }
  
  return days
})

const availableTimeSlots = computed(() => {
  if (!selectedDate.value) return []
  
  const timeSlots = [
    { time: '09:00', available: true },
    { time: '09:30', available: true },
    { time: '10:00', available: false },
    { time: '10:30', available: true },
    { time: '11:00', available: true },
    { time: '11:30', available: true },
    { time: '12:00', available: false },
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: true },
    { time: '15:30', available: false },
    { time: '16:00', available: true },
    { time: '16:30', available: true },
    { time: '17:00', available: true },
    { time: '17:30', available: true },
    { time: '18:00', available: true }
  ]
  
  // Filter based on selected date (mock logic)
  return timeSlots.filter(slot => {
    // If it's today, filter out past times
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (selectedDate.value.getTime() === today.getTime()) {
      const now = new Date()
      const [hours, minutes] = slot.time.split(':').map(Number)
      const slotTime = new Date()
      slotTime.setHours(hours, minutes, 0, 0)
      
      return slotTime > now
    }
    
    return true
  })
})

// Methods
const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const selectDate = (dateObj) => {
  if (dateObj.isAvailable) {
    selectedDate.value = dateObj.date
    selectedTimeSlot.value = null // Reset time slot selection
  }
}

const confirmBooking = async () => {
  if (!selectedService.value || !selectedDate.value || !selectedTimeSlot.value) return
  
  const appointmentData = {
    date: selectedDate.value.toISOString().split('T')[0],
    time: selectedTimeSlot.value.time,
    service: selectedService.value.name,
    price: selectedService.value.price
  }
  
  const success = await authStore.bookAppointment(appointmentData)
  
  if (success) {
    alert('Prenotazione confermata! Riceverai una conferma via email.')
    router.push('/area-personale')
  } else {
    alert('Errore durante la prenotazione. Riprova.')
  }
}

onMounted(() => {
  // Auto-select first service if only one user comes from "no appointments" state
  if (services.value.length > 0) {
    selectedService.value = services.value[0]
  }
})
</script>
