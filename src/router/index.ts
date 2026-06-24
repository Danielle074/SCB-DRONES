import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Solutions from '@/views/Solutions.vue'
import Application from '@/views/Application.vue'
import Ressources from '@/views/Ressources.vue'
import Entreprise from '@/views/Entreprise.vue'
import Contact from '@/views/Contact.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/solutions', name: 'Solutions', component: Solutions },
  { path: '/Application', name: 'Application', component: Application },
  { path: '/ressources', name: 'Ressources', component: Ressources },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/entreprise', name: 'Entreprise', component: Entreprise },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
