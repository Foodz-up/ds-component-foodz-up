<template>
  <div>
    <div v-for="(orderArrayByStatus, index) in splitedByStatus" :key="index" class="w-full px-4">
      <h2 class="text-3xl font-semibold mt-24 mb-8 text-yellow-pastel">
        {{ orderArrayByStatus[0].status }}
      </h2>
      <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <CardOrder
          v-for="order in orderArrayByStatus"
          :id="order.id"
          :key="order.id"
          :restaurant-name="order.restaurantName"
          :status="order.status"
          :price="order.price"
          :items-number="order.itemsNumber"
          :restaurant-id="order.restaurantID"
          class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0 w-auto"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardOrder from '~/components/Cards/CardOrder.vue'

@Component({
  components: { CardOrder }
})

export default class ListOrders extends Vue {
    // TODO: need type
    @Prop({ required: true })
    orders!: Array<
    { id: number, restaurantName: string, price: number, status: string, date: Date, itemsNumber: number, restaurantId: number }
    |
    { id: number, restaurantName: string, price: number, status: string, date: Date, itemsNumber: number, restaurantId: number }
    >

    get splitedByStatus () {
      const newObject = this.orders.reduce(function (obj, value) {
        const key = value.status
        // @ts-ignore
        if (obj[key] == null) { obj[key] = [] }

        // @ts-ignore
        obj[key].push(value)
        return obj
      }, {})

      return newObject
    }
}
</script>

<style scoped>

</style>
