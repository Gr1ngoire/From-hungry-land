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
        <img src="https://cdn-icons-png.flaticon.com/512/73/73391.png" alt="options">
      </div>
    </div>
    <div class="search-options__body options">
      <PossibleRecipesOption class="possible__recipe-option"/>
      <DifficultyOption/>
    </div>
  </div>
</template>


<style scoped>
.search-options__header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.search-options__title{
  margin-top: 20px;
}
.search-options__logo{
  margin-top: 5px;
  width: 70px;
  height: 70px;
}
.search-options__logo img{
  width: 100%;
  height: 100%;
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