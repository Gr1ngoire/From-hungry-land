<template>
  <button :class="'btn ' + bgColor">
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span>{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  icon: {
    type: Array,
    required: false,
  },
});
</script>

<style scoped>
.btn {
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  border-radius: 20px;
  border: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: white;
}
</style>
