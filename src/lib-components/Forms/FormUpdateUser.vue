<template>
  <div>
    <form @submit.prevent="updateUser()">
      <InputFoodzUp
        v-model="user.firstName"
        :value="user.firstName"
        :input-variable="'firstName'"
        :variable-description="'Prénom'"
        :icon="'profile'"
        :placeholder="'Ex: Thomas'"
      />
      <InputFoodzUp
        v-model="user.lastName"
        class="mt-6"
        :value="user.lastName"
        :input-variable="'lastName'"
        :variable-description="'Nom'"
        :icon="'profile'"
        :placeholder="'Ex: CLEMENT'"
      />
      <InputFoodzUp
        v-model="user.email"
        class="mt-6"
        :value="user.email"
        :input-variable="'email'"
        :variable-description="'Email'"
        :icon="'envelope'"
        :placeholder="'Ex: thomas.clement@viacesi.fr'"
      />
      <InputFoodzUp
        v-model="user.cityCode"
        class="mt-6"
        :value="user.cityCode"
        :input-variable="'cityCode'"
        :variable-description="'Code Postal'"
        :icon="'number'"
        :placeholder="'Ex: 62000'"
      />
      <InputFoodzUp
        v-model="user.address"
        class="mt-6"
        :value="user.address"
        :input-variable="'address'"
        :variable-description="'Adresse'"
        :icon="'number'"
        :placeholder="'Ex: 10 rue de la vacherie, 62000 Arras'"
      />
      <InputFoodzUp
        v-model="password"
        :type="'password'"
        :value="password"
        :input-variable="'password'"
        :variable-description="'Mot de passe pour confirmer'"
        :icon="'lock'"
        :placeholder="'Ex: ••••••••'"
        :width="20"
        class="mt-6"
      />
      <div>
        <ButtonFoodzUp :title="'Enregistrer'" type="submit" class="mt-4 bg-primary text-white hover:bg-primary-80" />
        <nuxt-link class="text-gray-500 hover:underline w-full ml-2" to="/auth/oublie">
          Mot de passe oublié ?
        </nuxt-link>
      </div>
    </form>
    <div @click="toggleModal()">
      <ButtonSimpleText class="mt-6">
        Supprimer votre compte
      </ButtonSimpleText>
    </div>
    <Modal v-if="modalOpen" :save-button="false" @remove="deleteAccount()" @cancel="toggleModal()">
      <p class="font-medium text-xl">
        Etes vous sur de réaliser cette action ?
      </p>
      <span>Elle sera définitive, il n'y aura pas de retour en arrière.</span>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Modal from '~/components/Others/Modal.vue'

@Component({
  components: { Modal }
})
export default class FormUpdateUser extends Vue {
    password: string = ''

    modalOpen: boolean = false;

    toggleModal () {
      this.modalOpen = !this.modalOpen
    }
}
</script>

<style scoped>

</style>
