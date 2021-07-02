<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { DsComponentFoodzUpSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  DsComponentFoodzUpSample,
  // }
});
</script>

<template>
  <div id="app">
    <ds-component-foodz-up-sample />
    <ds-component-foodz-up-sample-2 />
    <test-d-d-sample />
    <ButtonAddToCart />
  </div>
</template>
