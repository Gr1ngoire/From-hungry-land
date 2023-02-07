<template>
  <button @click="handleClick" :class="'btn ' + bgColor">
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span>{{ text }}</span>
  </button>
</template>

<script setup lang="ts">

type ButtonProps = {
  text: string;
  bgColor: string;
  icon?: string[];
}

defineProps<ButtonProps>();

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};

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
  transition: .3s;
}

.btn:hover {
  cursor: pointer;
}

</style>
