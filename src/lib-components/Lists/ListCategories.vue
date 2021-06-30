<template>
  <div>
    <div v-for="(categoryArrayByStatus, index) in splitedByStatus" :key="index" class="w-full px-4">
      <h2 class="text-3xl font-semibold mt-24 mb-4 text-yellow-pastel">
        {{ isTopCategory(categoryArrayByStatus[0].topCategory) }}
      </h2>
      <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <CardCategory
          v-for="category in categoryArrayByStatus"
          :key="category.id"
          :name="category.name"
          :top-category="category.topCategory"
          class="w-auto cursor-pointer"
          @chooseCategory="chooseCategory(category.name)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardCategory from '~/components/Cards/CardCategory.vue'

@Component({
  components: { CardCategory }
})

export default class ListCategories extends Vue {
    // TODO: need type
    @Prop({ required: true })
    categories!: Array<{ name: string, topCategory: boolean }>

    get splitedByStatus () {
      const newObject = this.categories.reduce(function (obj, value) {
        const key = value.topCategory
        // @ts-ignore
        if (obj[key] == null) { obj[key] = [] }

        // @ts-ignore
        obj[key].push(value)
        return obj
      }, {})

      return newObject
    }

    isTopCategory (top: boolean) {
      return top === true ? 'Top catégories' : 'Autres catégories'
    }

    chooseCategory (event: string) {
      this.$emit('chooseCategory', event)
    }
}
</script>

<style scoped>

</style>
