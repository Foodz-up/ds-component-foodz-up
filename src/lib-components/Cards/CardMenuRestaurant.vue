<template>
  <div class="flex flex-row justify-between w-full">
    <img :src="require(`assets/img/${img}`)" class="w-1/3 ml-3">
    <div class="w-2/3 grid">
      <div>
        <h3 class="font-bold">
          {{ name }}
        </h3>
        <p class="text-gray-500 text-sm">
          {{ description }}
        </p>
        <div class="flex-rows items-center">
          <p class="py-1 text-sm font-medium mr-2">
            {{ price }} €
          </p>
          <div>
            <p v-for="(article, index) in articles" :key="index" class="text-gray-500 text-sm">
              • {{ article.name }}
            </p>
          </div>
          <ButtonFoodzUp :title="'Modifier'" class="mt-4 bg-primary text-white hover:bg-primary-80" @buttonClicked="openModalRequested()" />
        </div>
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
export default class CardArticleRestaurant extends Vue {
    @Prop()
    id!: number

    @Prop({ default: 'Sans nom' })
    name!: string

    @Prop()
    description!: string

    @Prop({ default: 'LogoFoodzUp.png' })
    img!: string

    @Prop()
    articles!: Array<object>

    @Prop({ required: true })
    price!: number

    openModalRequested () {
      this.$emit('openModalRequested')
    }
}
</script>

<style scoped>

</style>
