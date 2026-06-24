<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation (inchangée) -->
    <header class="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <router-link to="/" class="flex-shrink-0">
          <img :src="logo" alt="SCB DRONE Logo" class="h-30 w-auto hover:scale-105 transition-transform duration-300" />
        </router-link>
        <ul class="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <li><router-link to="/solutions" class="relative hover:text-[#1B3F92] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B3F92] hover:after:w-full after:transition-all after:duration-300">Solutions</router-link></li>
          <li><router-link to="/application" class="relative hover:text-[#1B3F92] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B3F92] hover:after:w-full after:transition-all after:duration-300">Applications</router-link></li>
          <li><router-link to="/ressources" class="relative hover:text-[#1B3F92] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B3F92] hover:after:w-full after:transition-all after:duration-300">Ressources</router-link></li>
          <li><router-link to="/entreprise" class="relative hover:text-[#1B3F92] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1B3F92] hover:after:w-full after:transition-all after:duration-300">Entreprise</router-link></li>
        </ul>
        <div class="hidden md:flex items-center gap-4">
          <select v-model="lang" class="border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1B3F92] transition duration-200">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
          <router-link to="/contact">
            <button class="bg-[#1B3F92] text-white px-5 py-2.5 rounded-lg hover:bg-[#162F6F] transition duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
              Nous contacter
            </button>
          </router-link>
        </div>
        <button @click="isOpen = !isOpen" class="md:hidden text-gray-800 focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </nav>
      <div v-if="isOpen" class="md:hidden bg-white shadow-lg animate-slide-down">
        <ul class="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
          <li><router-link to="/solutions" class="hover:text-[#1B3F92] text-lg">Solutions</router-link></li>
          <li><router-link to="/application" class="hover:text-[#1B3F92] text-lg">Applications</router-link></li>
          <li><router-link to="/ressources" class="hover:text-[#1B3F92] text-lg">Ressources</router-link></li>
          <li><router-link to="/entreprise" class="hover:text-[#1B3F92] text-lg">Entreprise</router-link></li>
          <li class="w-full px-6">
            <select v-model="lang" class="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-[#1B3F92]">
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </li>
          <li class="w-full px-6">
            <router-link to="/contact">
              <button class="bg-[#1B3F92] text-white px-5 py-3 rounded-lg hover:bg-[#162F6F] w-full transition duration-300">
                Nous contacter
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="flex-1 mt-14">
      <slot />
    </main>

    <!-- Footer avec vagues en bas -->
    <footer class="relative bg-gradient-to-b from-[#1B3F92] to-[#0f2859] text-white mt-12 overflow-hidden">
      <!-- Contenu du footer -->
      <div class="relative z-20 max-w-7xl mx-auto px-6 pt-16 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Colonne 1 : SCB DRONES -->
        <div>
          <h3 class="text-2xl font-bold mb-4 flex items-center gap-2">
            <i class="bx bx-drone text-3xl text-blue-300"></i>
            SCB DRONES
          </h3>
          <p class="leading-relaxed text-gray-200">
            Leader de l'innovation aérienne avec une technologie drone de pointe et des services professionnels.
          </p>
          <div class="flex gap-4 mt-6 text-2xl">
            <a href="#" class="text-white/80 hover:text-white hover:-translate-y-1 transition-all duration-300"><i class="bx bxl-facebook-square"></i></a>
            <a href="#" class="text-white/80 hover:text-white hover:-translate-y-1 transition-all duration-300"><i class="bx bxl-twitter"></i></a>
            <a href="#" class="text-white/80 hover:text-white hover:-translate-y-1 transition-all duration-300"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="text-white/80 hover:text-white hover:-translate-y-1 transition-all duration-300"><i class="bx bxl-whatsapp"></i></a>
            <a href="#" class="text-white/80 hover:text-white hover:-translate-y-1 transition-all duration-300"><i class="bx bxl-linkedin-square"></i></a>
          </div>
        </div>

        <!-- Colonne 2 : Liens rapides -->
        <div>
          <h4 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <i class="bx bx-link text-xl text-blue-300"></i>
            Liens rapides
          </h4>
          <ul class="space-y-2">
            <li><router-link to="/solutions" class="hover:text-blue-200 transition duration-300 flex items-center gap-1 group"><i class="bx bx-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i> Solutions</router-link></li>
            <li><router-link to="/application" class="hover:text-blue-200 transition duration-300 flex items-center gap-1 group"><i class="bx bx-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i> Applications</router-link></li>
            <li><router-link to="/ressources" class="hover:text-blue-200 transition duration-300 flex items-center gap-1 group"><i class="bx bx-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i> Ressources</router-link></li>
            <li><router-link to="/entreprise" class="hover:text-blue-200 transition duration-300 flex items-center gap-1 group"><i class="bx bx-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i> Entreprise</router-link></li>
            <li><router-link to="/contact" class="hover:text-blue-200 transition duration-300 flex items-center gap-1 group"><i class="bx bx-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i> Contact</router-link></li>
          </ul>
        </div>

        <!-- Colonne 3 : Plateforme + SCB Regulator -->
        <div>
          <h4 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <i class="bx bx-rocket text-xl text-blue-300"></i>
            Plateforme
          </h4>
          <a
            href="http://localhost:5173/login"
            target="_blank"
            class="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <i class="bx bx-drone text-2xl group-hover:rotate-12 transition-transform"></i>
            <span class="font-medium">Accéder à SCB Regulator</span>
            <i class="bx bx-external-link ml-1 opacity-70 group-hover:opacity-100 transition-opacity"></i>
          </a>
          <p class="text-gray-300 text-sm mt-4">
            Connectez-vous pour gérer vos missions et votre flotte.
          </p>
        </div>
      </div>

      <!-- Copyright / Bottom -->
      <div class="relative z-20 bg-[#0f2859]/50 text-gray-300 text-sm py-4 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2025 SCB DRONES. Tous droits réservés.</p>
          <div class="flex gap-4">
            <router-link to="/privacy" class="hover:text-white transition duration-300">Politique de confidentialité</router-link>
            <router-link to="/terms" class="hover:text-white transition duration-300">Conditions d'utilisation</router-link>
            <router-link to="/cookie" class="hover:text-white transition duration-300">Politique des cookies</router-link>
          </div>
        </div>
      </div>

      <!-- Vagues en bas du footer (au-dessus du copyright) -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg class="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,20 600,80 900,40 C1050,25 1150,60 1200,60 L1200,120 L0,120 Z"
                class="fill-white/10 animate-wave-slow"
                style="transform-origin: center; animation: waveMove 8s ease-in-out infinite alternate;" />
          <path d="M0,30 C200,80 500,0 800,50 C1000,90 1100,50 1200,50 L1200,120 L0,120 Z"
                class="fill-white/5 animate-wave-fast"
                style="transform-origin: center; animation: waveMove 6s ease-in-out infinite alternate-reverse;" />
          <path d="M0,90 C100,40 400,110 700,70 C950,40 1100,100 1200,100 L1200,120 L0,120 Z"
                class="fill-white/15 animate-wave-medium"
                style="transform-origin: center; animation: waveMove 10s ease-in-out infinite alternate;" />
        </svg>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import logo from "@/assets/images/logodrone.png";

const isOpen = ref(false);
const lang = ref("fr");
const router = useRouter();

watch(lang, (newLang) => {
  console.log(`Langue changée en: ${newLang}`);
});

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Animation pour le menu mobile */
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}

/* Style pour les liens actifs */
.router-link-active {
  color: #1B3F92;
  font-weight: 600;
}

/* Amélioration du sélecteur de langue */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231B3F92'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1.2em;
  padding-right: 2.5rem;
  appearance: none;
}

/* Animations des vagues (déplacées en bas) */
@keyframes waveMove {
  0% { transform: translateX(0) scaleY(1); }
  50% { transform: translateX(-2%) scaleY(1.1); }
  100% { transform: translateX(2%) scaleY(0.9); }
}

.fill-white\/10 {
  fill: rgba(255, 255, 255, 0.1);
}
.fill-white\/5 {
  fill: rgba(255, 255, 255, 0.05);
}
.fill-white\/15 {
  fill: rgba(255, 255, 255, 0.15);
}

.animate-wave-slow {
  animation: waveMove 8s ease-in-out infinite alternate;
}
.animate-wave-fast {
  animation: waveMove 6s ease-in-out infinite alternate-reverse;
}
.animate-wave-medium {
  animation: waveMove 10s ease-in-out infinite alternate;
}

/* Responsive */
@media (max-width: 768px) {
  header nav {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  main {
    margin-top: 7rem;
  }
  footer > div {
    gap: 2rem;
  }
}
</style>
