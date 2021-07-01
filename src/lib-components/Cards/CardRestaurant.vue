<template>
  <nuxt-link :to="`/restaurants/${id}`" class="w-full">
    <img :src="require(`assets/img/${img}`)" class="w-full">
    <div class="flex justify-between mt-2">
      <h2 class="text-left font-bold">
        {{ name }}
      </h2>
      <div class="text-xs rounded-full bg-gray-200 flex items-center justify-center p-1">
        <span>
          {{ note }}
        </span>
      </div>
    </div>
    <div class="flex justify-between">
      <p class="text-left text-sm w-full text-gray-500">
        Livraison Gratuite
      </p>
      <p class="text-right text-sm w-full text-primary font-medium">
        {{ waiting }}
      </p>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CardRestaurant extends Vue {
    @Prop({ required: true })
    id!: number

    @Prop({ default: 'Sans nom' })
    name!: string

    @Prop({ default: 'noshop.jpg' })
    img!: string

    @Prop({ required: true })
    waiting!: string

    @Prop({ default: 2.3 })
    note!: number
}
</script>

<style scoped>

</style>
