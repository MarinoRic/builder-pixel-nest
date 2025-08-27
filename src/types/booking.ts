export interface Service {
  id: number
  name: string
  description: string
  duration: number
  price: number
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface CalendarDay {
  key: string
  date: Date
  day: number
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  isAvailable: boolean
}
