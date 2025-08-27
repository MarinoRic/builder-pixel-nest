<template>
  <div>
    <!-- Add New Appointment -->
    <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6 mb-8">
      <h3 class="text-lg font-semibold text-barbershop-text mb-4">Aggiungi Prenotazione</h3>

      <form @submit.prevent="addAppointment" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-barbershop-text mb-2">Email Cliente</label>
          <input
            v-model="newAppointment.clientEmail"
            type="email"
            required
            class="w-full px-4 py-2 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text placeholder-barbershop-text-muted focus:outline-none focus:ring-2 focus:ring-barbershop-gold"
            placeholder="cliente@email.com"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-barbershop-text mb-2">Data</label>
          <input
            v-model="newAppointment.date"
            type="date"
            required
            :min="today"
            class="w-full px-4 py-2 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text focus:outline-none focus:ring-2 focus:ring-barbershop-gold"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-barbershop-text mb-2">Orario</label>
          <select
            v-model="newAppointment.time"
            required
            class="w-full px-4 py-2 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text focus:outline-none focus:ring-2 focus:ring-barbershop-gold"
          >
            <option value="">Seleziona orario</option>
            <option v-for="time in availableTimeSlots" :key="time" :value="time">
              {{ time }}
            </option>
          </select>
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-barbershop-text mb-2">Servizio</label>
          <input
            v-model="newAppointment.service"
            type="text"
            required
            class="w-full px-4 py-2 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text placeholder-barbershop-text-muted focus:outline-none focus:ring-2 focus:ring-barbershop-gold"
            placeholder="es. Taglio + Rasatura"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-barbershop-text mb-2">Prezzo (€)</label>
          <input
            v-model.number="newAppointment.price"
            type="number"
            required
            min="0"
            step="5"
            class="w-full px-4 py-2 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text focus:outline-none focus:ring-2 focus:ring-barbershop-gold"
          />
        </div>

        <div class="md:col-span-3">
          <button type="submit" :disabled="loading" class="btn-primary">
            {{ loading ? 'Aggiunta in corso...' : 'Aggiungi Prenotazione' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Appointment Filters -->
    <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6 mb-6">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0"
      >
        <div class="flex space-x-4">
          <button
            @click="activeFilter = 'today'"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              activeFilter === 'today'
                ? 'bg-barbershop-gold text-black'
                : 'bg-barbershop-accent text-barbershop-text hover:bg-barbershop-charcoal',
            ]"
          >
            Oggi
          </button>
          <button
            @click="activeFilter = 'upcoming'"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              activeFilter === 'upcoming'
                ? 'bg-barbershop-gold text-black'
                : 'bg-barbershop-accent text-barbershop-text hover:bg-barbershop-charcoal',
            ]"
          >
            Prossimi
          </button>
          <button
            @click="activeFilter = 'past'"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              activeFilter === 'past'
                ? 'bg-barbershop-gold text-black'
                : 'bg-barbershop-accent text-barbershop-text hover:bg-barbershop-charcoal',
            ]"
          >
            Passati
          </button>
        </div>

        <div class="flex items-center space-x-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cerca cliente..."
            class="px-4 py-2 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text placeholder-barbershop-text-muted focus:outline-none focus:ring-2 focus:ring-barbershop-gold"
          />
          <input
            v-model="dateFilter"
            type="date"
            class="px-4 py-2 bg-barbershop-accent border border-barbershop-border rounded-lg text-barbershop-text focus:outline-none focus:ring-2 focus:ring-barbershop-gold"
          />
        </div>
      </div>
    </div>

    <!-- Appointments List -->
    <div class="bg-barbershop-secondary border border-barbershop-border rounded-xl p-6">
      <h3 class="text-lg font-semibold text-barbershop-text mb-6">
        {{ getFilterTitle() }} ({{ filteredAppointments.length }})
      </h3>

      <div v-if="filteredAppointments.length === 0" class="text-center py-8">
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
        <p class="text-barbershop-text-muted">Nessuna prenotazione trovata</p>
      </div>

      <div v-else class="space-y-4">
        <div
          v-for="appointment in filteredAppointments"
          :key="appointment.id"
          class="border border-barbershop-border rounded-lg p-4 hover:border-barbershop-gold transition-colors"
        >
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0"
          >
            <div class="flex items-center space-x-4">
              <div class="text-center">
                <div class="text-barbershop-gold font-semibold">{{ appointment.time }}</div>
                <div class="text-xs text-barbershop-text-muted">
                  {{ formatDate(appointment.date) }}
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-barbershop-text">{{ appointment.clientName }}</h4>
                <p class="text-sm text-barbershop-text-muted">{{ appointment.service }}</p>
                <div class="flex items-center space-x-4 mt-1">
                  <span class="text-xs text-barbershop-text-muted">{{
                    appointment.clientEmail
                  }}</span>
                  <span class="text-xs text-barbershop-text-muted">{{
                    appointment.clientPhone
                  }}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="text-right">
                <div class="text-barbershop-gold font-semibold">€{{ appointment.price }}</div>
                <span
                  :class="[
                    'text-xs px-2 py-1 rounded-full',
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

              <div class="flex space-x-2">
                <button
                  v-if="appointment.status === 'pending'"
                  @click="updateAppointmentStatus(appointment.id, 'confirmed')"
                  class="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
                  title="Conferma"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>

                <button
                  v-if="appointment.status === 'confirmed'"
                  @click="updateAppointmentStatus(appointment.id, 'completed')"
                  class="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                  title="Completa"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                <button
                  v-if="appointment.status !== 'completed' && appointment.status !== 'cancelled'"
                  @click="updateAppointmentStatus(appointment.id, 'cancelled')"
                  class="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                  title="Cancella"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const activeFilter = ref('today')
