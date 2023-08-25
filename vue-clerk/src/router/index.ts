import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import SignIn from '../views/SignIn.vue'
// @ts-ignore
import SignUp from '../views/SignUp.vue'
// @ts-ignore
import Profile from '../views/Profile.vue'

// @ts-ignore
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    
  ]
})

export default router
