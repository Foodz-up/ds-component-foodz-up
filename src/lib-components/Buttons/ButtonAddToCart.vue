<template>
  <div class="flex items-stretch justify-center bg-red-pastel-80 w-20">
    <div class="flex btn-custom cursor-pointer" @click="removeItemNumber()">
      <svg class="mx-2 fill-current text-white w-2" viewBox="0 0 448 512">
        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
      </svg>
    </div>

    <div class="bg-white my-1 border text-center w-8" type="text">
      {{ itemNumber }}
    </div>

    <div class="flex btn-custom cursor-pointer" @click="addItemNumber()">
      <svg class="mx-2 fill-current text-white w-2" viewBox="0 0 448 512">
        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ButtonAddToCart extends Vue {
    @Prop({ required: true })
    itemNumber!: number

    addItemNumber () {
      this.$emit('addItemNumber')
    }

    removeItemNumber () {
      this.$emit('removeItemNumber')
    }
}
</script>

<style scoped>
.btn-custom:active {
    @apply bg-red-pastel;
}
</style>
