<template>
  <div class="fixed z-40 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="cancel()" />

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <slot />
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <ButtonFoodzUp v-if="saveButton" :title="'Sauvegarder'" type="button" class="w-full bg-primary text-white hover:bg-primary-80 sm:ml-3 sm:w-auto sm:text-sm" @buttonClicked="save()" />
          <ButtonFoodzUp v-if="cancelButton" :title="'Retour'" type="button" class="mt-3 w-full text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto" @buttonClicked="cancel()" />
          <ButtonFoodzUp v-if="deleteButton" :title="'Supprimer'" type="button" class="mr-auto mt-3 w-full bg-red-pastel text-white hover:bg-red-pastel-80 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @buttonClicked="remove()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Modal extends Vue {
  @Prop({ default: true })
  saveButton!: boolean

  @Prop({ default: true })
  deleteButton!: boolean

  @Prop({ default: true })
  cancelButton!: boolean

  save () {
    this.$emit('save')
  }

  cancel () {
    this.$emit('cancel')
  }

  remove () {
    this.$emit('remove')
  }
}
</script>

<style scoped>
</style>
