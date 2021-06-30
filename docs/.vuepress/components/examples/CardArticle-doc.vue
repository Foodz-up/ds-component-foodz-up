<template>
  <div>
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
</template>