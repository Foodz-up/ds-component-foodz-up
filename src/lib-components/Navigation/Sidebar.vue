<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6">
        <nuxt-link to="/" class="flex items-center">
          <div href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="~/assets/Logo.png"
              alt=""
            >
          </div>
          <div class="font-bold text-primary text-2xl mx-2">
            Foodz-up
          </div>
          <div v-if="isConnected">
            {{ $auth.user.id }}
          </div>
        </nuxt-link>
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" aria-expanded="false" @click="phoneMenuToggle()">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <div class="relative flex">
            <div v-for="(navigation, index) in navigations" :key="index" class="mr-4">
              <div v-if="navigation.links">
                <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false" @click="menuToggle()">
                  <span>{{ navigation.title }}</span>
                  <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div :class="{ hidden: !menu }" class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <nuxt-link v-for="(link, index2) in navigation.links" :key="index2" :to="link.to">
                        <button class="flex items-center" @click="menuToggle()">
                          <DynamicSvg :width="30" class="text-primary" :component-name="link.logo" />
                          <div class="ml-6 text-left">
                            <p class="text-base font-medium text-gray-900">
                              {{ link.title }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ link.description }}
                            </p>
                          </div>
                        </button>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <nuxt-link v-else class="text-base font-medium text-gray-500 hover:text-gray-900" :to="navigation.to">
                {{ navigation.title }}
              </nuxt-link>
            </div>
          </div>
        </nav>
        <div class="hidden md:flex items-center">
          <div v-if="isConnected" class="flex items-center">
            <nuxt-link to="/profil">
              <!-- <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
              <div>
                <DynamicSvg width="30" class="text-primary" :component-name="'profile'" />
              </div>
            </nuxt-link>
          </div>
          <nuxt-link v-else to="/auth/connexion" class="font-medium text-gray-400 hover:text-gray-700">
            Se connecter
          </nuxt-link>
        </div>
      </div>
    </div>
    <div :class="{ hidden: !phoneMenu }" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div class="-mr-2">
              <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="phoneMenuToggle()">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div v-for="(navigation, index3) in navigations" :key="index3" class="mt-6" :to="navigation.to">
            <div v-if="navigation.links">
              <nuxt-link v-for="(link, index4) in navigation.links" :key="index4" :to="link.to" class="flex items-center mt-6">
                <DynamicSvg :width="20" class="text-primary" :component-name="link.logo" />
                <span class="ml-3 text-base font-medium text-gray-900">
                  {{ link.title }}
                </span>
              </nuxt-link>
            </div>
            <nuxt-link v-else :to="navigation.to" class="flex items-center">
              <DynamicSvg :width="20" class="text-primary" :component-name="navigation.logo" />
              <span class="ml-3 text-base font-medium text-gray-900">
                {{ navigation.title }}
              </span>
            </nuxt-link>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
          <div>
            <nuxt-link to="/auth/enregistrement" href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-80">
              S'inscrire
            </nuxt-link>
            <p class="mt-6 text-center text-base font-medium text-gray-500">
              <ButtonLogOut />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DynamicSvg from '~/components/Svg/DynamicSvg.vue'

@Component({
  components: {
    DynamicSvg
  }
})
export default class Sidebar extends Vue {
      cart:boolean = false
      menu: boolean = false;
      phoneMenu: boolean = false;
      navigations: Array<object> = [
        {
          title: 'Carte',
          links: [
            { title: 'Articles', description: 'Créer les articles que vous souhaitre vendre', logo: 'pizza', to: '/articles' },
            { title: 'Menus', description: 'Composez des menus depuis vos articles', logo: 'utensil', to: '/menus' }
          ]
        },
        { title: 'Commandes', logo: 'ticket', to: '/commandes' },
        { title: 'Statistiques', logo: 'stat', to: '/statistiques' }
      ]

      menuToggle () {
        this.menu = !this.menu
      }

      cartToggle () {
        this.cart = !this.cart
      }

      phoneMenuToggle () {
        this.phoneMenu = !this.phoneMenu
      }
}
</script>
