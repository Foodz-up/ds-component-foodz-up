<template>
  <button type="button" class="inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium hover:bg-gray-50" @click="buttonClicked()">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class ButtonFoodzUp extends Vue {
    @Prop({ required: true })
    title!: string

    buttonClicked () {
      this.$emit('buttonClicked')
    }
}
</script>

<style scoped>
</style>
