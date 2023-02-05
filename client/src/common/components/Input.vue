<script lang="ts" setup>
import {computed} from 'vue'
import './styles.css';

type InputType = "text" | "number" | "password" | "email";

type Props = {
  type: InputType;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  nameToDisplay?: string;
  max?: number;
  min?: number;
  onInput: (event: Event) => void;
};

const props = defineProps<Props>();

const FIRST_NAME_CHARACTER_INDEX = 0;
const SECOND_NAME_CHARACTER_INDEX = 1;
const firstLetterUppercased = computed(() => {
  return (
      props.nameToDisplay ??
      `${props.name
          .charAt(FIRST_NAME_CHARACTER_INDEX)
          .toUpperCase()}${props.name.slice(SECOND_NAME_CHARACTER_INDEX)}`
  );
});
</script>

<template>
  <div class="inputWrapper">
    <label class="inputLabel">{{ firstLetterUppercased }}</label>
    <input
        class="input"
        :placeholder="placeholder"
        :type="type"
        :name="name"
        :value="value"
        :max="max"
        :min="min"
        @input="onInput"
    />
    <span class="errorSpan">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.inputWrapper {
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.input {
  width: 100%;
  height: 30px;
  margin: 3px 0;
  border: solid 2px transparent;
  border-radius: 10px;
}

input:focus {
  transition: 25ms;
  border: solid 2px var(--header-color);
}

.inputLabel {
  color: var(--header-color);
}

.errorSpan {
  padding: 2px;
  width: fit-content;
  background: var(--header-color);
  color: #FFFFFF;
  border-radius: 5px;
}

.errorSpan:empty {
  padding: 0px;
}
</style>