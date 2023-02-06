<script lang="ts" setup>

import PossibleRecipesOption from "@/components/recipe-browser-view/search-options/possible-recipes-option.vue";
import DifficultyOption from "@/components/recipe-browser-view/search-options/difficulty-option.vue";
</script>

<template>
  <div class="options">
    <PossibleRecipesOption class="option__possible-recipes"/>
    <DifficultyOption/>
  </div>
</template>


<style scoped>
  .option__possible-recipes{
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    .option__possible-recipes{
      margin-bottom: 10px;
    }
  }
</style>