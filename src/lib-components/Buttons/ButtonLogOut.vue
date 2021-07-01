<template>
  <button class="w-auto cursor-pointer text-red-pastel hover:underline font-medium" @click="logout()">
    Se déconnecter
  </button>
</template>

<script>
import AuthStore from '~/store/auth'
import RestaurantStore from '~/store/restaurant'
import ArticleStore from '~/store/article'
import MenuStore from '~/store/menu'
import NotificationStore from '~/store/notification'

export default {
  methods: {
    async logout () {
      await this.$auth.logout()
      AuthStore.logout()
      AuthStore.setToken(null)
      AuthStore.setUser(null)
      RestaurantStore.setRestaurant(null)
      ArticleStore.setArticles(null)
      MenuStore.setMenus(null)
      this.$router.push('/auth/connexion')
      NotificationStore.addNotification({
        message: 'Vous êtes maintenant déconnecté',
        status: 200
      })
    }
  }
}
</script>

<style scoped>

</style>
