<template>
  <section id="home" class="relative h-screen overflow-hidden">
    <!-- Carousel Container -->
    <div class="relative h-full">
      <!-- Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'absolute inset-0 transition-all duration-1000 ease-in-out',
          index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
        ]"
      >
        <!-- Background Image -->
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="absolute inset-0 bg-barbershop-primary/70"></div>
        </div>

        <!-- Content -->
        <div class="relative h-full flex items-center">
          <div class="section-container">
            <div class="max-w-2xl">
              <h1
                :class="[
                  'text-4xl md:text-6xl lg:text-7xl font-display font-bold text-barbershop-text mb-6 leading-tight',
                  index === currentSlide ? 'animate-slide-up' : '',
                ]"
              >
                {{ slide.title }}
              </h1>
              <p
                :class="[
                  'text-lg md:text-xl text-barbershop-text-muted mb-8 leading-relaxed',
                  index === currentSlide ? 'animate-slide-up' : '',
                ]"
                style="animation-delay: 0.2s"
              >
                {{ slide.description }}
              </p>
              <div
                :class="[
                  'flex flex-col sm:flex-row gap-4',
                  index === currentSlide ? 'animate-slide-up' : '',
                ]"
                style="animation-delay: 0.4s"
              >
                <button class="btn-primary">Prenota Ora</button>
                <button class="btn-secondary">Scopri di Più</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      @click="previousSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-barbershop-secondary/80 hover:bg-barbershop-accent border border-barbershop-border rounded-full flex items-center justify-center text-barbershop-text hover:text-barbershop-gold transition-all duration-300 backdrop-blur-sm"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-barbershop-secondary/80 hover:bg-barbershop-accent border border-barbershop-border rounded-full flex items-center justify-center text-barbershop-text hover:text-barbershop-gold transition-all duration-300 backdrop-blur-sm"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Slide Indicators -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          index === currentSlide
            ? 'bg-barbershop-gold scale-125'
            : 'bg-barbershop-text-muted hover:bg-barbershop-gold/70',
        ]"
      ></button>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 right-8 animate-bounce">
      <div class="flex flex-col items-center text-barbershop-text-muted">
        <span class="text-sm mb-2">Scroll</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Slide {
  title: string
  description: string
  image: string
}

const slides = ref<Slide[]>([
  {
    title: 'Stile & Eleganza',
    description:
      "Scopri l'arte del taglio perfetto nel nostro salone, dove tradizione e modernità si incontrano per creare il tuo look ideale.",
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Maestria Artigianale',
    description:
      'I nostri barbieri esperti combinano tecniche tradizionali con le ultime tendenze per garantirti sempre il massimo della qualità.',
    image:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Esperienza Unica',
    description:
      'Rilassati nel nostro ambiente elegante e goditi un momento di puro benessere dedicato alla cura del tuo aspetto.',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
])

const currentSlide = ref(0)
let autoSlideInterval: number

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  autoSlideInterval = window.setInterval(() => {
    nextSlide()
  }, 6000) // Change slide every 6 seconds
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    window.clearInterval(autoSlideInterval)
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>
