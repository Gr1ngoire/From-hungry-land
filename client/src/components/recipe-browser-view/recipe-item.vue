<script setup lang="ts">
import type {RecipeDtoType} from "@/common/types/types"
import type { PropType } from 'vue'
import RecipeDifficult from "@/components/recipe-browser-view/recipe-difficult.vue";

const props = defineProps({
  recipe: Object as PropType<RecipeDtoType>
})

</script>

<template>
  <div class="item">
    <router-link :to="`recipes/${props.recipe.id}`">
      <img
          :src="props.recipe.imgUrl"
          :alt="props.recipe.name"
          class="item__img"
      >
    </router-link>
    <div class="item__img-info">
      <RecipeDifficult
          class="item__difficult"
          :difficult="props.recipe.difficult"
      />
      <div class="item__name">
        {{props.recipe.name}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.item{
  border-radius: 15px;
  overflow: hidden;
  width: 250px;
  height: 235px;
  position: relative;

}
.item:hover{
  outline: 2px solid #b9004a;
}
.item__img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.item__img-info{
  background: white;
  position: absolute;
  bottom: 10px;
  left:10px;
  padding: 1px 7px;
  border-radius: 7px 7px 12px 12px;

}
.item__difficult{
  font-size: 0.7rem;
  font-weight: 700;
}
.item__name{
  font-size: 0.9rem;
  color: #FF005C;
  font-weight: 600;
}

</style>