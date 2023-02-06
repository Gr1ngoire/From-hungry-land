<script setup lang="ts">
import CheckBox from "@/common/components/CheckBox.vue";
import {ref, watch} from "vue";
import {useRecipeBrowserStore} from "@/stores/recipe-browser-store";

const recipeStore = useRecipeBrowserStore()
const isSelected = ref<boolean>(false)
// watch(isSelected, (selection, prevSelection) =>{
//   recipeStore.
// })
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
  flex: 0 0 25px ;
  margin-right: 15px;

}
.option__desc{
  font-size: 1.2rem;
}
</style>