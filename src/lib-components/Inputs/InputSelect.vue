<template>
  <div>
    <label v-if="variableDescription" class="pl-2" :for="inputVariable">{{ variableDescription }}</label>
    <div class="relative text-gray-800">
      <span v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1">
          <DynamicSvg :component-name="icon" class="mr-4 text-gray-700" :width="width" />
        </button>
      </span>
      <select
        :id="variableDescription"
        :name="variableDescription"
        type="text"
        :class="{'pl-16': icon}"
        class="pl-5 text-lg w-full placeholder-gray-500 py-2 font-medium text-gray-800 bg-gray-200 rounded-full"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
        <option v-for="(option, index) in optionList" :key="index" :value="option.name">
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import DynamicSvg from '~/components/Svg/DynamicSvg.vue'

@Component({
  components: { DynamicSvg }
})
export default class InputSelect extends Vue {
  @Prop()
  optionList!: Array<{ name: string }>

  @Prop()
  icon!: string

  @Prop({ default: '25' })
  width!: string

  @Prop()
  variableDescription!: string

  @Prop()
  inputVariable!: string

  @Prop()
  value!: string

  changeValue (option: string) {
    this.value = option
    console.log(this.value)
  }

  test (e:string) {
    console.log(e)
  }
}
</script>

<style scoped>

</style>
