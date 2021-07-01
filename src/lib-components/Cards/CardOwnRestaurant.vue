<template>
  <div class="flex flex-col sm:flex-row justify-center item-centers max-w-2xl">
    <img :src="require(`assets/img/${picture}`)" class="object-contain w-f1/2 sm:w-1/3 sm:mr-4 mx-auto">
    <div class="w-full sm:w-2/3 flex flex-col items-center justify-center sm:justify-start">
      <h3 class="text-center sm:text-left font-bold text-xl">
        {{ name }}
      </h3>
      <p class="text-center sm:text-left text-gray-500 text-lg">
        {{ type }}
      </p>
      <p class="text-center sm:text-left text-lg text-gray-500 font-medium mb-4">
        {{ address }}
      </p>
      <div>
        <div v-for="(day, key, indexDay) in avaibilities" :key="indexDay" class="flex">
          <span class="font-medium w-24">{{ key }} :</span>
          <p class="ml-2">
            {{ day.mStart }} - {{ day.mEnd }}
          </p>
          <span class="mx-4 text-lg font-bold text-gray-500">
            -
          </span>
          <p>{{ day.aStart }} - {{ day.aEnd }}</p>
        </div>
      </div>
      <div class="flex mt-2">
        <ButtonFoodzUp :title="'Modifier'" class="mt-4 bg-primary text-white hover:bg-primary-80" @buttonClicked="openModalRequested()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ButtonFoodzUp from '~/components/Buttons/ButtonFoodzUp.vue'

@Component({
  components: { ButtonFoodzUp }
})
export default class CardOwnRestaurant extends Vue {
    @Prop({ required: true })
    id!: number

    @Prop({ default: 'Sans nom' })
    name!: string

    @Prop({ default: 'Restaurant' })
    type!: string

    @Prop({ default: [] })
    avaibilities!: []

    @Prop({ default: 'noshop.jpg' })
    picture!: string

    @Prop({ default: '' })
    address!: string

    openModalRequested () {
      this.$emit('openModalRequested')
    }
}
</script>

<style scoped>

</style>
