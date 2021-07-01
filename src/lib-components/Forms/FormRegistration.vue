<template>
  <div class="p-5 bg-white rounded-xl sm:flex-none flex flex-col items-center">
    <h1 class="title text-center p-3 text-xl">
      Création de compte
    </h1>
    <form class="w-96" method="post" @submit.prevent="register">
      <InputFoodzUp
        v-model="data.firstName"
        :input-variable="'firstName'"
        :variable-description="'Prénom'"
        :icon="'profile'"
        :placeholder="'Marcel'"
        :width="20"
        :type="'text'"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="data.lastName"
        :input-variable="'lastName'"
        :variable-description="'Nom'"
        :icon="'profile'"
        :placeholder="'Dupont'"
        :width="20"
        :type="'text'"
        class="mb-3 text-sm"
      />
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
        :input-variable="'password.password'"
        :variable-description="'Mot de passe'"
        :icon="'lock'"
        :placeholder="'Ex: ••••••••'"
        :width="20"
        :type="'password'"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="data.confirmPassword"
        :input-variable="'password.confirmation'"
        :variable-description="'Confirmer mot de passe'"
        :icon="'lock'"
        :placeholder="'Ex: ••••••••'"
        :width="20"
        :type="'password'"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="data.cityCode"
        :input-variable="'cityCode'"
        :variable-description="'Code postal'"
        :icon="'number'"
        :placeholder="'62000'"
        :width="20"
        :type="'text'"
        class="mb-3 text-sm"
      />
      <InputFoodzUp
        v-model="data.address"
        class="mt-6"
        :value="data.address"
        :input-variable="'address'"
        :variable-description="'Adresse'"
        :icon="'number'"
        :placeholder="'Ex: 10 rue de la vacherie, 62000 Arras'"
      />

      <div class="text-center flex flex-col">
        <ButtonFoodzUp :title="'Valider'" type="submit" class="mt-4 bg-primary text-white hover:bg-primary-80 mb-3" />
        <nuxt-link class="text-gray-500 hover:underline w-full mt-2" to="/auth/oublie">
          Mot de passe oublié ?
        </nuxt-link>
        <nuxt-link class="text-gray-500 text-center hover:underline w-full mt-2" to="/auth/connexion">
          J'ai déjà un compte Foodz'Up
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      data: {
        email: 'test@gmail.com',
        password: 'test',
        confirmPassword: 'test',
        firstName: 'Thomas',
        lastName: 'CLEMENT',
        cityCode: 62000,
        address: '7 rue Diderot, 62000 Arras'
      }
    }
  },
}
</script>

<style scoped>

</style>
