<script setup>
  import RecipesList from "@/components/recipe-browser-view/recipes-list.vue";
  import RecipesSearchOptions from "@/components/recipe-browser-view/recipes-search-options.vue";

</script>


<template>
  <div class="page-wrapper">
    <div class="recipes">
      <RecipesList class="recipes__list list" />
      <RecipesSearchOptions class="recipes__tags tags"/>
    </div>
  </div>
</template>


<style scoped>
.page-wrapper{
  display: block;
}
</style>