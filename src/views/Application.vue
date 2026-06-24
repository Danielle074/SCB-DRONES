<template>
  <div class="applications-page">
    <!-- Hero Section avec image de fond -->
    <section class="relative py-32 text-white overflow-hidden">
      <!-- Image de fond hero -->
      <div class="absolute inset-0 z-0">
        <img
          :src="heroImage"
          alt="Drone applications hero"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/80"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Secteurs d'<span class="text-blue-300">Application</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Découvrez comment nos solutions drone transforment et optimisent chaque secteur d'activité
          </p>
          <div class="flex justify-center space-x-4">
            <a href="#applications-grid" class="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
              Explorer les secteurs
            </a>
            <a href="#contact" class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      <!-- Élément décoratif -->
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>

    <!-- Introduction -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Des solutions sur <span class="text-blue-900">mesure</span> pour chaque industrie
          </h2>
          <p class="text-lg text-gray-600 mb-12">
            Grâce à la polyvalence de nos drones et à notre expertise sectorielle,
            nous développons des solutions adaptées aux défis spécifiques de chaque métier.
            De l'agriculture de précision à l'inspection industrielle, découvrez nos réalisations.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div class="text-gray-600">Secteurs couverts</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-900 mb-2">200+</div>
              <div class="text-gray-600">Projets réalisés</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-900 mb-2">98%</div>
              <div class="text-gray-600">Clients satisfaits</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-900 mb-2">24h</div>
              <div class="text-gray-600">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Grid Applications -->
    <section id="applications-grid" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">
          Applications par <span class="text-blue-900">secteur</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Construction -->
          <div class="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div class="h-64 overflow-hidden">
              <img
                :src="constructionImage"
                alt="Construction & BTP"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t  to-transparent"></div>
              <span class="absolute top-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                BTP & CONSTRUCTION
              </span>
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <svg class="w-6 h-6 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Construction & BTP</h3>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Suivi de chantier en temps réel, modélisation 3D précise, inspection de structures complexes et analyse topographique avancée.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Photogrammétrie de chantier</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Inspection d'échafaudages</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Calcul de volumes de stock</span>
                </div>
              </div>
              <a href="#" class="text-blue-900 font-semibold flex items-center group-hover:text-blue-700 transition-colors duration-300">
                Voir les études de cas
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Agriculture -->
          <div class="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div class="h-64 overflow-hidden">
              <img
                :src="agricultureImage"
                alt="Agriculture de précision"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t  to-transparent"></div>
              <span class="absolute top-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                AGRI-TECH
              </span>
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <svg class="w-6 h-6 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Agriculture de Précision</h3>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Optimisation des rendements grâce à l'analyse multispectrale, surveillance automatisée des cultures et gestion intelligente des ressources.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Cartographie NDVI</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Pulvérisation ciblée</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Suivi d'irrigation</span>
                </div>
              </div>
              <a href="#" class="text-blue-900 font-semibold flex items-center group-hover:text-blue-700 transition-colors duration-300">
                Découvrir nos solutions
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Sécurité -->
          <div class="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div class="h-64 overflow-hidden">
              <img
                :src="securityImage"
                alt="Sécurité & Surveillance"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t  to-transparent"></div>
              <span class="absolute top-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                SÉCURITÉ
              </span>
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <svg class="w-6 h-6 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Sécurité & Surveillance</h3>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Surveillance intelligente de sites sensibles, intervention rapide en situations d'urgence et patrouille automatisée 24h/24.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Surveillance périmétrique</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Recherche et sauvetage</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Gestion de crise</span>
                </div>
              </div>
              <a href="#" class="text-blue-900 font-semibold flex items-center group-hover:text-blue-700 transition-colors duration-300">
                Explorer nos systèmes
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Énergie -->
          <div class="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div class="h-64 overflow-hidden">
              <img
                :src="energyImage"
                alt="Énergie & Utilities"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t  to-transparent"></div>
              <span class="absolute top-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                ÉNERGIE
              </span>
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <svg class="w-6 h-6 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Énergie & Utilities</h3>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Inspection d'infrastructures énergétiques, maintenance préventive de lignes haute tension et surveillance d'installations solaires.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Inspection d'éoliennes</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Contrôle de panneaux solaires</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Maintenance de pipelines</span>
                </div>
              </div>
              <a href="#" class="text-blue-900 font-semibold flex items-center group-hover:text-blue-700 transition-colors duration-300">
                Voir nos réalisations
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Environnement -->
          <div class="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div class="h-64 overflow-hidden">
              <img
                :src="environmentImage"
                alt="Environnement & Conservation"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t to-transparent"></div>
              <span class="absolute top-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                ENVIRONNEMENT
              </span>
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <svg class="w-6 h-6 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Environnement</h3>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Surveillance écologique, cartographie des écosystèmes, détection de pollutions et suivi de la biodiversité.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Suivi de la faune</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Détection de déforestation</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Contrôle de pollution</span>
                </div>
              </div>
              <a href="#" class="text-blue-900 font-semibold flex items-center group-hover:text-blue-700 transition-colors duration-300">
                Découvrir nos projets
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Médias -->
          <div class="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div class="h-64 overflow-hidden">
              <img
                :src="mediaImage"
                alt="Médias & Cinéma"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t to-transparent"></div>
              <span class="absolute top-4 left-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                MÉDIAS
              </span>
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <svg class="w-6 h-6 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Médias & Cinéma</h3>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Prises de vue aériennes spectaculaires, reportages immersifs et production audiovisuelle de haute qualité.
              </p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Tournage cinématographique</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Reportage événementiel</span>
                </div>
                <div class="flex items-center">
                  <div class="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                  <span class="text-gray-700">Photographie immobilière</span>
                </div>
              </div>
              <a href="#" class="text-blue-900 font-semibold flex items-center group-hover:text-blue-700 transition-colors duration-300">
                Voir notre portfolio
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6">
            Votre secteur n'est pas listé ?
          </h2>
          <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Nos experts peuvent développer une solution sur mesure adaptée à vos besoins spécifiques
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Demander une étude personnalisée
            </a>
            <a href="tel:+33123456789" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              <span class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Appeler un expert
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Importation des images depuis le dossier assets
import heroImage from '@/assets/images/1.jpg'
import constructionImage from '@/assets/images/2.jpg'
import agricultureImage from '@/assets/images/3.jpg'
import securityImage from '@/assets/images/4.jpg'
import energyImage from '@/assets/images/5.jpg'
import environmentImage from '@/assets/images/6.jpg'
import mediaImage from '@/assets/images/7.jpg'

export default {
  name: 'ApplicationsPage',
  data() {
    return {
      // Assignation des images importées aux données réactives
      heroImage: heroImage,
      constructionImage: constructionImage,
      agricultureImage: agricultureImage,
      securityImage: securityImage,
      energyImage: energyImage,
      environmentImage: environmentImage,
      mediaImage: mediaImage,

      // Données pour les secteurs d'application
      sectors: [
        {
          id: 1,
          title: "Construction & BTP",
          tag: "BTP",
          description: "Suivi de chantier, modélisation 3D, inspection de structures...",
          image: constructionImage,
          icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
          features: [
            "Photogrammétrie de chantier",
            "Inspection d'échafaudages",
            "Calcul de volumes de stock"
          ]
        },
        // ... autres secteurs
      ]
    }
  },
  mounted() {
    // Animation au défilement
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      // Animation des cartes au scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      }, { threshold: 0.1 })

      // Observer les cartes
      document.querySelectorAll('.group').forEach((el) => observer.observe(el))
    }
  }
}
</script>

<style scoped>
.applications-page {
  scroll-behavior: smooth;
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Effets hover améliorés */
.group {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover {
  box-shadow: 0 20px 40px rgba(0, 144, 255, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
