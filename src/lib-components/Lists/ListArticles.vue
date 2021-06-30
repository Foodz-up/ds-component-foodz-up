<template>
  <div>
    <div v-for="(articleArrayByType, index) in splitedByType" :key="index" class="w-full">
      <h2 class="text-3xl font-semibold mt-24 mb-8 text-yellow-pastel">
        {{ articleArrayByType[0].type }}
      </h2>
      <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <CardArticleRestaurant
          v-for="article in articleArrayByType"
          :id="article._id"
          :key="article._id"
          :description="article.description"
          :name="article.name"
          :price="article.price"
          :tag="article.tag"
          :type="article.type"
          :menu-articles="article.menuArticles"
          :restaurant-id="restaurantId"
          class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0"
          @needUpdateCard="openModal(article._id)"
        />
      </div>
      <Modal :class="{'hidden': !modal}" @save="editArticle()" @remove="deleteArticle()" @cancel="closeModal()">
        <FormArticle :form-article="formArticle" />
      </Modal>
    </div>
  </div>
</template>