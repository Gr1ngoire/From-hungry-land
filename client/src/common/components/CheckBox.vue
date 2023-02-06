<script setup lang="ts">
import {ref} from "vue";

const emit = defineEmits<{
  (e: "update:modelValue", checked: boolean): void
}>()

const props = defineProps<{
  modelValue: boolean
  id:string
}>()

const isSelected = ref<boolean>(props.modelValue)
const toggle = (e: Event) => {
  emit("update:modelValue", !isSelected.value)
  isSelected.value = !isSelected.value
}


</script>

<template>
  <input
      type="checkbox"
      :id="props.id"
      class="checkbox"
      :value="isSelected "
      @change="toggle"
  >
</template>


<style scoped>
.checkbox {
  width: 30px;
  height: 30px;
  color: #1cba16;
}
</style>