<script setup lang="ts">


const emit = defineEmits<{
  (e: "update:modelValue", checked: boolean): void
}>()

const props = defineProps<{
  modelValue: boolean
  id:string
}>()


const toggle = (e: Event) => {
  emit("update:modelValue", !props.modelValue)
}


</script>

<template>
  <input
      type="checkbox"
      :id="props.id"
      class="checkbox"
      :checked=props.modelValue
      @change="toggle"
  >
</template>


<style scoped>
.checkbox  {
  width: 25px;
  height: 25px;
  color: white;
  accent-color: #03852c;
}
</style>