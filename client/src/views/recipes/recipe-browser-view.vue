<script setup>
import RecipesList from "@/components/recipe-browser-view/recipes-list.vue";
  import RecipesSearchOptions from "@/components/recipe-browser-view/recipes-search-options.vue";
import {useRecipeBrowserStore} from "@/stores/recipe-browser-store";
import {onMounted} from "vue";
const recipeStore = useRecipeBrowserStore()
onMounted(() =>{
  recipeStore.fetchRecipes()
})
</script>


<template>
  <img src="https://thumbs.dreamstime.com/b/craffin-isolated-white-background-christmas-panettone-raisins-sprinkled-powdered-sugar-craffin-isolated-white-204075444.jpg" alt="sosi">
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