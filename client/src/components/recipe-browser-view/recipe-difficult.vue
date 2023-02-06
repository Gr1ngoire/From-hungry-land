<script setup lang="ts">
import type {PropType} from "vue";
import {RecipeDifficulty} from "@/common/enums/enums";

const props = defineProps({
  difficult: String as PropType<RecipeDifficulty>
})
// const determineDifficultClass = () =>{
//   if(RecipeDifficulty.EASY){
//     return "easy"
//   }
//   if(RecipeDifficulty.MEDIUM){
//     return ""
//   }
// }

</script>
<template>
  <div :class="props.difficult">
    {{props.difficult}}
  </div>
</template>
<style scoped>
.easy{
  color: #1cba16;
}
.medium{
  color: #FF9900;
}
.hard{
  color: #FF0000;
}
</style>