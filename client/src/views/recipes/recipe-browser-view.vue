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
  flex: 1 1 61.5%;
  margin-right: 30px;
}

.tags{
  flex:1 1 30%;
}

.recipes__section{

}
</style>