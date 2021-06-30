<template>
  <form>
    <InputFoodzUp
      v-model="formRestaurant.name"
      :value="formRestaurant.name"
      :variable-description="'Nom du restaurant'"
      :placeholder="'Ex: Au burger qui rit'"
    />
    <InputSelect
      v-model="formRestaurant.type"
      :value="formRestaurant.type"
      :variable-description="'Type de restaurant'"
      :input-variable="'type'"
      class=" mt-2"
      :option-list="optionList"
    />
    <InputFoodzUp
      v-model="formRestaurant.address"
      :value="formRestaurant.address"
      :variable-description="'adresse du restaurant'"
      :input-variable="'address'"
      class="mt-2"
      :placeholder="'Ex: 1 rue du 1 janvier 1111'"
    />
    <!-- BUG: when click to open the page reload -->
    <button class="pl-2 mt-2 flex justify-center items-center" @click="toggleTimeTable()">
      <span class="mr-2">
        Modifier les horraires
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
      <div class="flex flex-col mt-2">
        <span class="text-lg font-medium">Lundi</span>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span>Matin</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.lundi.mStart"
                :value="formRestaurant.timetable.lundi.mStart"
                :input-variable="'lundimstart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.lundi.mEnd"
                :value="formRestaurant.timetable.lundi.mEnd"
                :input-variable="'lundimend'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <span>Après-midi</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.lundi.aStart"
                :value="formRestaurant.timetable.lundi.aStart"
                :input-variable="'lundiastart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.lundi.aEnd"
                :value="formRestaurant.timetable.lundi.aEnd"
                :input-variable="'lundiaEnd'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <span class="text-lg font-medium">Mardi</span>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span>Matin</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.mardi.mStart"
                :value="formRestaurant.timetable.mardi.mStart"
                :input-variable="'mardimstart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.mardi.mEnd"
                :value="formRestaurant.timetable.mardi.mEnd"
                :input-variable="'mardimend'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <span>Après-midi</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.mardi.aStart"
                :value="formRestaurant.timetable.mardi.aStart"
                :input-variable="'mardiastart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.mardi.aEnd"
                :value="formRestaurant.timetable.mardi.aEnd"
                :input-variable="'mardiaEnd'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <span class="text-lg font-medium">Mercredi</span>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span>Matin</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.mercredi.mStart"
                :value="formRestaurant.timetable.mercredi.mStart"
                :input-variable="'mercredimstart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.mercredi.mEnd"
                :value="formRestaurant.timetable.mercredi.mEnd"
                :input-variable="'mercredimend'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <span>Après-midi</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.mercredi.aStart"
                :value="formRestaurant.timetable.mercredi.aStart"
                :input-variable="'mercrediastart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.mercredi.aEnd"
                :value="formRestaurant.timetable.mercredi.aEnd"
                :input-variable="'mercrediaEnd'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <span class="text-lg font-medium">Jeudi</span>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span>Matin</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.jeudi.mStart"
                :value="formRestaurant.timetable.jeudi.mStart"
                :input-variable="'jeudimstart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.jeudi.mEnd"
                :value="formRestaurant.timetable.jeudi.mEnd"
                :input-variable="'jeudimend'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <span>Après-midi</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.jeudi.aStart"
                :value="formRestaurant.timetable.jeudi.aStart"
                :input-variable="'jeudiastart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.jeudi.aEnd"
                :value="formRestaurant.timetable.jeudi.aEnd"
                :input-variable="'jeudiaEnd'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <span class="text-lg font-medium">Vendredi</span>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span>Matin</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.vendredi.mStart"
                :value="formRestaurant.timetable.vendredi.mStart"
                :input-variable="'vendredimstart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.vendredi.mEnd"
                :value="formRestaurant.timetable.vendredi.mEnd"
                :input-variable="'vendredimend'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <span>Après-midi</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.vendredi.aStart"
                :value="formRestaurant.timetable.vendredi.aStart"
                :input-variable="'vendrediastart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.vendredi.aEnd"
                :value="formRestaurant.timetable.vendredi.aEnd"
                :input-variable="'vendrediaEnd'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <span class="text-lg font-medium">Samedi</span>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span>Matin</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.samedi.mStart"
                :value="formRestaurant.timetable.samedi.mStart"
                :input-variable="'samedimstart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.samedi.mEnd"
                :value="formRestaurant.timetable.samedi.mEnd"
                :input-variable="'samedimend'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <span>Après-midi</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.samedi.aStart"
                :value="formRestaurant.timetable.samedi.aStart"
                :input-variable="'samediastart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.samedi.aEnd"
                :value="formRestaurant.timetable.samedi.aEnd"
                :input-variable="'samediaEnd'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <span class="text-lg font-medium">Dimanche</span>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span>Matin</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.dimanche.mStart"
                :value="formRestaurant.timetable.dimanche.mStart"
                :input-variable="'dimanchemstart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.dimanche.mEnd"
                :value="formRestaurant.timetable.dimanche.mEnd"
                :input-variable="'dimanchemend'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <span>Après-midi</span>
            <div class="flex">
              <InputFoodzUp
                v-model="formRestaurant.timetable.dimanche.aStart"
                :value="formRestaurant.timetable.dimanche.aStart"
                :input-variable="'dimancheastart'"
                class="mr-2"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
              <InputFoodzUp
                v-model="formRestaurant.timetable.dimanche.aEnd"
                :value="formRestaurant.timetable.dimanche.aEnd"
                :input-variable="'dimancheaEnd'"
                :placeholder="'Ex: 8h'"
                :type="'time'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: { }
})
export default class FormRestaurant extends Vue {
    // TODO: need type
    optionList: Array<object> = [
      { name: 'Fastfood' },
      { name: 'Gastronomique' }
    ]

    // TODO: fix the reload bug and set the variable to false
    showTimeTable: boolean = true

    get rotate180 () {
      return this.showTimeTable === true ? 'transform rotate-180' : ''
    }

    toggleTimeTable () {
      this.showTimeTable = !this.showTimeTable
    }
}
</script>

<style scoped>

</style>
