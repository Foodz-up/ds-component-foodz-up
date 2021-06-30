<template>
  <form>
    <InputFoodzUp
      v-model="formCard.cardNumber"
      :value="formCard.cardNumber"
      :variable-description="'Numéro de la carte'"
      :icon="'master-card'"
      :placeholder="'•••• •••• •••• ••••'"
    />
    <div class="flex mt-4">
      <InputFoodzUp
        v-model="formCard.expDate"
        :value="formCard.expDate"
        :variable-description="'Date d\'expériation'"
        :input-variable="'expDate'"
        class=" mr-2"
        :placeholder="'Ex: 09/08'"
      />
      <InputFoodzUp
        v-model="formCard.cvv"
        :value="formCard.cvv"
        :variable-description="'CVV'"
        :input-variable="'cvv'"
        class="ml-2"
        :placeholder="'Ex: 123'"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import InputFoodzUp from '~/components/Inputs/InputFoodzUp.vue'

@Component({
  components: { InputFoodzUp }
})
export default class FormCard extends Vue {
    @Prop({ required: true })
    formCard!: {cardNumber: string, expDate: string, cvv: string}
}
</script>

<style scoped>

</style>
