<template>
  <div class="max-w-sm">
    <div v-if="statusIsPositif" class="bg-green-pastel p-3 text-white font-medium flex items-center">
      <div>
        <SvgCheck class="w-6 mr-4" />
      </div>

      <div>
        {{ message }}
      </div>
    </div>
    <div v-else class="bg-red-pastel p-3 text-white font-medium flex items-center">
      <div>
        <SvgAlert class="w-6 mr-4" />
      </div>
      <div>
        <span class="font-bold flex flex-col">
          Erreur :
          {{ status }}
        </span>
        <div>
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SvgCheck from '~/components/Svg/SvgCheck.vue'
import SvgInfo from '~/components/Svg/SvgInfo.vue'
import SvgAlert from '~/components/Svg/SvgAlert.vue'

@Component({
  components: { SvgCheck, SvgInfo, SvgAlert }
})
export default class CardNotification extends Vue {
  @Prop()
  message!: string

  @Prop()
  status!: number

  get statusIsPositif ():boolean {
    return (this.status >= 200 && this.status < 300)
  }
}
</script>

<style scoped>

</style>
