<template>
  <div v-if="componentName">
    <component :is="componentName" :width="width" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    profile: () => import('~/components/Svg/SvgProfile.vue'),
    card: () => import('~/components/Svg/SvgCard.vue'),
    covid: () => import('~/components/Svg/SvgCovid.vue'),
    deliver: () => import('~/components/Svg/SvgDeliver.vue'),
    favourite: () => import('~/components/Svg/SvgFavourite.vue'),
    help: () => import('~/components/Svg/SvgHelp.vue'),
    promote: () => import('~/components/Svg/SvgPromote.vue'),
    setting: () => import('~/components/Svg/SvgSetting.vue'),
    lock: () => import('~/components/Svg/SvgLock.vue'),
    envelope: () => import('~/components/Svg/SvgEnvelope.vue'),
    number: () => import('~/components/Svg/SvgNumber.vue'),
    loop: () => import('~/components/Svg/SvgLoop.vue'),
    share: () => import('~/components/Svg/SvgShare.vue'),
    copy: () => import('~/components/Svg/SvgCopy.vue'),
    'master-card': () => import('~/components/Svg/SvgMasterCard.vue'),
    sponsor: () => import('~/components/Svg/SvgSponsor.vue'),
    pizza: () => import('~/components/Svg/SvgPizza.vue'),
    ticket: () => import('~/components/Svg/SvgTicket.vue'),
    stat: () => import('~/components/Svg/SvgStat.vue'),
    utensil: () => import('~/components/Svg/SvgUtensil.vue'),
    biking: () => import('~/components/Svg/SvgBiking.vue'),
    calendar: () => import('~/components/Svg/SvgCalendar.vue'),
    search: () => import('~/components/Svg/SvgSearch.vue'),
    store: () => import('~/components/Svg/SvgStore.vue'),
    trash: () => import('~/components/Svg/SvgTrash.vue')
  }
})
export default class DynamicSvg extends Vue {
  @Prop({ required: true })
  componentName!: string

  @Prop({ default: 20 })
  width!: string
}

</script>
