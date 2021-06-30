<template>
  <div>
    <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <CardOwnRestaurant
        v-for="restaurant in restaurants"
        :id="restaurant.id"
        :key="restaurant.id"
        :name="restaurant.name"
        :type="restaurant.type"
        :avaibilities="restaurant.avaibilities"
        :picture="restaurant.picture"
        :address="restaurant.address"
        class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0 w-auto"
      />
    </div>
  </div>
</template>