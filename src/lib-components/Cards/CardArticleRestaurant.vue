<template>
  <div class="flex flex-row justify-between w-full">
    <img :src="require(`assets/img/${img}`)" class="w-1/3 mr-3 object-cover">
    <div class="w-2/3 grid">
      <div>
        <h3 class="font-bold">
          {{ name }}
        </h3>
        <p class="text-gray-500 text-sm">
          {{ description }}
        </p>
        <div class="flex-row flex items-center">
          <p class="py-1 text-sm font-medium mr-2">
            {{ price }} €
          </p>
          <span v-if="tag" class="w-auto text-sm font-semibold text-primary bg-primary-15 px-2 py-1 rounded-full">
            {{ tag }}
          </span>
        </div>
      </div>
      {{ type }}
      <ButtonFoodzUp :title="'Modifier'" class="w-24 mt-4 bg-primary text-white hover:bg-primary-80 self-end" @buttonClicked="askForUpdateCard()" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ButtonFoodzUp from '~/components/Buttons/ButtonFoodzUp.vue'

@Component({
  components: { ButtonFoodzUp }
})
export default class CardArticleRestaurant extends Vue {
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

    @Prop()
    type!: string

    @Prop({ required: true })
    restaurantId!: number

    @Prop({ default: true })
    addToCartButton!: boolean

    itemNumber: number = 0

    removeItemNumber () {
      if (this.itemNumber > 0) { this.itemNumber -= 1 }
      // TODO: remove article to cart
    }

    askForUpdateCard () {
      this.$emit('needUpdateCard')
    }
}
</script>

<style scoped>

</style>
