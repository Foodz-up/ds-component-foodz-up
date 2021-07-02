
<template>
  <div class="flex flex-col sm:flex-row-reverse justify-center items-center w-full">
    <img :src="require(`assets/img/${pictureName}`)" class="sm:max-h-96 w-auto sm:ml-3 mb-5 sm:mb-0">
    <div class="w-1/2 grid">
      <div>
        <h3 class="font-bold text-xl">
          {{ item.name }}
        </h3>
        <p class="text-gray-500 text-lg">
          {{ item.description }}
        </p>
        <div v-if="item.articles">
          <p class="text-lg font-bold text-yellow-pastel mt-5">
            Listes des menus
          </p>
          <ul>
            <li v-for="article in item.articles" :key="article.id" class="font-medium text-sm mb-3">
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
            {{ item.price }} €
          </p>
          <div v-if="item.tag" class="flex mt-auto">
            <span class="w-auto text-sm font-semibold text-primary bg-primary-30 px-2 py-1 rounded-full">
              {{ item.tag }}
            </span>
          </div>
        </div>
      </div>
      <!-- TODO: place to cart at the end -->
      <ButtonAddToCart v-if="addToCartButton" class="mt-2 self-end" :item-number="itemNumber" @removeItemNumber="decrementItemNumber()" @addItemNumber="incrementItemNumber()" />
      <ButtonFoodzUp v-if="moreThanOneAsQuantity" :title="'Ajouter au panier'" class="mt-2 w-44 bg-primary hover:bg-primary-80 text-white" @buttonClicked="addItemToCart()" />
      <ButtonFoodzUp v-if="removeFromCart" :title="'Supprimer du panier'" class="mt-2 w-52 bg-red-pastel hover:bg-red-pastel-80 text-white" @buttonClicked="removeItemFromCart()" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default /*#__PURE__*/Vue.extend({
  name:'CardItem',
  props:['restaurantId', 'addToCartButton', 'removeFromCart'],
  data(){
    return {
      itemNumber:0
    }
  },
  computed: {
    moreThanOneAsQuantity: () =>  {
      return this.itemNumber > 0
    }
  },
  methods:{
    decrementItemNumber () {
      if (this.itemNumber > 0) { this.itemNumber -= 1 }
    },
    incrementItemNumber () {
      this.itemNumber += 1
    },
    removeItemFromCart () {
      this.$emit('removeItemFromCart')
    }
  }
})
</script>

<style scoped>
.min-h-custom {
  min-height: 200px;
}

</style>
