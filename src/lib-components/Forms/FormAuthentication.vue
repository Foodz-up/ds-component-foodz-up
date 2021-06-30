<template>
  <div class="p-5 bg-white sm:rounded-xl sm:flex-none flex flex-col items-center">
    <h1 class="title text-center p-3 text-xl">
      Connexion
    </h1>
    <form class="w-96" @submit.prevent="login">
      <InputFoodzUp
        v-model="data.email"
        :input-variable="'email'"
        :variable-description="'Adresse mail'"
        :icon="'envelope'"
        :placeholder="'Ex: prenom@domaine.fr'"
        :width="20"
        :type="'email'"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="data.password"
        :input-variable="'password'"
        :variable-description="'Mot de passe'"
        :icon="'lock'"
        :placeholder="'Ex: ••••••••'"
        :width="20"
        :type="'password'"
        class="mb-3 text-sm"
      />

      <div class="text-center flex flex-col">
        <ButtonFoodzUp :title="'Se connecter'" type="submit" class="mt-4 bg-primary text-white hover:bg-primary-80" />
        <nuxt-link class="text-gray-500 hover:underline w-full mt-2" to="/auth/oublie">
          Mot de passe oublié ?
        </nuxt-link>
        <nuxt-link class="text-gray-500 text-center hover:underline w-full mt-2" to="/auth/enregistrement">
          Je n'ai pas de compte Foodz'Up
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
import AuthStore from '~/store/auth'
import NotificationStore from '~/store/notification'
import RestaurantStore from '~/store/restaurant'

export default {
  data () {
    return {
      data: {
        email: 'test@gmail.com',
        password: 'test'
      }
    }
  },

  // mounted () {
  //   this.$auth.logout()
  // },

  methods: {
    async login () {
      try {
        const response = await this.$auth.loginWith('local', { data: this.data })
        await this.$auth.$storage.setUniversal('email', response.data.token.email)
        await this.$auth.setUserToken(response.data.token.accessToken.accessToken, response.data.token.refreshToken)
        AuthStore.setToken({ accessToken: response.data.token.accessToken.accessToken, refreshToken: response.data.token.refreshToken })
        AuthStore.setUser(this.$auth.user)

        NotificationStore.addNotification({
          message: response.data.message,
          status: response.status
        })

        RestaurantStore.getRestaurant()

        this.$router.push('/commandes')
      } catch (error) {
        NotificationStore.addNotification({
          message: error.response.data.message,
          status: error.response.status
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
