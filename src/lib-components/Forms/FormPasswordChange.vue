<template>
  <form @submit.prevent="updatePassword()">
    <InputFoodzUp
      v-model="password.oldPassword"
      :type="`password`"
      :value="password.oldPassword"
      :input-variable="'oldPassword'"
      :variable-description="'Ancien mot de passe'"
      :icon="'lock'"
      :placeholder="'Ex: ••••••••'"
      :width="20"
    />
    <InputFoodzUp
      v-model="password.newPassword"
      :type="`password`"
      class="mt-6"
      :value="password.newPassword"
      :input-variable="'newPassword'"
      :variable-description="'Nouveau mot de passe'"
      :icon="'lock'"
      :placeholder="'Ex: ••••••••'"
      :width="20"
    />
    <InputFoodzUp
      v-model="password.confirmPassword"
      :type="`password`"
      class="mt-6"
      :value="password.confirmPassword"
      :input-variable="'confirmPassword'"
      :variable-description="'Confirmer le mot de passe'"
      :icon="'lock'"
      :placeholder="'Ex: ••••••••'"
      :width="20"
    />
    <ButtonFoodzUp
      :title="'Changer'"
      type="submit"
      class="mt-4 bg-primary text-white hover:bg-primary-80"
    />
    <nuxt-link class="text-gray-500 hover:underline w-full ml-2" to="/auth/oublie">
      Mot de passe oublié ?
    </nuxt-link>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
})
export default class FormPasswordChange extends Vue {
  @Prop({ required: true })
  password!: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
}
</script>

<style scoped>
</style>
