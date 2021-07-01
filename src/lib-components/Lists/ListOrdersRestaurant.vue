<template>
  <div>
    <div v-for="(orderArrayByStatus, index) in splitedByStatus" :key="index" class="w-full px-4">
      <h2 class="text-3xl font-semibold mt-24 mb-8 text-yellow-pastel">
        {{ orderArrayByStatus[0].status }}
      </h2>
      <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <CardOrderRestaurant
          v-for="order in orderArrayByStatus"
          :id="order.id"
          :key="order.id"
          :restaurant="order.restaurant"
          :status="order.status"
          :price="order.price"
          :items-number="orderItemLength(order.items)"
          :items="order.items"
          class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0 w-auto"
        />
      </div>
    </div>
  </div>
</template>
