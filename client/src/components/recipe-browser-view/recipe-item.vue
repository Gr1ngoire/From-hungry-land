<script setup>
import {RecipeDtoType} from "@/common/types/types"
import type { PropType } from 'vue'

const props = defineProps({
  recipe: Object as PropType<RecipeDtoType>
})

</script>

<template>
  <div class="item">
    <div class="item__img">
      <img :src="props.recipe.imgUrl" :alt="props.recipe.name">
    </div>
    <div class="item__img-info">
      <div class="item__difficult">
        {{props.recipe.difficult}}
      </div>
      <div class="item__name">
        {{props.recipe.name}}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>