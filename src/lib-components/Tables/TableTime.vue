<template>
  <div>
    <button class="text-lg text-gray-500 flex justify-center items-center" @click="toggleTimeTable()">
      <span class="mr-2">
        Voir les horraires
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-caret-down-fill"
        viewBox="0 0 16 16"
        :class="rotate180"
      >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    </button>
    <div v-if="showTimeTable">
      <div v-for="(day, key, indexDay) in timetable" :key="indexDay" class="flex">
        <span class="font-medium w-24">{{ key }} :</span>
        <p class="ml-2">
          {{ day.mStart }} - {{ day.mEnd }}
        </p>
        <span class="mx-4 text-lg font-bold text-gray-500">
          -
        </span>
        <p>{{ day.aStart }} - {{ day.aEnd }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class TableTime extends Vue {
    @Prop({ required: true })
    timetable!: {
        lundi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        mardi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        mercredi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        jeudi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        vendredi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        samedi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        dimanche: { mStart: string, mEnd: string, aStart: string, aEnd: string }
    }

    showTimeTable: boolean = false

    toggleTimeTable () {
      this.showTimeTable = !this.showTimeTable
    }

    get rotate180 () {
      return this.showTimeTable === true ? 'transform rotate-180' : ''
    }
}
</script>

<style scoped>

</style>
