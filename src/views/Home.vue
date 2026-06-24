<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <header class="relative h-screen w-full overflow-hidden">
      <!-- Vidéo active -->
      <video
        :src="heroVideos[activeIndex]"
        autoplay
        muted
        loop
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>

      <!-- Overlay sombre -->
      <div class="absolute inset-0 bg-black/50 z-10"></div>

      <!-- Contenu centré -->
      <div class="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <!-- Titre avec partie en bleu -->
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          L'Avenir de <span class="text-[#1B3F92]">l'Innovation Aérienne</span>
        </h1>

        <!-- Description -->
        <p class="text-xl text-white mb-8">{{ heroDescription }}</p>

        <!-- Boutons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <!-- Bouton blanc avec icône -->
          <button
            class="bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition duration-300"
          >
            {{ heroBtnPrimary }}
            <i class="bx bx-right-arrow-alt text-xl"></i>
          </button>

          <!-- Bouton secondaire transparent -->
          <button
            class="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            {{ heroBtnSecondary }}
          </button>
        </div>
      </div>
    </header>

    <!-- À propos Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">
            <span class="text-black">À propos de</span>
            <span class="text-[#1B3F92]"> SCB fly Drones</span>
          </h2>
          <p class="text-xl text-gray-500 max-w-3xl mx-auto">
            Leader de la révolution aérienne avec des solutions drone innovantes pour les entreprises et
            les particuliers à travers le monde
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div class="text-center">
            <div
              class="bg-[#1B3F92] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="bx bx-rocket text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Technologie de Pointe</h3>
            <p class="text-gray-600">Dernières innovations drone avec systèmes de vol alimentés par IA</p>
          </div>

          <div class="text-center">
            <div
              class="bg-[#1B3F92] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="bx bx-shield text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Sécurité Avant Tout</h3>
            <p class="text-gray-600">Opérations certifiées avec couverture d'assurance complète</p>
          </div>

          <div class="text-center">
            <div
              class="bg-[#1B3F92] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="bx bx-trophy text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Prix et Récompenses</h3>
            <p class="text-gray-600">Excellence reconnue dans les services aériens et la formation</p>
          </div>

          <div class="text-center">
            <div
              class="bg-[#1B3F92] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="bx bx-user-voice text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Équipe d'Experts</h3>
            <p class="text-gray-600">Pilotes professionnels avec des années d'expérience</p>
          </div>
        </div>
        <div
          class="bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <!-- Image à gauche -->
          <div class="md:w-1/2">
            <img :src="droneImage" alt="Drone" class="rounded-xl w-full h-auto object-cover" />
          </div>

          <!-- Texte et stats à droite -->
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              Pionniers des Solutions Aériennes Depuis 2025
            </h3>
            <p class="text-gray-600 mb-6">
              Nous sommes à l'avant-garde de la technologie drone, fournissant des solutions de pointe
              pour diverses industries incluant l'immobilier, l'agriculture, la construction et
              la cinématographie.
            </p>
            <p class="text-gray-600">
              Notre engagement envers l'excellence et l'innovation nous a permis de devenir un partenaire
              de confiance pour les entreprises et les particuliers recherchant des services drone professionnels.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-[#1B3F92] mb-2">500+</div>
                <div class="text-gray-700 font-medium">Projets</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-[#1B3F92] mb-2">50+</div>
                <div class="text-gray-700 font-medium">Pilotes</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-[#1B3F92] mb-2">98%</div>
                <div class="text-gray-700 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Nos <span class="text-[#1B3F92]">Services</span>
          </h2>
          <p class="text-xl text-gray-600">Solutions drone complètes adaptées à vos besoins</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div class="relative">
              <img :src="service.image" :alt="service.title" class="w-full h-48 object-cover" />
              <!-- Overlay noir léger -->
              <div class="absolute inset-0 bg-black/40 bg-opacity-20"></div>
              <!-- Icon argentée en bas à gauche -->
              <i :class="`bx ${service.icon} text-gray-300 text-3xl absolute bottom-4 left-4`"></i>
            </div>

            <div class="p-6 text-left">
              <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <router-link
                :to="service.link"
                class="text-[#1B3F92] font-medium flex items-center gap-2"
              >
                <i class="bx bx-chevron-right"></i>
                En savoir plus
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formation Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Formation <span class="text-[#1B3F92]">Pilote Drone</span>
          </h2>
          <p class="text-xl text-gray-600">
            Devenez pilote drone certifié avec nos programmes de formation complets
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Cours Débutant -->
          <div
            class="bg-white rounded-xl shadow-md border border-gray-200 relative p-8 flex flex-col items-start text-left"
          >
            <!-- Icon -->
            <div class="bg-[#1B3F92] text-white p-3 rounded-full mb-4">
              <i class="bx bxs-book text-4xl"></i>
            </div>

            <!-- Contenu -->
            <h3 class="text-3xl font-semibold mb-2">Cours Débutant</h3>
            <p class="text-gray-500 mb-4">2 Semaines</p>
            <div class="text-4xl font-bold text-black mb-6">599€</div>

            <ul class="list-disc list-inside text-black space-y-2 mb-6">
              <li>Opérations de vol basiques</li>
              <li>Protocoles de sécurité</li>
              <li>Exigences légales</li>
              <li>Pratique en conditions réelles</li>
            </ul>

            <button
              class="w-full bg-[#1B3F92] hover:bg-[#1B3F92]/90 text-white font-semibold py-4 px-6 rounded-lg transition duration-300"
            >
              S'inscrire maintenant
            </button>
          </div>

          <!-- Certification Professionnelle (LE PLUS POPULAIRE) -->
          <div
            class="relative bg-[#1B3F92] text-white rounded-xl shadow-lg border-2 border-blue-500 p-8 flex flex-col items-start text-left"
          >
            <!-- LE PLUS POPULAIRE Badge -->
            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div
                class="bg-blue-300 text-blue-900 font-bold text-sm py-3 px-6 rounded-full shadow-lg"
              >
                LE PLUS POPULAIRE
              </div>
            </div>

            <!-- Icon -->
            <div class="bg-white/25 border border-white/50 text-gray-300 p-3 rounded-full mb-4">
              <i class="bx bxs-graduation text-4xl"></i>
            </div>

            <!-- Contenu -->
            <h3 class="text-3xl font-semibold mb-2">Certification Professionnelle</h3>
            <p class="text-gray-100 mb-4">6 Semaines</p>
            <div class="text-4xl font-bold mb-6">1 499€</div>

            <ul class="list-disc list-inside text-white space-y-2 mb-6">
              <li>Techniques de vol avancées</li>
              <li>Opérations commerciales</li>
              <li>Préparation certification DGAC</li>
              <li>Projets concrets</li>
            </ul>

            <button
              class="w-full bg-white hover:bg-gray-200 text-[#1B3F92] font-semibold py-4 px-6 rounded-lg transition duration-300"
            >
              S'inscrire maintenant
            </button>
          </div>

          <!-- Spécialisation Expert -->
          <div
            class="bg-white rounded-xl shadow-md border border-gray-200 relative p-8 flex flex-col items-start text-left"
          >
            <!-- Icon -->
            <div class="bg-[#1B3F92] text-white p-3 rounded-full mb-4">
              <i class="bx bxs-medal text-4xl"></i>
            </div>

            <!-- Contenu -->
            <h3 class="text-3xl font-semibold mb-2">Spécialisation Expert</h3>
            <p class="text-gray-500 mb-4">8 Semaines</p>
            <div class="text-4xl font-bold text-[#1B3F92] mb-6">2 499€</div>

            <ul class="list-disc list-inside text-[#1B3F92] space-y-2 mb-6">
              <li>Formation sectorielle spécifique</li>
              <li>Cinématographie avancée</li>
              <li>Cartographie & topographie</li>
              <li>Développement d'activité</li>
            </ul>

            <button
              class="w-full bg-[#1B3F92] hover:bg-[#1B3F92]/90 text-white font-semibold py-4 px-6 rounded-lg transition duration-300"
            >
              S'inscrire maintenant
            </button>
          </div>
        </div>

        <div
          class="bg-gradient-to-r from-blue-800 to-[#1B3F92] rounded-2xl p-5 shadow-xl mt-16 flex flex-col md:flex-row items-center md:items-start gap-5"
        >
          <!-- Texte à gauche -->
          <div class="flex-1 text-left text-white">
            <!-- Icon utilisateurs au-dessus du texte -->
            <div class="flex gap-2 mb-4">
              <i class="bx bxs-user text-2xl"></i>
              <i class="bx bxs-user text-2xl"></i>
            </div>

            <h3 class="text-3xl font-bold mb-6">Rejoignez 500+ Pilotes Certifiés</h3>
            <p class="text-xl mb-8 max-w-lg opacity-90 leading-relaxed">
              Nos diplômés travaillent avec des entreprises leaders dans le monde entier. Commencez votre parcours dès aujourd'hui et
              débloquez des opportunités de carrière passionnantes dans l'industrie des drones.
            </p>
            <button
              class="bg-white text-[#1B3F92] hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Voir les réussites
            </button>
          </div>

          <!-- Images cascade à droite -->
          <div class="relative flex-1 flex justify-end space-x-7">
            <!-- Première image légèrement en haut et à droite -->
            <img
              :src="heroImg1"
              alt="Formation drone"
              class="w-48 h-42 rounded-lg object-cover shadow-lg relative z-20 top-6 right-52 translate-x-4"
            />
            <!-- Deuxième image légèrement en bas -->
            <img
              :src="heroImg2"
              alt="Pilote certifié"
              class="w-48 h-42 rounded-lg object-cover shadow-lg absolute top-12 right-0 z-10"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Vente de Drones Section -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Vente de Drones <span class="text-[#1B3F92]">Premium</span>
          </h2>
          <p class="text-xl text-gray-600">Des drones haut de gamme pour tous les besoins et budgets</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- 1️ SkyPro Mini -->
          <div
            class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition"
          >
            <div class="relative">
              <img :src="skyProMini" alt="SkyPro Mini" class="w-full h-56 object-cover" />
              <span
                class="absolute top-3 left-3 bg-blue-100 text-[#1B3F92] text-sm font-semibold px-3 py-1 rounded-full"
              >
                Grand public
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800">SkyPro Mini</h3>
              <p class="text-blue-900 text-2xl font-bold mt-2">899€</p>

              <ul class="mt-4 space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Caméra 4K
                </li>
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i>30min d'autonomie
                </li>
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i>Portée 5km
                </li>
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Évitement d'obstacles
                </li>
              </ul>

              <button
                class="mt-6 w-full bg-gray-100 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Voir détails
              </button>
            </div>
          </div>

          <!-- 2️ AeroMax Pro -->
          <div
            class="bg-white rounded-2xl shadow-md overflow-hidden border-4 border-[#1B3F92] hover:shadow-xl transition"
          >
            <div class="relative">
              <img :src="aeroMaxPro" alt="AeroMax Pro" class="w-full h-56 object-cover" />
              <span
                class="absolute top-3 left-3 bg-blue-100 text-[#1B3F92] text-sm font-semibold px-3 py-1 rounded-full"
              >
                Professionnel
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800">AeroMax Pro</h3>
              <p class="text-[#1B3F92] text-2xl font-bold mt-2">2 499€</p>

              <ul class="mt-4 space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i>Caméra 6K
                </li>
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> 45min d'autonomie
                </li>
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Portée 10km
                </li>
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Suivi IA avancé
                </li>
              </ul>

              <button
                class="mt-6 w-full bg-[#1B3F92] text-white font-semibold py-2 rounded-lg hover:bg-[#1B3F92]/90 transition"
              >
                Voir détails
              </button>
            </div>
          </div>

          <!-- IndustrialX -->
          <div
            class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition"
          >
            <div class="relative">
              <img :src="industrialX" alt="IndustrialX" class="w-full h-56 object-cover" />
              <span
                class="absolute top-3 left-3 bg-blue-100 text-[#1B3F92] text-sm font-semibold px-3 py-1 rounded-full"
              >
                Industriel
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800">IndustrialX</h3>
              <p class="text-[#1B3F92] text-2xl font-bold mt-2">8 999€</p>

              <ul class="mt-4 space-y-2 text-gray-600">
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Imagerie thermique
                </li>
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> 60min d'autonomie
                </li>
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Portée 15km
                </li>
                <li class="flex items-center gap-2">
                  <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Capacité de charge élevée
                </li>
              </ul>

              <button
                class="mt-6 w-full bg-gray-100 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Voir détails
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center gap-12">
        <!-- Carte drone -->
        <div
          class="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full gap-8"
        >
          <!-- Contenu gauche -->
          <div class="flex-1">
            <h3 class="text-3xl font-bold text-gray-800 mb-4">SkyPro Mini</h3>
            <p class="text-[#1B3F92] text-3xl font-bold mb-6">899€</p>

            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center gap-3">
                <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Caméra 4K
              </li>
              <li class="flex items-center gap-3">
                <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> 30min d'autonomie
              </li>
              <li class="flex items-center gap-3">
                <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Portée 5km
              </li>
              <li class="flex items-center gap-3">
                <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Évitement d'obstacles
              </li>
              <li class="flex items-center gap-3">
                <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Retour automatique GPS
              </li>
              <li class="flex items-center gap-3">
                <i class="bx bx-check-circle text-[#1B3F92] text-2xl"></i> Contrôle par application mobile
              </li>
            </ul>

            <button
              class="mt-8 bg-[#1B3F92] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1B3F92]/90 transition"
            >
              Voir détails
            </button>
          </div>

          <!-- Image droite -->
          <div class="flex-1">
            <img
              :src="skyProMini"
              alt="SkyPro Mini"
              class="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="min-h-screen bg-gray-50 py-16 px-6">
        <h2 class="text-4xl font-bold text-center text-black mb-12">
          Questions <span class="text-[#1B3F92]">Fréquentes</span>
        </h2>

        <div class="max-w-4xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white shadow-lg rounded-2xl p-6 transition"
          >
            <button
              @click="toggle(index)"
              class="w-full flex justify-between items-center text-left"
            >
              <h3 class="text-lg font-semibold text-gray-800">
                {{ faq.question }}
              </h3>
              <i
                class="bx"
                :class="
                  faq.open
                    ? 'bx-chevron-up text-[#1B3F92] text-3xl'
                    : 'bx-chevron-down text-[#1B3F92] text-3xl'
                "
              ></i>
            </button>

            <div
              v-if="faq.open"
              class="mt-4 text-gray-600 border-t border-gray-300 pt-4 leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
        <!-- Carte bleue -->
        <div class="bg-[#1B3F92] rounded-2xl shadow-lg p-20 max-w-5xl text-center flex flex-col items-center gap-6 mb-25">
          <h1 class="text-4xl font-bold text-white">Vous avez encore des questions ?</h1>
          <p class="text-white text-lg">
            Notre équipe est là pour vous aider dans toutes vos demandes
          </p>
          <button class="bg-white text-[#1B3F92] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
            Contacter le support
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Import vidéos
import video1 from "@/assets/videos/video_2.mp4";
import video2 from "@/assets/videos/video_1.mp4";
import video3 from "@/assets/videos/Video_header_2.mp4";

const heroVideos = [video1, video2, video3];

// Import de l'image
import droneImage from "@/assets/images/Drone_1.jpg";

// Import des images
import img1 from "@/assets/images/1.jpg";
import img2 from "@/assets/images/2.jpg";
import img3 from "@/assets/images/9.jpg";
import img4 from "@/assets/images/8.jpg";
import img5 from "@/assets/images/9.jpg";
import img6 from "@/assets/images/3.jpg";
import heroImg1 from "@/assets/images/9.jpg";
import heroImg2 from "@/assets/images/8.jpg";

import skyProMini from "@/assets/images/1.jpg";
import aeroMaxPro from "@/assets/images/2.jpg";
import industrialX from "@/assets/images/3.jpg";

// FAQ traduite
const faqs = ref([
  {
    question: "Combien de temps peut voler le drone avec une charge complète ?",
    answer: "Nos drones offrent entre 30 et 60 minutes de vol selon le modèle et les conditions météorologiques.",
    open: false,
  },
  {
    question: "Le drone est-il livré avec une caméra ?",
    answer: "Oui, tous nos drones sont équipés de caméras HD ou 4K. Certains modèles prennent même en charge la vidéo ultra-HD 6K.",
    open: false,
  },
  {
    question: "Le drone est-il facile à contrôler pour les débutants ?",
    answer: "Absolument. Chaque modèle comprend une interface d'application intuitive et des modes de vol adaptés aux débutants pour un contrôle fluide.",
    open: false,
  },
  {
    question: "Puis-je utiliser le drone la nuit ?",
    answer: "Oui, la plupart des modèles ont des lumières LED et des fonctionnalités de vision nocturne, mais nous recommandons de voler uniquement dans des zones ouvertes et sûres.",
    open: false,
  },
  {
    question: "Que se passe-t-il si la batterie s'épuise pendant le vol ?",
    answer: "Tous les drones sont équipés d'une fonction \"Retour à la maison\" qui les ramène automatiquement lorsque la batterie est faible.",
    open: false,
  },
  {
    question: "Offrez-vous une garantie ou un service de réparation ?",
    answer: "Oui, tous les achats incluent une garantie de 12 mois et l'accès à nos centres de réparation agréés.",
    open: false,
  },
]);

// Fonction pour ouvrir/fermer une FAQ
const toggle = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};

// Tableau des services traduits
const services = ref([
  {
    image: img1,
    title: "Photographie Aérienne",
    description: "Images haute résolution époustouflantes sous des angles uniques",
    icon: "bxs-camera",
    link: "/photographie-aerienne",
  },
  {
    image: img2,
    title: "Vidéographie",
    description: "Production vidéo professionnelle 4K pour tout projet",
    icon: "bxs-video",
    link: "/videographie",
  },
  {
    image: img3,
    title: "Cartographie & Topographie",
    description: "Services de cartographie 3D précise et de levés topographiques",
    icon: "bxs-map",
    link: "/cartographie-topographie",
  },
  {
    image: img4,
    title: "Inspection d'Infrastructures",
    description: "Inspections sûres et efficaces de bâtiments et structures",
    icon: "bxs-building",
    link: "/inspection-infrastructures",
  },
  {
    image: img5,
    title: "Surveillance Agricole",
    description: "Analyse de santé des cultures et agriculture de précision",
    icon: "bxs-leaf",
    link: "/surveillance-agricole",
  },
  {
    image: img6,
    title: "Solutions de Livraison",
    description: "Systèmes de livraison aérienne nouvelle génération",
    icon: "bxs-package",
    link: "/solutions-livraison",
  },
]);

// Texte dynamique traduit
const heroTitle = ref("L'Avenir de l'Innovation Aérienne");
const heroDescription = ref(
  "Découvrez la technologie drone de pointe. Services professionnels, formation experte et équipement premium."
);
const heroBtnPrimary = ref("Commencer");
const heroBtnSecondary = ref("En savoir plus");

// Index de la vidéo active
const activeIndex = ref(0);

// Changer automatiquement la vidéo toutes les 5 secondes
onMounted(() => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % heroVideos.length;
  }, 5000);
});
</script>
