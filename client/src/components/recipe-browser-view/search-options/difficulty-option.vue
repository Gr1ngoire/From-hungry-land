<script setup lang="ts">
import {$enum} from "ts-enum-util"
import CheckBox from "@/common/components/CheckBox.vue";
import RecipeDifficult from "@/components/recipe-browser-view/recipe-difficult.vue";
import {RecipeDifficulty} from "@/common/enums/enums";
import {ref} from "vue";

const selectedDifficulties = ref({
  "easy": false,
  "medium": false,
  "hard": false,
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
      <label :for="difficult + 'difficultCheckBox'">
        <RecipeDifficult
            :difficult="difficult"
        />
      </label>
    </div>
  </div>
</template>

<style scoped>
.option__title {
  font-size: 2rem;
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
</style>