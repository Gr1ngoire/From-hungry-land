<script setup lang="ts">




import PossibleRecipesOption from "@/components/recipe-browser-view/search-options/possible-recipes-option.vue";
import DifficultyOption from "@/components/recipe-browser-view/search-options/difficulty-option.vue";
</script>


<template>
  <div class="search-options page-section">
    <div class="search-options__header">
      <div class="search-options__title">
        <h2>Search options</h2>
      </div>
      <div class="search-options__logo">
        <font-awesome-icon :icon="['fas', 'filter']"  size="4x" style="color: grey"/>
      </div>
    </div>
    <div class="search-options__body options">
      <PossibleRecipesOption class="possible__recipe-option"/>
      <DifficultyOption class="difficult-options"/>
    </div>
  </div>
</template>


<style scoped>
.search-options__header{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
}
.search-options__title{
  font-size: 0.9rem;
  margin-top: 20px;
}
.search-options__logo{
}
.search-options__body{

}
.possible__recipe-option{
  margin-bottom: 20px;
}
h2{
  margin: 0;
}
</style>