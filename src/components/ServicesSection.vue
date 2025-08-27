<template>
  <section id="servizi" class="py-20 bg-barbershop-secondary">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-barbershop-text mb-4 animate-fade-in">
          I Nostri Servizi
        </h2>
        <p class="text-lg text-barbershop-text-muted max-w-2xl mx-auto animate-fade-in">
          Scopri la gamma completa dei nostri servizi professionali dedicati alla cura e al benessere del tuo look
        </p>
      </div>

      <!-- Service Items -->
      <div class="space-y-20">
        <!-- Service 1 - Image Left, Text Right -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          data-aos="fade-up"
        >
          <div class="relative group">
            <div class="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Taglio Classico"
                class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-barbershop-primary/30 to-transparent rounded-2xl"></div>
          </div>
          
          <div class="lg:pl-8">
            <div class="mb-4">
              <span class="inline-block bg-barbershop-gold/20 text-barbershop-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Servizio Premium
              </span>
            </div>
            <h3 class="text-2xl md:text-3xl font-display font-bold text-barbershop-text mb-6">
              Taglio Classico
            </h3>
            <p class="text-barbershop-text-muted mb-6 leading-relaxed">
              Il nostro taglio classico combina la tradizione italiana con le tecniche moderne. 
              Ogni taglio è personalizzato per valorizzare le tue caratteristiche uniche, 
              garantendo un risultato impeccabile che dura nel tempo.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Consulenza personalizzata
              </li>
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Prodotti professionali
              </li>
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Styling incluso
              </li>
            </ul>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold text-barbershop-gold">€35</span>
                <span class="text-barbershop-text-muted ml-2">a partire da</span>
              </div>
              <button class="btn-primary">
                Prenota
              </button>
            </div>
          </div>
        </div>

        <!-- Service 2 - Text Left, Image Right -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          data-aos="fade-up"
        >
          <div class="order-2 lg:order-1 lg:pr-8">
            <div class="mb-4">
              <span class="inline-block bg-barbershop-gold/20 text-barbershop-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Tradizione Italiana
              </span>
            </div>
            <h3 class="text-2xl md:text-3xl font-display font-bold text-barbershop-text mb-6">
              Rasatura Tradizionale
            </h3>
            <p class="text-barbershop-text-muted mb-6 leading-relaxed">
              Vivi l'esperienza autentica della rasatura tradizionale italiana con rasoio a mano libera. 
              Un rituale di bellezza che combina precisione tecnica e momento di puro relax, 
              per una pelle perfettamente liscia e curata.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Rasoio a mano libera
              </li>
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Trattamento pre e post rasatura
              </li>
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Massaggio rilassante
              </li>
            </ul>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold text-barbershop-gold">€45</span>
                <span class="text-barbershop-text-muted ml-2">a partire da</span>
              </div>
              <button class="btn-primary">
                Prenota
              </button>
            </div>
          </div>
          
          <div class="order-1 lg:order-2 relative group">
            <div class="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Rasatura Tradizionale"
                class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-barbershop-primary/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <!-- Service 3 - Image Left, Text Right -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          data-aos="fade-up"
        >
          <div class="relative group">
            <div class="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cura della Barba"
                class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-barbershop-primary/30 to-transparent rounded-2xl"></div>
          </div>
          
          <div class="lg:pl-8">
            <div class="mb-4">
              <span class="inline-block bg-barbershop-gold/20 text-barbershop-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Specialità della Casa
              </span>
            </div>
            <h3 class="text-2xl md:text-3xl font-display font-bold text-barbershop-text mb-6">
              Cura della Barba
            </h3>
            <p class="text-barbershop-text-muted mb-6 leading-relaxed">
              Dalla barba incolta a quella perfettamente curata, i nostri esperti sapranno consigliarti 
              la forma ideale per il tuo viso. Utilizziamo solo prodotti naturali di alta qualità 
              per nutrire e modellare la tua barba.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Trimming e modellatura
              </li>
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Oli essenziali naturali
              </li>
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Consigli per la cura quotidiana
              </li>
            </ul>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold text-barbershop-gold">€25</span>
                <span class="text-barbershop-text-muted ml-2">a partire da</span>
              </div>
              <button class="btn-primary">
                Prenota
              </button>
            </div>
          </div>
        </div>

        <!-- Service 4 - Text Left, Image Right -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          data-aos="fade-up"
        >
          <div class="order-2 lg:order-1 lg:pr-8">
            <div class="mb-4">
              <span class="inline-block bg-barbershop-gold/20 text-barbershop-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Pacchetto Completo
              </span>
            </div>
            <h3 class="text-2xl md:text-3xl font-display font-bold text-barbershop-text mb-6">
              Trattamento Viso
            </h3>
            <p class="text-barbershop-text-muted mb-6 leading-relaxed">
              Concediti un momento di puro benessere con il nostro trattamento viso completo. 
              Pulizia profonda, idratazione e ringiovanimento della pelle per un aspetto 
              fresco e luminoso che ti farà sentire al meglio.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Pulizia profonda della pelle
              </li>
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Maschera idratante
              </li>
              <li class="flex items-center text-barbershop-text-muted">
                <svg class="w-5 h-5 text-barbershop-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Massaggio anti-stress
              </li>
            </ul>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold text-barbershop-gold">€55</span>
                <span class="text-barbershop-text-muted ml-2">a partire da</span>
              </div>
              <button class="btn-primary">
                Prenota
              </button>
            </div>
          </div>
          
          <div class="order-1 lg:order-2 relative group">
            <div class="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Trattamento Viso"
                class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-barbershop-primary/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// This component doesn't need reactive data for now
// Services are static content
</script>
