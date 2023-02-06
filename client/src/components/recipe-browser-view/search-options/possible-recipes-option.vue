<script setup lang="ts">
import CheckBox from "@/common/components/CheckBox.vue";
import {ref} from "vue";

const isSelected = ref<boolean>(false)
const checkBoxId:string = "PossibleRecipesCheckBox"
</script>

<template>
  <div class="option">
    <CheckBox
        class="option__checkbox"
        v-model="isSelected"
        :id="checkBoxId"
    />
    <label
        :for="checkBoxId"
        class="option__desc"
    >
      Possible recipes for your product list
    </label>

  </div>
</template>

<style scoped>
.option {
  display: flex;
  align-items: center;
}
.option__checkbox{
  margin-right: 20px;
}
.option__desc{
  font-size: 1.2rem;
}
</style>