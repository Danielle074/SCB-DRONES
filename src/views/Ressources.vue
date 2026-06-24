<template>
  <div class="ressources-page">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Centre de <span class="text-blue-300">Ressources</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Tout ce dont vous avez besoin pour maîtriser les drones : guides, tutoriels, études de cas et ressources légales
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="scrollToSection('guides')" class="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              Explorer les guides
            </button>
            <button @click="scrollToSection('telechargements')" class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
              Téléchargements
            </button>
          </div>
        </div>
      </div>
      <div class="absolute top-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
    </section>

    <!-- Navigation des sections -->
    <section class="sticky top-24 z-40 bg-white shadow-lg py-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button @click="scrollToSection('guides')" :class="activeSection === 'guides' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700'" class="px-6 py-2 rounded-lg font-medium transition duration-300 hover:bg-blue-800 hover:text-white">
            Guides pratiques
          </button>
          <button @click="scrollToSection('legislation')" :class="activeSection === 'legislation' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700'" class="px-6 py-2 rounded-lg font-medium transition duration-300 hover:bg-blue-800 hover:text-white">
            Législation
          </button>
          <button @click="scrollToSection('etudes-cas')" :class="activeSection === 'etudes-cas' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700'" class="px-6 py-2 rounded-lg font-medium transition duration-300 hover:bg-blue-800 hover:text-white">
            Études de cas
          </button>
          <button @click="scrollToSection('telechargements')" :class="activeSection === 'telechargements' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700'" class="px-6 py-2 rounded-lg font-medium transition duration-300 hover:bg-blue-800 hover:text-white">
            Téléchargements
          </button>
          <button @click="scrollToSection('faq')" :class="activeSection === 'faq' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700'" class="px-6 py-2 rounded-lg font-medium transition duration-300 hover:bg-blue-800 hover:text-white">
            FAQ
          </button>
        </div>
      </div>
    </section>

    <!-- Guides pratiques -->
    <section id="guides" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Guides <span class="text-blue-900">Pratiques</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Apprenez à maîtriser votre drone avec nos guides étape par étape
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(guide, index) in guides" :key="index" class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-500 transform hover:-translate-y-2">
            <div class="h-48 bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <i :class="`bx ${guide.icon} text-white text-6xl opacity-20`"></i>
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {{ guide.duree }}
                </span>
              </div>
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <i :class="`bx ${guide.icon} text-blue-900 text-2xl`"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800">{{ guide.titre }}</h3>
              </div>
              <p class="text-gray-600 mb-6">{{ guide.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ guide.niveau }}</span>
                <button @click="telechargerGuide(guide)" class="text-blue-900 font-semibold flex items-center hover:text-blue-700">
                  Télécharger
                  <i class="bx bx-download ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Législation -->
    <section id="legislation" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            <span class="text-blue-900">Législation</span> Drone
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières réglementations en vigueur en France et en Europe
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <i class="bx bx-map mr-3 text-blue-900"></i>
              Zones de vol autorisées
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="zone in zonesVol" :key="zone.nom" :class="`border-l-4 ${zone.couleurBordure} p-4`">
                <h4 class="font-bold text-gray-800 mb-2">{{ zone.nom }}</h4>
                <p class="text-gray-600 text-sm">{{ zone.description }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <i class="bx bx-book mr-3 text-blue-900"></i>
              Documents obligatoires
            </h3>
            <div class="space-y-4">
              <div v-for="doc in documentsObligatoires" :key="doc.nom" class="flex items-start">
                <i class="bx bx-file text-blue-900 text-xl mr-4 mt-1"></i>
                <div>
                  <h4 class="font-bold text-gray-800">{{ doc.nom }}</h4>
                  <p class="text-gray-600 text-sm">{{ doc.description }}</p>
                  <a :href="doc.lien" class="text-blue-900 text-sm font-medium hover:text-blue-700 inline-flex items-center mt-2">
                    Voir le modèle
                    <i class="bx bx-link-external ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Études de cas -->
    <section id="etudes-cas" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Études de <span class="text-blue-900">Cas</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos clients utilisent les drones pour transformer leurs activités
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="(etude, index) in etudesCas" :key="index" class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-64 bg-gradient-to-r from-blue-900 to-blue-700 relative">
              <div class="absolute inset-0 flex items-center justify-center">
                <i :class="`bx ${etude.icon} text-white text-8xl opacity-20`"></i>
              </div>
              <div class="absolute bottom-4 left-4">
                <span class="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold">
                  {{ etude.client }}
                </span>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ etude.titre }}</h3>
              <div class="flex items-center text-gray-600 mb-4">
                <i class="bx bx-calendar mr-2"></i>
                <span class="mr-6">{{ etude.date }}</span>
                <i class="bx bx-time mr-2"></i>
                <span>{{ etude.duree }}</span>
              </div>
              <p class="text-gray-600 mb-6">{{ etude.description }}</p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div v-for="(resultat, i) in etude.resultats" :key="i" class="bg-blue-50 p-4 rounded-lg">
                  <div class="text-2xl font-bold text-blue-900">{{ resultat.valeur }}</div>
                  <div class="text-sm text-gray-700">{{ resultat.label }}</div>
                </div>
              </div>
              <button @click="voirEtudeCas(etude)" class="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
                Lire l'étude complète
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Téléchargements -->
    <section id="telechargements" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            <span class="text-blue-900">Téléchargements</span> Gratuits
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Modèles, checklists et outils pour vous accompagner dans vos projets drone
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(fichier, index) in fichiersTelechargement" :key="index" class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i :class="`bx ${fichier.icon} text-blue-900 text-3xl`"></i>
              </div>
              <h4 class="font-bold text-gray-800">{{ fichier.nom }}</h4>
            </div>
            <div class="text-center">
              <div class="text-sm text-gray-600 mb-4">{{ fichier.description }}</div>
              <div class="text-xs text-gray-500 mb-4">{{ fichier.taille }} • {{ fichier.format }}</div>
              <button @click="telechargerFichier(fichier)" class="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-300 flex items-center justify-center">
                <i class="bx bx-download mr-2"></i>
                Télécharger
              </button>
            </div>
          </div>
        </div>

        <!-- Application mobile -->
        <div class="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-3xl font-bold mb-4">Notre application mobile</h3>
              <p class="text-blue-100 mb-6">
                Gérez vos vols, consultez les zones réglementées et accédez à toutes nos ressources depuis votre smartphone.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center">
                  <i class="bx bxl-apple text-2xl mr-2"></i>
                  App Store
                </button>
                <button class="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center">
                  <i class="bx bxl-play-store text-2xl mr-2"></i>
                  Google Play
                </button>
              </div>
            </div>
            <div class="relative">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <i class="bx bx-smartphone text-6xl mb-4"></i>
                <h4 class="text-xl font-bold mb-2">SCB Fly App</h4>
                <p class="text-blue-100">Disponible sur iOS et Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Questions <span class="text-blue-900">Fréquentes</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement des réponses à vos interrogations sur les drones
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-xl shadow-md overflow-hidden">
              <button @click="toggleFaq(index)" class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition duration-300">
                <h3 class="text-lg font-semibold text-gray-800">{{ faq.question }}</h3>
                <i :class="`bx ${faq.open ? 'bx-chevron-up' : 'bx-chevron-down'} text-blue-900 text-2xl transition-transform duration-300`"></i>
              </button>
              <div v-if="faq.open" class="px-6 pb-6 border-t border-gray-200 pt-4">
                <p class="text-gray-600">{{ faq.reponse }}</p>
                <div v-if="faq.ressources" class="mt-4">
                  <p class="text-sm text-gray-500 mb-2">Ressources associées :</p>
                  <div class="flex flex-wrap gap-2">
                    <a v-for="(ressource, i) in faq.ressources" :key="i" :href="ressource.lien" class="bg-blue-50 text-blue-900 px-3 py-1 rounded text-sm hover:bg-blue-100 transition duration-300">
                      {{ ressource.nom }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-6">
            Besoin de ressources personnalisées ?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Nos experts peuvent créer des guides et des documents adaptés à vos besoins spécifiques
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="contacterExpert" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105">
              Contacter un expert
            </button>
            <button @click="demanderRessource" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
              Demander une ressource
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('guides')

// Guides pratiques
const guides = ref([
  {
    titre: 'Guide du débutant - Voler en sécurité',
    description: 'Apprenez les bases du pilotage drone : préparation, décollage, atterrissage et règles de sécurité essentielles.',
    icon: 'bxs-graduation',
    duree: '45 min',
    niveau: 'Débutant',
    fichier: 'guide-debutant-securite.pdf'
  },
  {
    titre: 'Photographie aérienne professionnelle',
    description: 'Maîtrisez les réglages photo, la composition et les techniques pour des clichés époustouflants.',
    icon: 'bxs-camera',
    duree: '2h',
    niveau: 'Intermédiaire',
    fichier: 'guide-photo-aerienne-pro.pdf'
  },
  {
    titre: 'Cartographie et modélisation 3D',
    description: 'Apprenez à créer des cartes précises et des modèles 3D à partir de vos vols drone.',
    icon: 'bxs-map',
    duree: '3h',
    niveau: 'Avancé',
    fichier: 'guide-cartographie-3d.pdf'
  },
  {
    titre: 'Maintenance et entretien du drone',
    description: 'Tout savoir sur l\'entretien régulier, le dépannage et la conservation de votre équipement.',
    icon: 'bxs-wrench',
    duree: '1h30',
    niveau: 'Tous niveaux',
    fichier: 'guide-maintenance-drone.pdf'
  },
  {
    titre: 'Législation française des drones',
    description: 'Guide complet des réglementations en vigueur pour voler légalement en France.',
    icon: 'bxs-book',
    duree: '1h',
    niveau: 'Tous niveaux',
    fichier: 'guide-legislation-france.pdf'
  },
  {
    titre: 'Créer son activité drone professionnelle',
    description: 'Business plan, assurances, démarches administratives et développement client.',
    icon: 'bxs-business',
    duree: '4h',
    niveau: 'Professionnel',
    fichier: 'guide-activite-professionnelle.pdf'
  }
])

// Législation
const zonesVol = ref([
  {
    nom: 'Zone A (Categorie Ouverte)',
    description: 'Vols à vue sans autorisation particulière, hors zones sensibles',
    couleurBordure: 'border-green-500'
  },
  {
    nom: 'Zone B (Categorie Spécifique)',
    description: 'Vols nécessitant une autorisation préalable de la DGAC',
    couleurBordure: 'border-yellow-500'
  },
  {
    nom: 'Zone C (Categorie Certifiée)',
    description: 'Vols interdits ou très réglementés (proximité aéroports, centrales...)',
    couleurBordure: 'border-red-500'
  }
])

const documentsObligatoires = ref([
  {
    nom: 'Déclaration de conformité',
    description: 'Document attestant que votre drone répond aux normes européennes',
    lien: '#'
  },
  {
    nom: 'Assurance RC professionnelle',
    description: 'Obligatoire pour toute activité commerciale avec drone',
    lien: '#'
  },
  {
    nom: 'Carnet de vol',
    description: 'Journal obligatoire pour tracer tous vos vols professionnels',
    lien: '#'
  },
  {
    nom: 'Manuel de sécurité',
    description: 'Document détaillant vos procédures de sécurité internes',
    lien: '#'
  }
])

// Études de cas
const etudesCas = ref([
  {
    client: 'Vinci Construction',
    titre: 'Suivi de chantier avec drones',
    description: 'Comment Vinci a réduit de 40% les temps d\'inspection et amélioré la sécurité sur ses chantiers grâce à nos drones.',
    date: 'Janvier 2024',
    duree: '6 mois',
    icon: 'bxs-building',
    resultats: [
      { valeur: '-40%', label: 'Temps d\'inspection' },
      { valeur: '+25%', label: 'Productivité' },
      { valeur: '0', label: 'Accidents' },
      { valeur: '100%', label: 'Conformité' }
    ]
  },
  {
    client: 'Agriculteurs Coop',
    titre: 'Agriculture de précision à grande échelle',
    description: 'Optimisation des rendements et réduction de l\'utilisation de pesticides grâce à l\'analyse multispectrale par drone.',
    date: 'Mars 2024',
    duree: '1 an',
    icon: 'bxs-leaf',
    resultats: [
      { valeur: '+15%', label: 'Rendement' },
      { valeur: '-30%', label: 'Pesticides' },
      { valeur: '-20%', label: 'Coûts eau' },
      { valeur: '95%', label: 'Précision' }
    ]
  }
])

// Fichiers téléchargement
const fichiersTelechargement = ref([
  {
    nom: 'Checklist pré-vol',
    description: 'Liste de contrôle pour vérifier votre équipement avant chaque vol',
    taille: '2.3 MB',
    format: 'PDF',
    icon: 'bx-list-check',
    fichier: 'checklist-pre-vol.pdf'
  },
  {
    nom: 'Modèle de devis',
    description: 'Modèle professionnel pour vos propositions commerciales',
    taille: '1.8 MB',
    format: 'DOCX',
    icon: 'bx-file',
    fichier: 'modele-devis.docx'
  },
  {
    nom: 'Journal de maintenance',
    description: 'Suivez l\'entretien et les réparations de votre drone',
    taille: '1.5 MB',
    format: 'Excel',
    icon: 'bx-calendar-edit',
    fichier: 'journal-maintenance.xlsx'
  },
  {
    nom: 'Carte zones réglementées',
    description: 'Carte interactive des zones de vol en France',
    taille: '5.2 MB',
    format: 'PDF',
    icon: 'bx-map',
    fichier: 'carte-zones-france.pdf'
  }
])

// FAQ
const faqs = ref([
  {
    question: 'Quelle formation faut-il pour devenir pilote drone professionnel ?',
    reponse: 'En France, pour exercer une activité professionnelle avec drone, vous devez obtenir la certification DGAC. Notre formation "Certification Professionnelle" de 6 semaines prépare à cet examen et couvre toutes les compétences requises.',
    open: false,
    ressources: [
      { nom: 'Guide certification DGAC', lien: '#' },
      { nom: 'Programme formation', lien: '#' }
    ]
  },
  {
    question: 'Quelle assurance est obligatoire pour voler avec un drone ?',
    reponse: 'Pour un usage récréatif, une assurance responsabilité civile classique suffit souvent. Pour un usage professionnel, une assurance RC professionnelle spécifique aux drones est obligatoire. Elle couvre les dommages causés aux tiers lors des vols.',
    open: false,
    ressources: [
      { nom: 'Modèle attestation assurance', lien: '#' }
    ]
  },
  {
    question: 'Peut-on voler en ville avec un drone ?',
    reponse: 'Le vol en agglomération est strictement réglementé. Il nécessite généralement une autorisation préfectorale, une déclaration à la mairie et le respect de distances de sécurité par rapport aux personnes et aux bâtiments. Consultez toujours la carte des zones réglementées avant de voler.',
    open: false,
    ressources: [
      { nom: 'Carte zones réglementées', lien: '#' },
      { nom: 'Guide autorisations', lien: '#' }
    ]
  },
  {
    question: 'Comment choisir son premier drone professionnel ?',
    reponse: 'Le choix dépend de votre activité : caméra 4K minimum pour la vidéo, autonomie de 30+ min pour les inspections, capacité de charge pour la livraison, etc. Nous recommandons une consultation avec nos experts pour trouver le modèle adapté à vos besoins spécifiques.',
    open: false,
    ressources: [
      { nom: 'Guide choix drone', lien: '#' },
      { nom: 'Comparatif modèles', lien: '#' }
    ]
  },
  {
    question: 'Quelle est la durée de vie d\'une batterie de drone ?',
    reponse: 'Les batteries LiPo ont généralement une durée de vie de 300-500 cycles de charge. Pour maximiser leur durée de vie : ne pas les décharger complètement, les stocker à 50% de charge, éviter les températures extrêmes et les surveiller régulièrement.',
    open: false,
    ressources: [
      { nom: 'Guide maintenance batteries', lien: '#' }
    ]
  }
])

// Fonctions
const scrollToSection = (sectionId: string) => {
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const telechargerGuide = (guide: any) => {
  alert(`Téléchargement du guide : ${guide.titre}`)
  // Ici, ajouter la logique de téléchargement réel
}

const telechargerFichier = (fichier: any) => {
  alert(`Téléchargement du fichier : ${fichier.nom}`)
  // Ici, ajouter la logique de téléchargement réel
}

const voirEtudeCas = (etude: any) => {
  alert(`Ouverture de l'étude de cas : ${etude.titre}`)
  // Navigation vers la page détaillée
}

const contacterExpert = () => {
  alert('Redirection vers la page contact')
  // Navigation vers contact
}

const demanderRessource = () => {
  alert('Ouverture du formulaire de demande de ressource')
}

const toggleFaq = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open
}

// Gestion du scroll pour la navigation
const handleScroll = () => {
  const sections = ['guides', 'legislation', 'etudes-cas', 'telechargements', 'faq']
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetBottom = offsetTop + element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.ressources-page {
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

/* Section active */
.bg-blue-900 {
  background-color: #1B3F92;
}

/* Responsive */
@media (max-width: 768px) {
  .sticky {
    position: static;
  }

  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

/* Smooth transitions */
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}
</style>
