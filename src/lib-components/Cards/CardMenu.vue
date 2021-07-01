<template>
  <div class="flex flex-col sm:flex-row-reverse justify-center items-center w-full">
    <img :src="require(`assets/img/${img}`)" class="sm:max-h-96 w-auto sm:ml-3 mb-5 sm:mb-0">
    <div class="w-1/2 grid">
      <div>
        <h3 class="font-bold text-xl">
          {{ name }}
        </h3>
        <p class="text-gray-500 text-lg">
          {{ description }}
        </p>
        <div>
          <p class="text-lg font-bold text-yellow-pastel mt-5">
            Listes des articles
          </p>
          <ul>
            <li v-for="article in menuArticles" :key="article.id" class="font-medium text-sm mb-3">
              <p>
                {{ article.type }}
                <span class="font-bold">•</span>
                {{ article.name }}
              </p>
              <p class="text-gray-500 font-normal">
                {{ article.description }}
              </p>
            </li>
          </ul>
        </div>
        <div class="flex items-center">
          <p class="py-1 text-lg font-bold text-primary mr-2">
            {{ price }} €
          </p>
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
export default class CardMenu extends Vue {
    @Prop()
    id!: number

    @Prop({ default: 'Sans nom' })
    name!: string

    @Prop()
    description!: string

    @Prop({ default: 'noarticle.jpg' })
    img!: string

    @Prop({ required: true })
    price!: number

    @Prop()
    menuArticles!: Array<object>

    @Prop()
    tag!: string

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
