<template>
  <div class="flex flex-row-reverse justify-between w-full">
    <img :src="require(`assets/img/${img}`)" class="w-1/3 ml-3">
    <div class="w-2/3 grid">
      <div>
        <h3 class="font-bold">
          {{ name }}
        </h3>
        <p class="text-gray-500 text-sm">
          {{ description }}
        </p>
        <div class="flex items-center">
          <p class="py-1 text-sm font-medium mr-2">
            {{ price }} €
          </p>
          <div v-if="menuArticles" class="flex mt-auto">
            <nuxt-link :to="`/restaurants/${restaurantId}/menus/${id}`" class="w-auto text-sm font-semibold text-white bg-gray-200 px-2 py-1 rounded-full">
              Voir plus
            </nuxt-link>
          </div>
          <div v-if="tag" class="flex mt-auto">
            <span class="w-auto text-sm font-semibold text-primary bg-primary-30 px-2 py-1 rounded-full">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
      <!-- TODO: place to cart at the end -->
      <ButtonAddToCart v-if="addToCartButton" class="mt-2 self-end" :item-number="itemNumber" @removeItemNumber="removeItemNumber()" @addItemNumber="addItemNumber()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ButtonAddToCart from '~/components/Buttons/ButtonAddToCart.vue'

@Component({
  components: { ButtonAddToCart }
})
export default class CardArticle extends Vue {
    @Prop()
    id!: number

    @Prop({ default: 'Sans nom' })
    name!: string

    @Prop()
    description!: string

    @Prop({ default: 'LogoFoodzUp.png' })
    img!: string

    @Prop({ required: true })
    price!: number

    @Prop()
    menuArticles!: Array<object>

    @Prop()
    tag!: string

    @Prop({ required: true })
    restaurantId!: number

    @Prop({ default: true })
    addToCartButton!: boolean

    itemNumber: number = 0

    removeItemNumber () {
      if (this.itemNumber > 0) { this.itemNumber -= 1 }
      // TODO: remove article to cart
    }

    addItemNumber () {
      this.itemNumber += 1
      // TODO: add article to cart
    }
}
</script>

<style scoped>

</style>
