<template>
  <form>
    <InputFoodzUp
      v-model="formArticle.name"
      :value="formArticle.name"
      :variable-description="'Nom de l\'article'"
      :placeholder="'Ex: Sandwich'"
    />
    <InputSelect
      v-model="formArticle.type"
      :value="formArticle.type"
      :variable-description="'Type d\'article'"
      :input-variable="'typearticle'"
      class=" mt-2"
      :option-list="optionList"
    />
    <InputFoodzUp
      v-model="formArticle.description"
      :value="formArticle.description"
      :variable-description="'Description'"
      :input-variable="'description'"
      class="mt-2"
      :placeholder="'Ex: Bon sandwich bien fourni'"
    />
    <InputFoodzUp
      v-model="formArticle.price"
      :value="formArticle.price"
      :variable-description="'Prix'"
      :input-variable="'price'"
      class="mt-2"
      :placeholder="'Ex: 5'"
    />
    <InputFoodzUp
      v-model="formArticle.tag"
      :value="formArticle.tags"
      :variable-description="'Tag (optionel)'"
      :input-variable="'tag'"
      class="mt-2"
      :placeholder="'Ex: Nouveau'"
    />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import InputFoodzUp from '~/components/Inputs/InputFoodzUp.vue'
import InputSelect from '~/components/Inputs/InputSelect.vue'

@Component({
  components: { InputFoodzUp, InputSelect }
})
export default class FormArticle extends Vue {
    optionList: Array<object> = [
      { id: 1, name: 'Entrée' },
      { id: 2, name: 'Plat' },
      { id: 3, name: 'Déssert' },
      { id: 4, name: 'Boisson' }
    ]
}
</script>

<style scoped>

</style>
