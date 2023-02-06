<script lang="ts" setup>

import { onMounted, computed } from "vue";
import { useSingleRecipeStore } from "@/stores/singleRecipe.store";
import { useRouter, onBeforeRouteLeave } from "vue-router";

const router = useRouter();
const singleRecipeStore = useSingleRecipeStore();

const recipe = computed(() => singleRecipeStore.getSingleRecipe)

onMounted(() => {
    singleRecipeStore.fetchSingleRecipe(Number(router.currentRoute.value.path.split("/")[2]))
});

onBeforeRouteLeave(() => {
    singleRecipeStore.clearSingleRecipe();
});



</script>


<template>
    <template v-if="!singleRecipeStore.getIsRecipeLoading">
        <div class="page-wrapper">

            <div class="page-section rounded">

                <div class="recipe-main-section">
                    <img class="recipe-img rounded" :src="recipe.imgUrl" />
                    <div class="recipe-info">
                        <h1>{{ recipe.name }}</h1>
                        <span class="underline"></span>
                        <p>Difficulty: <span class="diff-color"> {{ recipe.difficult }}</span></p>
                    </div>
                </div>
            </div>
            <div class="page-section transparent pt-0">
                <div class="ingredients-section">
                    <h2>Ingredients</h2>
                    <span class="underline w-50"></span>
                    <ul>
                        <li v-for="ingredient in recipe.productRecipes">{{ ingredient.product.name }}, {{
                            ingredient.quantity
                        }}</li>

                    </ul>
                </div>
                <div class="instrutions-section">
                    <h2>Instructions</h2>
                    <span class="underline w-50"></span>

                    <p>
                        {{ recipe.instruction }}
                    </p>

                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="loading-page">
            <span class="loading-anim"></span>
            <span class="loading-text">Loading...</span>
        </div>
    </template>


</template>



<style scoped>
.page-section {
    padding: 3rem;
}

.recipe-main-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    justify-content: center;
}

.recipe-img {
    width: 80%;
    aspect-ratio: 3/2;
    object-fit: cover;
    margin-right: 2rem;
}


.recipe-info {
    display: flex;
    flex-direction: column;
    align-self: start;
    align-items: flex-end;
    margin-right: 2rem;
    word-break: break-word;
}

.diff-color {
    color: #ff0000;
}

.ingredients-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.instrutions-section {
    display: flex;
    flex-direction: column;
    text-align: justify;
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: right;
}

h2 {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 1rem;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin-top: 1rem;
    margin-left: 1rem;
}

.pt-0 {
    padding-top: 0;
}

.underline {
    width: 100%;
    height: 2px;
    background-color: var(--header-color);
}

.w-50 {
    width: 50%;
}

@media (max-width: 768px) {
    .recipe-main-section {
        grid-template-columns: 1fr;
    }

    .recipe-img {
        width: 100%;
        margin-right: 0;
    }

    .recipe-info {
        align-items: center;
        margin-right: 0;
    }

    .page-wrapper {
        padding: 2rem;
    }

    .page-section {
        padding: 2rem;
    }

    h1 {
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
        margin-bottom: 1rem;
    }
}
</style>