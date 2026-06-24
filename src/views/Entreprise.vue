<template>
  <div class="entreprise-page">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Notre <span class="text-blue-300">Entreprise</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Pionniers de l'innovation drone depuis 2015, nous transformons l'avenir de l'aérien avec passion et expertise
          </p>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
    </section>

    <!-- Notre Histoire -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Notre <span class="text-blue-900">Histoire</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez le parcours qui a fait de nous le leader français des solutions drone
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <!-- Timeline verticale -->
          <div class="relative">
            <!-- Ligne centrale -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <!-- Étape 1 -->
            <div class="flex flex-col md:flex-row items-center mb-16 relative">
              <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:text-right">
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div class="inline-flex items-center mb-4">
                    <span class="bg-blue-900 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">2015</span>
                    <h3 class="text-2xl font-bold text-gray-800">Fondation</h3>
                  </div>
                  <p class="text-gray-600">
                    Création de SCB Fly par trois ingénieurs passionnés d'aéronautique. Notre première mission : démocratiser l'accès aux drones professionnels.
                  </p>
                </div>
              </div>

              <div class="absolute left-1/2 transform -translate-x-1/2">
                <div class="w-8 h-8 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              <div class="md:w-1/2 md:pl-12">
                <!-- Espace vide pour alignement -->
              </div>
            </div>

            <!-- Étape 2 -->
            <div class="flex flex-col md:flex-row items-center mb-16 relative">
              <div class="md:w-1/2 md:pr-12">
                <!-- Espace vide -->
              </div>

              <div class="absolute left-1/2 transform -translate-x-1/2">
                <div class="w-8 h-8 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              <div class="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div class="inline-flex items-center mb-4">
                    <span class="bg-blue-900 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">2017</span>
                    <h3 class="text-2xl font-bold text-gray-800">Premier Centre de Formation</h3>
                  </div>
                  <p class="text-gray-600">
                    Ouverture de notre premier centre de formation agréé DGAC. Nous avons formé plus de 200 pilotes la première année.
                  </p>
                </div>
              </div>
            </div>

            <!-- Étape 3 -->
            <div class="flex flex-col md:flex-row items-center mb-16 relative">
              <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:text-right">
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div class="inline-flex items-center mb-4">
                    <span class="bg-blue-900 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">2019</span>
                    <h3 class="text-2xl font-bold text-gray-800">Expansion Nationale</h3>
                  </div>
                  <p class="text-gray-600">
                    Ouverture de 5 nouvelles agences en France. Début de notre collaboration avec les grands groupes industriels français.
                  </p>
                </div>
              </div>

              <div class="absolute left-1/2 transform -translate-x-1/2">
                <div class="w-8 h-8 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              <div class="md:w-1/2 md:pl-12">
                <!-- Espace vide -->
              </div>
            </div>

            <!-- Étape 4 -->
            <div class="flex flex-col md:flex-row items-center relative">
              <div class="md:w-1/2 md:pr-12">
                <!-- Espace vide -->
              </div>

              <div class="absolute left-1/2 transform -translate-x-1/2">
                <div class="w-8 h-8 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              <div class="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div class="inline-flex items-center mb-4">
                    <span class="bg-blue-900 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">2024</span>
                    <h3 class="text-2xl font-bold text-gray-800">Leader Americain</h3>
                  </div>
                  <p class="text-gray-600">
                    SCB Fly devient le premier opérateur drone français avec plus de 100 collaborateurs et 5000 missions réalisées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Vision -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Texte Vision -->
            <div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">
                Notre <span class="text-blue-900">Vision</span>
              </h2>
              <p class="text-gray-600 mb-6 text-lg leading-relaxed">
                Nous croyons en un monde où la technologie drone rend les services plus efficaces, plus sûrs et plus accessibles pour tous.
              </p>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <i class="bx bx-rocket text-blue-900 text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Innovation Continue</h4>
                    <p class="text-gray-600">Investir 15% de notre chiffre d'affaires dans la R&D pour rester à la pointe.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <i class="bx bx-leaf text-blue-900 text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Développement Durable</h4>
                    <p class="text-gray-600">Objectif neutralité carbone d'ici 2030 pour toutes nos opérations.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <i class="bx bx-group text-blue-900 text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Impact Social</h4>
                    <p class="text-gray-600">Former 1000 jeunes aux métiers des drones d'ici 2025.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Statistiques -->
            <div class="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-10 text-white">
              <h3 class="text-3xl font-bold mb-8 text-center">Nos Chiffres Clés</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-5xl font-bold mb-2">5000+</div>
                  <div class="text-blue-200">Missions réalisées</div>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-bold mb-2">100+</div>
                  <div class="text-blue-200">Collaborateurs</div>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-bold mb-2">2500+</div>
                  <div class="text-blue-200">Pilotes formés</div>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-bold mb-2">98%</div>
                  <div class="text-blue-200">Clients satisfaits</div>
                </div>
              </div>
              <div class="mt-8 pt-8 border-t border-blue-700">
                <div class="text-center">
                  <div class="text-3xl font-bold mb-2">10M€</div>
                  <div class="text-blue-200">Chiffre d'affaires 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Équipe -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Notre <span class="text-blue-900">Équipe</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Des experts passionnés qui partagent la même vision : rendre l'innovation drone accessible à tous
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Membre 1 - CEO -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-500 transform hover:-translate-y-2">
              <div class="h-64 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <i class="bx bxs-user text-white text-8xl opacity-20"></i>
                </div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
                    Fondateur & CEO
                  </span>
                </div>
              </div>
              <div class="p-8 text-center">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Sophie Martin</h3>
                <p class="text-blue-900 font-semibold mb-4">Ingénieure aéronautique - 15 ans d'expérience</p>
                <p class="text-gray-600 mb-6">
                  Ancienne pilote de ligne, Sophie a fondé SCB Fly pour démocratiser l'accès aux technologies aériennes.
                </p>
                <div class="flex justify-center space-x-4">
                  <a href="#" class="text-blue-900 hover:text-blue-700">
                    <i class="bx bxl-linkedin text-2xl"></i>
                  </a>
                  <a href="#" class="text-blue-900 hover:text-blue-700">
                    <i class="bx bx-envelope text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Membre 2 - Directeur Technique -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-500 transform hover:-translate-y-2">
              <div class="h-64 bg-gradient-to-br from-blue-800 to-blue-700 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <i class="bx bxs-cog text-white text-8xl opacity-20"></i>
                </div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
                    Directeur Technique
                  </span>
                </div>
              </div>
              <div class="p-8 text-center">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Thomas Dubois</h3>
                <p class="text-blue-900 font-semibold mb-4">Docteur en robotique - 12 ans d'expérience</p>
                <p class="text-gray-600 mb-6">
                  Spécialiste en intelligence artificielle, Thomas dirige notre département R&D et innovation.
                </p>
                <div class="flex justify-center space-x-4">
                  <a href="#" class="text-blue-900 hover:text-blue-700">
                    <i class="bx bxl-linkedin text-2xl"></i>
                  </a>
                  <a href="#" class="text-blue-900 hover:text-blue-700">
                    <i class="bx bx-envelope text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Membre 3 - Directrice Formation -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-500 transform hover:-translate-y-2">
              <div class="h-64 bg-gradient-to-br from-blue-700 to-blue-600 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <i class="bx bxs-graduation text-white text-8xl opacity-20"></i>
                </div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
                    Directrice Formation
                  </span>
                </div>
              </div>
              <div class="p-8 text-center">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Camille Leroy</h3>
                <p class="text-blue-900 font-semibold mb-4">Formatrice agréée DGAC - 10 ans d'expérience</p>
                <p class="text-gray-600 mb-6">
                  Passionnée de pédagogie, Camille a développé nos programmes de formation reconnus dans toute la France.
                </p>
                <div class="flex justify-center space-x-4">
                  <a href="#" class="text-blue-900 hover:text-blue-700">
                    <i class="bx bxl-linkedin text-2xl"></i>
                  </a>
                  <a href="#" class="text-blue-900 hover:text-blue-700">
                    <i class="bx bx-envelope text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Voir toute l'équipe -->
          <div class="text-center mt-12">
            <button class="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 shadow-lg hover:shadow-xl">
              Rencontrer toute notre équipe
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Valeurs -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Nos <span class="text-blue-900">Valeurs</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Les principes qui guident chacune de nos actions et décisions
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
              <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="bx bxs-shield-alt text-blue-900 text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Sécurité</h3>
              <p class="text-gray-600">
                La sécurité est notre priorité absolue, dans chaque mission et chaque formation.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
              <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="bx bxs-bulb text-blue-900 text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p class="text-gray-600">
                Nous repoussons constamment les limites de la technologie drone.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
              <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="bx bxs-heart text-blue-900 text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Passion</h3>
              <p class="text-gray-600">
                Notre équipe partage une passion commune pour l'aérien et la technologie.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300">
              <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="bx bxs-hand text-blue-900 text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Éthique</h3>
              <p class="text-gray-600">
                Nous agissons avec transparence et respect envers nos clients, partenaires et l'environnement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reconnaissances & Partenaires -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Reconnaissances & <span class="text-blue-900">Partenaires</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre expertise reconnue par les plus grands acteurs du secteur
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <!-- Certifications -->
          <div class="mb-12">
            <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">Nos Certifications</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-white p-6 rounded-xl shadow-md text-center">
                <div class="text-4xl text-blue-900 mb-4">DGAC</div>
                <p class="text-gray-600 text-sm">Opérateur agréé</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md text-center">
                <div class="text-4xl text-blue-900 mb-4">ISO 9001</div>
                <p class="text-gray-600 text-sm">Qualité</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md text-center">
                <div class="text-4xl text-blue-900 mb-4">ISO 14001</div>
                <p class="text-gray-600 text-sm">Environnement</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md text-center">
                <div class="text-4xl text-blue-900 mb-4">ESG</div>
                <p class="text-gray-600 text-sm">Responsabilité sociale</p>
              </div>
            </div>
          </div>

          <!-- Partenaires -->
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">Ils nous font confiance</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div class="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <div class="text-gray-800 font-bold text-xl">VINCI</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <div class="text-gray-800 font-bold text-xl">EDF</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <div class="text-gray-800 font-bold text-xl">SNCF</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <div class="text-gray-800 font-bold text-xl">AIRBUS</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <div class="text-gray-800 font-bold text-xl">BOUYGUES</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <div class="text-gray-800 font-bold text-xl">TOTAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Rejoignez-nous -->
    <section class="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold mb-6">
            Vous souhaitez rejoindre notre aventure ?
          </h2>
          <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Nous recrutons constamment des talents passionnés pour développer l'innovation drone de demain
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl">
              Voir nos offres d'emploi
            </button>
            <button class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
              Devenir partenaire
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Fonctions

// Navigation vers carrières

// Navigation vers partenariats
</script>

<style scoped>
.entreprise-page {
  scroll-behavior: smooth;
}

/* Animations */
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

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

/* Responsive Timeline */
@media (max-width: 768px) {
  .relative > .absolute {
    left: 2rem;
  }

  .flex-col.md\:flex-row {
    flex-direction: column;
  }

  .md\:w-1\/2 {
    width: 100%;
  }

  .md\:pr-12, .md\:pl-12 {
    padding-left: 0;
    padding-right: 0;
  }

  .text-right.md\:text-right {
    text-align: left;
  }
}
</style>
