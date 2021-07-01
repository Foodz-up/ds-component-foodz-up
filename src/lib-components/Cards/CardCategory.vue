<template>
  <div class="flex flex-row justify-between w-full relative" @click="chooseCategory()">
    <img :src="require(`assets/img/${img}`)" class="object-cover w-full">
    <div class="absolute w-full h-full bg-black opacity-40" />
    <div class="absolute w-full h-full text-white font-bold text-4xl flex justify-center items-center">
      <span>
        {{ name }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CardCategory extends Vue {
    @Prop({ required: true })
    name!: string

    @Prop({ default: 'nocategory.jpg' })
    img!: string

    @Prop({ required: true })
    topCategory!: boolean

    chooseCategory () {
      this.$emit('chooseCategory', this.name)
    }
}
</script>

<style scoped>

</style>
