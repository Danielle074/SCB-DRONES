<template>
  <div class="solutions-page">
    <!-- Hero Section Centrée -->
<section class="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <!-- Titre centré -->
      <h1 class="text-5xl md:text-6xl font-bold mb-6">
        Solutions Drone <span class="text-blue-300">Innovantes</span>
      </h1>

      <!-- Description centrée -->
      <p class="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
        Découvrez comment la technologie drone révolutionne votre secteur d'activité avec des solutions sur mesure
      </p>

      <!-- Bouton centré -->
      <a href="#solutions" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Explorer les solutions
      </a>
    </div>
  </div>

  <!-- Élément décoratif SVG -->
  <div class="absolute bottom-0 right-0 opacity-10">
    <svg width="400" height="400" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
    </svg>
  </div>


</section>

    <!-- Solutions Grid -->
    <section id="solutions" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Nos <span class="text-blue-900">Solutions</span> Drone
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Nos drones apportent des solutions innovantes pour optimiser vos processus, réduire vos coûts et améliorer vos performances
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Solution 1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 group">
            <div class="h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                <svg class="w-8 h-8 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Inspection & Surveillance</h3>
              <p class="text-gray-600 mb-6">
                Inspections détaillées d'infrastructures, surveillance de sites sensibles et contrôle qualité avec une précision inégalée.
              </p>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Inspection de lignes électriques</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Surveillance de chantiers</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Contrôle d'infrastructures</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Maintenance préventive</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Solution 2 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 group">
            <div class="h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                <svg class="w-8 h-8 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Sécurité & Secours</h3>
              <p class="text-gray-600 mb-6">
                Intervention rapide en situations d'urgence, recherche et sauvetage, et surveillance de sécurité avancée.
              </p>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Recherche et sauvetage</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Surveillance de foule</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Intervention d'urgence</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Patrouille sécuritaire</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Solution 3 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 group">
            <div class="h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                <svg class="w-8 h-8 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Cartographie & Topographie</h3>
              <p class="text-gray-600 mb-6">
                Cartographie précise, modélisation 3D et analyses topographiques pour l'agriculture, l'urbanisme et la construction.
              </p>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Cartographie de précision</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Modélisation 3D de sites</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Suivi de chantiers</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Analyses volumétriques</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Solution 4 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 group">
            <div class="h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                <svg class="w-8 h-8 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Agriculture de Précision</h3>
              <p class="text-gray-600 mb-6">
                Optimisation des rendements agricoles grâce à l'analyse multispectrale et la surveillance automatisée des cultures.
              </p>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Analyse de santé des cultures</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Pulvérisation de précision</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Surveillance d'irrigation</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Comptage de plants</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Solution 5 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 group">
            <div class="h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                <svg class="w-8 h-8 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Livraison & Logistique</h3>
              <p class="text-gray-600 mb-6">
                Livraison rapide et efficace de colis, transport médical d'urgence et optimisation des chaînes logistiques.
              </p>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Livraison de colis</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Transport médical urgent</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Gestion d'entrepôts</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Suivi de flotte</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Solution 6 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 group">
            <div class="h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                <svg class="w-8 h-8 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Médias & Cinématographie</h3>
              <p class="text-gray-600 mb-6">
                Prises de vue aériennes spectaculaires, reportages immersifs et production audiovisuelle de haute qualité.
              </p>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Tournage cinématographique</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Reportage événementiel</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Photographie immobilière</span>
                </li>
                <li class="flex items-center">
                  <div class="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                  <span>Couverture sportive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">
            Avantages <span class="text-blue-300">Clés</span>
          </h2>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez pourquoi nos solutions drone transforment votre façon de travailler
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Rapidité</h3>
            <p class="text-blue-200">Interventions 10x plus rapides que les méthodes traditionnelles</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Précision</h3>
            <p class="text-blue-200">Données précises à ±1cm grâce aux capteurs avancés</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Économies</h3>
            <p class="text-blue-200">Jusqu'à 60% de réduction des coûts d'inspection</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Sécurité</h3>
            <p class="text-blue-200">Réduction des risques pour le personnel sur les sites dangereux</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Prêt à transformer votre entreprise avec nos solutions drone ?
          </h2>
          <p class="text-gray-600 mb-8">
            Contactez-nous pour une démonstration personnalisée et découvrez comment nos solutions peuvent répondre à vos besoins spécifiques.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" class="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
              Demander une démo
            </a>
            <a href="#" class="bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Téléphoner à un expert
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SolutionsPage',
  data() {
    return {
      solutions: [
        {
          id: 1,
          title: "Inspection & Surveillance",
          description: "Inspections détaillées d'infrastructures avec précision inégalée.",
          icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
          features: [
            "Inspection de lignes électriques",
            "Surveillance de chantiers",
            "Contrôle d'infrastructures",
            "Maintenance préventive"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.solutions-page {
  scroll-behavior: smooth;
}

/* Animation pour les cartes */
.transform {
  transition: transform 0.3s ease-in-out;
}

/* Dégradé personnalisé */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-blue-900 {
  --tw-gradient-from: #1e3a8a;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(30, 58, 138, 0));
}

.via-blue-800 {
  --tw-gradient-stops: var(--tw-gradient-from), #1e40af, var(--tw-gradient-to, rgba(30, 64, 175, 0));
}

.to-blue-700 {
  --tw-gradient-to: #1d4ed8;
}
</style>
