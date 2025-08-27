<template>
  <section class="py-16 bg-barbershop-accent border-y border-barbershop-border">
    <div class="section-container">
      <!-- Partners -->
      <div class="mb-12">
        <h3 class="text-center text-lg font-semibold text-barbershop-text-muted mb-8">
          Partner di Fiducia
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <!-- Partner logos (placeholder brands that would be relevant for a barbershop) -->
          <div class="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div class="bg-barbershop-text/10 px-6 py-4 rounded-lg backdrop-blur-sm">
              <span class="text-barbershop-text font-semibold text-sm">L'ORÉAL</span>
            </div>
          </div>
          <div class="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div class="bg-barbershop-text/10 px-6 py-4 rounded-lg backdrop-blur-sm">
              <span class="text-barbershop-text font-semibold text-sm">WAHL</span>
            </div>
          </div>
          <div class="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div class="bg-barbershop-text/10 px-6 py-4 rounded-lg backdrop-blur-sm">
              <span class="text-barbershop-text font-semibold text-sm">REUZEL</span>
            </div>
          </div>
          <div class="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div class="bg-barbershop-text/10 px-6 py-4 rounded-lg backdrop-blur-sm">
              <span class="text-barbershop-text font-semibold text-sm">BABYLISS</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Info Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="text-center group">
          <div class="bg-barbershop-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-barbershop-gold/20 transition-colors duration-300">
            <svg class="w-8 h-8 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h4 class="text-2xl font-bold text-barbershop-gold mb-2">5000+</h4>
          <p class="text-barbershop-text-muted">Clienti Soddisfatti</p>
        </div>

        <div class="text-center group">
          <div class="bg-barbershop-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-barbershop-gold/20 transition-colors duration-300">
            <svg class="w-8 h-8 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h4 class="text-2xl font-bold text-barbershop-gold mb-2">15+</h4>
          <p class="text-barbershop-text-muted">Anni di Esperienza</p>
        </div>

        <div class="text-center group">
          <div class="bg-barbershop-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-barbershop-gold/20 transition-colors duration-300">
            <svg class="w-8 h-8 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
          </div>
          <h4 class="text-2xl font-bold text-barbershop-gold mb-2">4.9/5</h4>
          <p class="text-barbershop-text-muted">Valutazione Media</p>
        </div>

        <div class="text-center group">
          <div class="bg-barbershop-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-barbershop-gold/20 transition-colors duration-300">
            <svg class="w-8 h-8 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <h4 class="text-2xl font-bold text-barbershop-gold mb-2">100%</h4>
          <p class="text-barbershop-text-muted">Qualità Garantita</p>
        </div>
      </div>

      <!-- Additional Info Bar -->
      <div class="mt-12 pt-8 border-t border-barbershop-border">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-barbershop-gold/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
            </div>
            <div>
              <h5 class="font-semibold text-barbershop-text mb-1">Posizione Centrale</h5>
              <p class="text-sm text-barbershop-text-muted">Via Roma 123, Centro Storico</p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-barbershop-gold/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div>
              <h5 class="font-semibold text-barbershop-text mb-1">Orari Flessibili</h5>
              <p class="text-sm text-barbershop-text-muted">Lun-Sab: 9:00-19:00</p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-barbershop-gold/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
            </div>
            <div>
              <h5 class="font-semibold text-barbershop-text mb-1">Prenotazione Facile</h5>
              <p class="text-sm text-barbershop-text-muted">+39 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static content component
</script>
