<template>
  <nuxt-link :to="route" class="flex items-center py-7 border-b-2 border-gray-100 hover:bg-gray-100 sm:border-none">
    <DynamicSvg :component-name="icon" class="mr-4 text-gray-700" :width="35" />
    <div class="flex flex-col">
      <span class="font-medium leading-4">{{ title }}</span>
      <span class="text-primary text-xs">{{ description }}</span>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import DynamicSvg from '~/components/Svg/DynamicSvg.vue'

@Component({
  components: { DynamicSvg }
})
export default class CardNavigation extends Vue {
  @Prop()
  icon!: string

  @Prop()
  route!: string

  @Prop()
  title!: string

  @Prop()
  description!: string
}
</script>

<style scoped>

</style>
