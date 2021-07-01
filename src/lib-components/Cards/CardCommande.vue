<template>
  <div class="commande-card w-full flex items-center hover:bg-gray-50" @click="clicked">
    <img :src="require(`assets/img/${img}`)" class="h-32">
    <div class="p-3">
      <h1>{{ restaurant }} ({{ address.city }})</h1>
      <p class="font-thin text-sm">
        {{ distance }}
      </p>
      <p class="font-thin text-sm">
        {{ price }}€
      </p>
      <p class="font-thin text-sm">
        Livrer au {{ address.address }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop } from 'nuxt-property-decorator'
import { Component, Vue } from 'vue-property-decorator'

    @Component
export default class CardCommande extends Vue {
    @Prop({ required: true })
    id!: number

    @Prop({ default: 'Sans nom' })
    restaurant!: string

    @Prop()
    distance!: number

    @Prop()
    address!: object

    @Prop()
    price!: number

    @Prop({ default: 'burger_king.jpeg' })
    img!: string

    clicked () {
      this.$emit('clicked')
    }
}
</script>

<style scoped>
.commande-card {
  cursor: pointer;
}

</style>
