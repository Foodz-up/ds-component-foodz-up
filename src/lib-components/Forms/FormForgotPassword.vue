<template>
  <div class="p-5 bg-white rounded-xl sm:flex-none flex flex-col items-center">
    <h1 class="title text-center p-3 text-xl">
      Oubli de mot de passe
    </h1>
    <form class="w-96" @submit.prevent="sendLinkByEmail()">
      <InputFoodzUp
        v-model="email"
        :input-variable="'email'"
        :variable-description="'Adresse mail'"
        :icon="'envelope'"
        :placeholder="'Ex: prenom@domaine.fr'"
        :width="20"
        :type="'email'"
        class="mb-3 text-sm"
      />
      <div class="text-center">
        <ButtonFoodzUp :title="'Envoyer'" type="submit" class="mt-4 bg-primary text-white hover:bg-primary-80" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class FormAuthentication extends Vue {
    email:string = '';

    // TODO: send email with code thanks to gmail
    sendLinkByEmail () {}
}
</script>

<style scoped>

</style>
