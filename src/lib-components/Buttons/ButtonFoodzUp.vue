<template>
  <button type="button" class="inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium hover:bg-gray-50" @click="buttonClicked()">
    {{ title }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default /*#__PURE__*/Vue.extend({
  name: 'ButtonFoodzUp',
  props: ['title'],
  methods: {
    buttonClicked () {
      this.$emit('buttonClicked')
    }
  },
})
</script>

<style scoped>
</style>