const searchQuery = ref('')
const dateFilter = ref('')
const loading = ref(false)

const newAppointment = ref({
  clientEmail: '',
  date: '',
  time: '',
  service: '',
  price: 25,
})

const today = new Date().toISOString().split('T')[0]

const availableTimeSlots = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
]

// Mock appointments data
const appointments = ref([
  {
    id: '1',
    date: today,
    time: '09:00',
    clientName: 'Marco Rossi',
    clientEmail: 'marco.rossi@email.com',
    clientPhone: '+39 123 456 7890',
    service: 'Taglio Capelli',
    price: 25,
    status: 'confirmed',
  },
  {
    id: '2',
    date: today,
    time: '10:30',
    clientName: 'Giuseppe Verdi',
    clientEmail: 'giuseppe.verdi@email.com',
    clientPhone: '+39 987 654 3210',
    service: 'Rasatura Completa',
    price: 20,
    status: 'pending',
  },
  {
    id: '3',
    date: '2024-01-26',
    time: '15:00',
    clientName: 'Andrea Bianchi',
    clientEmail: 'andrea.bianchi@email.com',
    clientPhone: '+39 555 123 4567',
    service: 'Cura Barba',
    price: 15,
    status: 'confirmed',
  },
  {
    id: '4',
    date: '2024-01-20',
    time: '16:00',
    clientName: 'Luca Neri',
    clientEmail: 'luca.neri@email.com',
    clientPhone: '+39 333 999 8888',
    service: 'Taglio + Rasatura',
    price: 45,
    status: 'completed',
  },
])

const filteredAppointments = computed(() => {
  let filtered = appointments.value

  // Filter by time period
  const todayStr = new Date().toISOString().split('T')[0]

  if (activeFilter.value === 'today') {
    filtered = filtered.filter((app) => app.date === todayStr)
  } else if (activeFilter.value === 'upcoming') {
    filtered = filtered.filter((app) => app.date > todayStr)
  } else if (activeFilter.value === 'past') {
    filtered = filtered.filter((app) => app.date < todayStr)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (app) =>
        app.clientName.toLowerCase().includes(query) ||
        app.clientEmail.toLowerCase().includes(query) ||
        app.service.toLowerCase().includes(query),
    )
  }

  // Filter by date
  if (dateFilter.value) {
    filtered = filtered.filter((app) => app.date === dateFilter.value)
  }

  // Sort by date and time
  return filtered.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`)
    const dateB = new Date(`${b.date}T${b.time}`)
    return dateA.getTime() - dateB.getTime()
  })
})

const getFilterTitle = () => {
  switch (activeFilter.value) {
    case 'today':
      return 'Prenotazioni di Oggi'
    case 'upcoming':
      return 'Prenotazioni Future'
    case 'past':
      return 'Prenotazioni Passate'
    default:
      return 'Prenotazioni'
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

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('it-IT', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}

const addAppointment = async () => {
  loading.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newAppt = {
      id: Date.now().toString(),
      date: newAppointment.value.date,
      time: newAppointment.value.time,
      clientName: 'Cliente', // Would be fetched from email
      clientEmail: newAppointment.value.clientEmail,
      clientPhone: '+39 000 000 0000', // Would be fetched from user data
      service: newAppointment.value.service,
      price: newAppointment.value.price,
      status: 'confirmed',
    }

    appointments.value.push(newAppt)

    // Reset form
    newAppointment.value = {
      clientEmail: '',
      date: '',
      time: '',
      service: '',
      price: 25,
    }

    alert('Prenotazione aggiunta con successo!')
  } catch (error) {
    alert("Errore durante l'aggiunta della prenotazione")
  } finally {
    loading.value = false
  }
}

const updateAppointmentStatus = async (appointmentId: string, newStatus: string) => {
  const appointment = appointments.value.find((app) => app.id === appointmentId)
  if (appointment) {
    appointment.status = newStatus
    // In a real app, this would be an API call
  }
}

onMounted(() => {
  newAppointment.value.date = today
})
</script>
