<script setup lang="ts">
import {useRecipeBrowserStore} from "@/stores/recipe-browser-store";
import RecipeItem from "@/components/recipe-browser-view/recipe-item.vue";
import Input from "@/common/components/Input.vue";
import {ref, watch} from "vue";

const recipeStore = useRecipeBrowserStore()
const query = ref<string>("")
watch(query, (query, prevQuery) => {
  recipeStore.setSearchQuery(query)
  recipeStore.fetchRecipes()
  console.log(1)
})
// let options = {
//   root: document.querySelector('#scrollArea'),
//   rootMargin: '0px',
//   threshold: 1.0
// }
// const callback = (entries:IntersectionObserverCallback) =>{
//   if(entries[0].isIntersecting){
//
//   }
// }
// let observer = useRef<IntersectionObserver>();
</script>

<template>
  <div class="list">
    <div class="list__header">
      <div class="list__title">
        <h2>Browse recipes that you want :)</h2>
      </div>
      <div class="list__logo">
        <img src="https://cdn-icons-png.flaticon.com/512/2005/2005779.png" alt="list__logo">
      </div>
    </div>
    <div class="list__content">
      <div class="list__search">
        <input type="text" v-model.trim="query"/>
      </div>
      <div class="list__items" v-if="!recipeStore.isLoading">
        <transition-group name="list">
          <RecipeItem
              v-for="recipe in recipeStore.getRecipes"
              :key="recipe.id"
              class="list__item"
              :recipe="recipe"
          />
        </transition-group>
        <div class="list__empty" v-if="!recipeStore.isLoading &&!recipeStore.isRecipesLoaded">
          Input something else. Current value is invalid
        </div>
      </div>
      <div class="list__spinner" v-else>
        <font-awesome-icon :icon="['fas', 'spinner']" :spin="true" size="3x"/>
      </div>

    </div>
  </div>
</template>

<style scoped>
.list {
  background: white;
}

.list__header {
  display: flex;
  font-size: 0.9rem;
  justify-content: space-between;
  margin-bottom: 12px;
}

.list__title {
  margin-top: 20px;
}

.list__logo {
  width: 80px;
  height: 80px;
}

.list__logo img {
  height: 100%;
  width: 100%;
}

.list__items {
  display: flex;
  flex-wrap: wrap;
  height: 75vh;
  overflow: auto;
  margin: 0 auto;
}

.list__search {
  margin-bottom: 25px;
}

.list__search input {
  width: 97%;
  height: 30px;
  border-radius: 10px;
  padding: 2px 10px;
  font-size: 1.3rem;
  color: #b9004a;
}

.list__item {
  flex: 1 1 auto;
  margin: 5px 13px 20px 13px;
  padding: -5px -13px -20px -13px;
}

.list__content {
  padding: 5px;
}

.list__empty {
  color: red;
}
.list__spinner{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(500px);
}


h2 {
  margin: 0;
}
</style>