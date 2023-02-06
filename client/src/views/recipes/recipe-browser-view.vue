<script setup lang="ts">
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
  <div class="page-wrapper">
    <div class="recipes">
      <RecipesList class="recipes__section list rounded" />
      <RecipesSearchOptions class="recipes__section tags rounded"/>
    </div>
  </div>
</template>


<style scoped>
.page-wrapper{
  display: block;
}
.recipes{
  display: flex;
}

.list{
  flex: 0 1 61.5%;
  margin-right: 3rem;
}

.tags{
  flex:0 1 29.5%;
}

.recipes__section{
  padding: 2rem;
}
</style>