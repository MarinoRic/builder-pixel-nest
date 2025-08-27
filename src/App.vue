<template>
  <div class="min-h-screen bg-barbershop-primary text-barbershop-text overflow-x-hidden">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="pt-20"> <!-- Account for fixed header -->
      <!-- Hero Carousel -->
      <HeroCarousel />
      
      <!-- Services Section -->
      <ServicesSection />
      
      <!-- Partners & Info Section -->
      <PartnersSection />
      
      <!-- Gallery Section -->
      <section id="galleria" class="py-20 bg-barbershop-primary">
        <div class="section-container">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-display font-bold text-barbershop-text mb-4 animate-fade-in">
              La Nostra Galleria
            </h2>
            <p class="text-lg text-barbershop-text-muted max-w-2xl mx-auto animate-fade-in">
              Scopri alcuni dei nostri lavori e lasciati ispirare per il tuo prossimo look
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="(image, index) in galleryImages" 
              :key="index"
              class="group relative overflow-hidden rounded-2xl shadow-lg aspect-square"
              :class="animationClasses[index % 3]"
            >
              <img 
                :src="image.src" 
                :alt="image.alt"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-barbershop-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4">
                  <h4 class="text-white font-semibold mb-1">{{ image.title }}</h4>
                  <p class="text-white/80 text-sm">{{ image.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <button class="btn-primary">
              Vedi Tutti i Lavori
            </button>
          </div>
        </div>
      </section>
      
      <!-- Call to Action Section -->
      <section class="py-20 bg-gradient-to-r from-barbershop-secondary to-barbershop-accent">
        <div class="section-container text-center">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-display font-bold text-barbershop-text mb-6 animate-fade-in">
              Pronto per il Tuo Nuovo Look?
            </h2>
            <p class="text-lg text-barbershop-text-muted mb-8 animate-fade-in">
              Prenota il tuo appuntamento oggi stesso e scopri perché siamo la scelta preferita 
              per chi cerca qualità, stile e professionalità a Roma.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button class="btn-primary text-lg px-8 py-4">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Prenota Ora
              </button>
              <button class="btn-secondary text-lg px-8 py-4">
                <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Chiamaci
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Scroll to Top Button -->
    <Transition name="fade">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-12 h-12 bg-barbershop-gold hover:bg-barbershop-gold-dark text-black rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import HeroCarousel from './components/HeroCarousel.vue'
import ServicesSection from './components/ServicesSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import Footer from './components/Footer.vue'

// Scroll to top functionality
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Gallery images
const galleryImages = ref([
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Taglio Moderno',
    title: 'Taglio Moderno',
    description: 'Stile contemporaneo con tecnica classica'
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Rasatura Perfetta',
    title: 'Rasatura Perfetta',
    description: 'Precisione e cura nei dettagli'
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Barba Curata',
    title: 'Barba Curata',
    description: 'Modellatura e styling professionale'
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Trattamento Viso',
    title: 'Trattamento Viso',
    description: 'Cura e benessere per la tua pelle'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Stile Classico',
    title: 'Stile Classico',
    description: 'Eleganza senza tempo'
  },
  {
    src: 'https://images.unsplash.com/photo-1590540179852-2cb77c858dfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Look Completo',
    title: 'Look Completo',
    description: 'Trasformazione totale del tuo stile'
  }
])

// Animation classes for gallery items
const animationClasses = [
  'animate-slide-up',
  'animate-slide-left', 
  'animate-slide-right'
]

// Intersection Observer for scroll animations
const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    },
    { threshold: 0.1 }
  )

  // Observe elements with data-aos attribute
  document.querySelectorAll('[data-aos]').forEach((el) => {
    observer.observe(el)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Add scroll animations after a short delay to ensure DOM is ready
  setTimeout(observeElements, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Transition for scroll to top button */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Add staggered animation delays for gallery items */
.grid > div:nth-child(1) { animation-delay: 0s; }
.grid > div:nth-child(2) { animation-delay: 0.1s; }
.grid > div:nth-child(3) { animation-delay: 0.2s; }
.grid > div:nth-child(4) { animation-delay: 0.3s; }
.grid > div:nth-child(5) { animation-delay: 0.4s; }
.grid > div:nth-child(6) { animation-delay: 0.5s; }
</style>
