<template>
  <form class="flex flex-col">
    <InputFoodzUp
      v-model="formMenu.name"
      :value="formMenu.name"
      :variable-description="'Nom du menu'"
      :placeholder="'Ex: Sandwich'"
    />
    <InputFoodzUp
      v-model="formMenu.description"
      :value="formMenu.description"
      :variable-description="'Description'"
      :input-variable="'address'"
      class="mt-2"
      :placeholder="'Ex: Ceci est un menu'"
    />
    <InputFoodzUp
      v-model="formMenu.price"
      :value="formMenu.price"
      :variable-description="'Prix'"
      :input-variable="'address'"
      class="mt-2"
      :placeholder="'Ex: 5'"
    />
    <span v-if="!isformArticlesEmpty" class="mt-2 text-lg font-medium pl-2">Articles</span>
    <div v-for="(article, index) in formMenu.articles" :key="index" class="flex items-end">
      <InputSelectMenu
        :key="article.id"
        :value="article.id"
        :variable-description="'Article ajouté'"
        :input-variable="`type${index}`"
        class="w-full mt-2"
        :index="index"
        :option-list="storeArticles"
        @articleUpdate="articleUpdate"
      />
      <button class="ml-3 mb-2" @click="removeArticle(index)">
        <SvgTrash width="20" class="text-red-pastel cursor-pointer" />
      </button>
    </div>
    <ButtonFoodzUp class="mx-auto w-44 mt-4 bg-green-pastel text-white hover:bg-green-pastel-80" :title="'Ajouter un article'" @buttonClicked="addRandomArticleToMenu()" />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SvgTrash from '~/components/Svg/SvgTrash.vue'
import InputSelectMenu from '~/components/Inputs/InputSelectMenu.vue'

// TODO: ADD ARTICLE TO MENU

@Component({
  components: { SvgTrash, InputSelectMenu }
})
export default class FormArticle extends Vue {
    addRandomArticleToMenu () {
      this.$emit('addRandomArticleToMenu')
    }

    articleUpdate (e: { articleId: number, index: number }) {
      this.$emit('addselectedArticleToMenu', e)
    }

    removeArticle (index: number) {
      this.$emit('removeArticle', index)
    }
}
</script>

<style scoped>

</style>
