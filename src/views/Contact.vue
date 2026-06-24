<template>
  <div class="contact-page">
    <!-- En-tête -->
    <section class="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          Contactez-<span class="text-blue-300">nous</span>
        </h1>
        <p class="text-xl text-blue-100 max-w-2xl mx-auto">
          Une question, un projet ? N'hésitez pas à nous contacter, nous vous répondrons dans les meilleurs délais.
        </p>

        <!-- Lien externe ajouté -->
        <div class="mt-8">
          <a
            href="https://logiciel-de-scb-regulator.vercel.app/login"
            target="_blank"
            class="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300 shadow-lg"
          >
            Accéder à SCB Regulator
          </a>
        </div>
      </div>
    </section>

    <!-- Section Contact : formulaire + infos -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Formulaire -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="jean.dupont@exemple.com"
                />
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Demande de devis"
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Envoyer
              </button>
            </form>
            <p v-if="submitted" class="mt-4 text-green-600 text-center font-semibold">
              ✅ Votre message a été envoyé avec succès !
            </p>
          </div>

          <!-- Coordonnées et carte -->
          <div class="space-y-8">
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">Nos coordonnées</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <i class="bx bx-map text-2xl text-blue-900 mr-4"></i>
                  <div>
                    <p class="font-semibold text-gray-700">Adresse</p>
                    <p class="text-gray-600">12 rue de l'Innovation<br />75001 Paris, France</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="bx bx-phone text-2xl text-blue-900 mr-4"></i>
                  <div>
                    <p class="font-semibold text-gray-700">Téléphone</p>
                    <p class="text-gray-600">+33 (0)1 23 45 67 89</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="bx bx-envelope text-2xl text-blue-900 mr-4"></i>
                  <div>
                    <p class="font-semibold text-gray-700">Email</p>
                    <p class="text-gray-600">contact@scbfly.com</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="bx bx-time text-2xl text-blue-900 mr-4"></i>
                  <div>
                    <p class="font-semibold text-gray-700">Horaires</p>
                    <p class="text-gray-600">Lun - Ven : 9h00 - 18h00</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Carte (placeholder) -->
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Nous trouver</h3>
              <div class="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span class="text-gray-500">Carte interactive (intégrez Google Maps)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Autres moyens de contact (réseaux sociaux) -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Suivez-nous</h2>
        <div class="flex justify-center space-x-6">
          <a href="#" class="text-blue-900 hover:text-blue-700 text-4xl"><i class="bx bxl-linkedin"></i></a>
          <a href="#" class="text-blue-900 hover:text-blue-700 text-4xl"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="text-blue-900 hover:text-blue-700 text-4xl"><i class="bx bxl-youtube"></i></a>
          <a href="#" class="text-blue-900 hover:text-blue-700 text-4xl"><i class="bx bxl-instagram"></i></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  console.log('Formulaire soumis :', form.value)
  submitted.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
  setTimeout(() => { submitted.value = false }, 5000)
}
</script>

<style scoped>
.contact-page {
  scroll-behavior: smooth;
}
</style>
