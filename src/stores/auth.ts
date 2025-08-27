import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
  id: string
  nome: string
  cognome: string
  email: string
  telefono: string
}

export interface Appointment {
  id: string
  date: string
  time: string
  service: string
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled'
  price: number
  duration?: number
  services?: any[]
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const appointments = ref<Appointment[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  const isLoggedIn = computed(() => !!user.value)
  const userFullName = computed(() => 
    user.value ? `${user.value.nome} ${user.value.cognome}` : ''
  )
  const userInitials = computed(() => {
    if (!user.value) return 'U'
    return `${user.value.nome.charAt(0)}${user.value.cognome.charAt(0)}`.toUpperCase()
  })
  const activeAppointments = computed(() => 
    appointments.value.filter(app => app.status === 'confirmed' || app.status === 'pending')
  )

  // Actions
  const login = async (email: string, password: string): Promise<boolean> => {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login - in real app, this would be an API call
      if (email === 'mario.rossi@email.com' && password === 'password123') {
        user.value = {
          id: '1',
          nome: 'Mario',
          cognome: 'Rossi',
          email: 'mario.rossi@email.com',
          telefono: '+39 123 456 7890'
        }
        
        // Load mock appointments
        loadAppointments()
        
        // Store in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(user.value))
        
        return true
      } else {
        error.value = 'Email o password non corretti'
        return false
      }
    } catch (err) {
      error.value = 'Errore durante il login'
      return false
    } finally {
      loading.value = false
    }
  }

  const register = async (userData: Omit<User, 'id'> & { password: string }): Promise<boolean> => {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful registration
      user.value = {
        id: Date.now().toString(),
        nome: userData.nome,
        cognome: userData.cognome,
        email: userData.email,
        telefono: userData.telefono
      }
      
      // Store in localStorage for persistence
      localStorage.setItem('user', JSON.stringify(user.value))
      
      return true
    } catch (err) {
      error.value = 'Errore durante la registrazione'
      return false
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    user.value = null
    appointments.value = []
    localStorage.removeItem('user')
    localStorage.removeItem('appointments')
  }

  const loadAppointments = () => {
    // Mock appointments data
    appointments.value = [
      {
        id: '1',
        date: '2024-01-25',
        time: '14:00',
        service: 'Taglio Classico',
        status: 'confirmed',
        price: 35
      },
      {
        id: '2',
        date: '2024-02-10',
        time: '16:30',
        service: 'Rasatura + Taglio',
        status: 'pending',
        price: 60
      }
    ]
  }

  const bookAppointment = async (appointment: Omit<Appointment, 'id' | 'status'>): Promise<boolean> => {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newAppointment: Appointment = {
        ...appointment,
        id: Date.now().toString(),
        status: 'pending'
      }
      
      appointments.value.push(newAppointment)
      
      return true
    } catch (err) {
      error.value = 'Errore durante la prenotazione'
      return false
    } finally {
      loading.value = false
    }
  }

  const cancelAppointment = async (appointmentId: string): Promise<boolean> => {
    loading.value = true
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const index = appointments.value.findIndex(app => app.id === appointmentId)
      if (index !== -1) {
        appointments.value[index].status = 'cancelled'
      }
      
      return true
    } catch (err) {
      error.value = 'Errore durante la cancellazione'
      return false
    } finally {
      loading.value = false
    }
  }

  // Initialize from localStorage
  const initAuth = () => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      user.value = JSON.parse(storedUser)
      loadAppointments()
    }
  }

  return {
    // State
    user,
    appointments,
    loading,
    error,
    
    // Getters
    isLoggedIn,
    userFullName,
    userInitials,
    activeAppointments,
    
    // Actions
    login,
    register,
    logout,
    bookAppointment,
    cancelAppointment,
    initAuth
  }
})
