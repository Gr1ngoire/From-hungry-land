<script setup lang="ts">
import {$enum} from "ts-enum-util"
import CheckBox from "@/common/components/CheckBox.vue";
import {RecipeDifficulty} from "@/common/enums/enums";
import {ref, watch} from "vue";
import {useRecipeBrowserStore} from "@/stores/recipe-browser-store";
import RecipeDifficult from "@/components/recipe-browser-view/recipe-difficult.vue";

const recipeStore = useRecipeBrowserStore()
const selectedDifficulties = ref<{ [key: string]: boolean }>({
  "easy": false,
  "medium": false,
  "hard": false,
})


watch(selectedDifficulties.value, (currValue: { [key: string]: boolean }) => {
  const difficults:RecipeDifficulty[] = []
  for (const key in currValue) {
    if (currValue[key]) {
      difficults.push(key as RecipeDifficulty)
    }
  }
  recipeStore.setDifficult(difficults)
  recipeStore.fetchRecipes()
})


</script>

<template>
  <div class="option">
    <div class="option__title">
      Difficult
    </div>
    <div
        class="option__raw"
        v-for="difficult in $enum(RecipeDifficulty).getValues()"
    >
      <CheckBox
          :id="difficult + 'difficultCheckBox'"
          class="option__checkbox"
          v-model="selectedDifficulties[difficult]"
      />
      <div
          :for="difficult + 'difficultCheckBox'"
          class="option__desc"
          @click="selectedDifficulties[difficult] = !selectedDifficulties[difficult]"
      >
        <RecipeDifficult
            :difficult="difficult"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.option__title {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.option__raw {
  margin-left: 10px;
  margin-bottom: 5px;
}

.option__raw {
  display: flex;
  align-items: center;

}

.option__checkbox {
  margin-right: 8px;
}

.option__desc {
  font-size: 1.2rem;
}
@media(max-width: 756px) {
  .option{
    display: flex;
    margin-bottom: 20px;
  }
  .option__checkbox{
    margin-right: 5px;
  }
  .option__title{
    display: none;
    margin-bottom: 0;
  }
  .option__raw{
    margin: 0 10px 0 0;
  }

}
</style>