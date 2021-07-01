<template>
  <div>
    <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <CardMenuRestaurant
        v-for="menu in menus"
        :id="menu.id"
        :key="menu.id"
        :description="menu.description"
        :name="menu.name"
        :price="menu.price"
        :type="menu.type"
        :articles="menu.articles"
        class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0"
        @openModalRequested="openModal(menu.id)"
      />
    </div>
    <Modal :class="{'hidden': !modal}" @remove="deleteMenu()" @save="saveMenu()" @cancel="closeModal()">
      <FormMenu
        :form-menu="formMenu"
        @addRandomArticleToMenu="addRandomArticleToMenu()"
        @addselectedArticleToMenu="addselectedArticleToMenu"
        @removeArticle="removeArticle"
      />
    </Modal>
  </div>
</template>