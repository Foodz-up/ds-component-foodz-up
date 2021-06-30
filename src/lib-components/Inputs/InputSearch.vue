<template>
  <!-- <input type="text" placeholder="Restaurants, cuisines et autres..." class="w-full text-gray-800 placeholder-gray-600 px-3 py-1 rounded-xl bg-gray-300 focus:ring-2 focus:ring-primary"> -->
  <form :method="method" @submit.prevent="makeSearch(searchValue)">
    <div class="relative text-gray-800">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-7 h-7"
          ><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </span>
      <input v-model="searchValue" type="text" class="text-2xl w-full placeholder-gray-500 py-2 font-medium text-gray-800 bg-gray-300 rounded-full pl-12" :placeholder="placeholder">
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class InputSearch extends Vue {
  @Prop({ default: 'GET' })
  method!: string

  @Prop({})
  param!: string

  @Prop({ default: 'Recherche...' })
  placeholder!: string

  searchValue:string = ''

  makeSearch (searchValue:string) {
    this.$emit('searchChange', searchValue)
  }
}
</script>

<style scoped>

</style>
