<template>
  <div class="p-5 bg-white rounded-xl sm:flex-none flex flex-col items-center">
    <form class="w-96">
      <InputFoodzUp
        v-model="card.cardNumber"
        :value="card.cardNumber"
        :variable-description="'Numéro de la carte'"
        :icon="'master-card'"
        :placeholder="'•••• •••• •••• ••••'"
      />
      <div class="flex mt-4">
        <InputFoodzUp
          v-model="card.expDate"
          :value="card.expDate"
          :variable-description="'Date d\'expériation'"
          :input-variable="'expDate'"
          class=" mr-2"
          :placeholder="'Ex: 09/08'"
        />
        <InputFoodzUp
          v-model="card.cvv"
          :value="card.cvv"
          :variable-description="'CVV'"
          :input-variable="'cvv'"
          class="ml-2"
          :placeholder="'Ex: 123'"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
})
export default class FormPasswordChange extends Vue {
  @Prop({ required: true })
  card!: {
    cardNumber: string;
    expDate: string;
    cvv: string;
  }
}
</script>

<style scoped>
</style>
