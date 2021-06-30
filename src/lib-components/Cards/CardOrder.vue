<template>
  <div class="flex flex-row justify-between w-full">
    <img :src="require(`assets/img/${img}`)" class="object-cover w-1/3 mr-4">
    <div class="w-2/3">
      <h3 class="font-bold text-xl">
        {{ restaurantName }}
      </h3>
      <div class="flex">
        <p class="text-gray-500 text-lg">
          {{ itemsNumber }} élément(s)
        </p>
        <span class="mx-1 text-lg font-bold text-gray-500">
          •
        </span>
        <p class="text-lg text-gray-500 font-medium">
          {{ price }} €
        </p>
      </div>
      <div class="flex">
        <p class="text-lg text-gray-500">
          {{ dateFormat(date) }}
        </p>
        <span class="mx-1 text-lg font-bold text-gray-500">
          •
        </span>
        <p class="text-lg text-gray-500">
          {{ status }}
        </p>
      </div>
      <div class="flex mt-2">
        <nuxt-link v-if="status === 'Passée'" :to="`/restaurants/${restaurantId}`" class="text-lg py-1 px-2 rounded-full font-medium bg-gray-200">
          Voir le restaurant
        </nuxt-link>
        <nuxt-link v-else :to="`/commandes/${id}`" class="text-lg py-1 px-2 rounded-full font-medium text-primary bg-primary-15">
          Voir la commande
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CardOrder extends Vue {
    @Prop({ required: true })
    id!: number

    @Prop({ default: 'Sans nom' })
    restaurantName!: string

    @Prop({ default: Date.now() })
    date!: Date

    @Prop({ default: 'LogoFoodzUp.png' })
    img!: string

    @Prop({ required: true })
    price!: number

    @Prop({ required: true })
    itemsNumber!: number

    @Prop({ required: true })
    restaurantId!: number

    @Prop()
    status!: 'Passée' | 'En cours'

    dateFormat (dateString: number): string {
      const date = new Date(dateString)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      // @ts-ignore
      return date.toLocaleDateString('fr', options)
    }
}
</script>

<style scoped>

</style>
