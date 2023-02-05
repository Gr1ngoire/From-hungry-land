import {defineStore} from "pinia";
import {StoreNames} from "@/common/enums/enums";
import {computed, type ComputedRef, ref} from "vue";
import type {RecipeDtoType} from "@/common/types/types";
import type {RecipeQueryOptionType} from "@/common/types/types";
import {recipeService} from "@/services/services"

export const useRecipeBrowserStore = defineStore(StoreNames.RECIPES, () => {
    const recipes = ref<RecipeDtoType[]>([])
    const queryOptions = ref<RecipeQueryOptionType>({})

    const getRecipes: ComputedRef<RecipeDtoType[]> = computed(() => recipes.value)
    const isRecipesLoaded: ComputedRef<boolean> = computed(() => recipes.value.length > 0)
    const fetchRecipes = async () => {
        recipes.value = await recipeService.getRecipes(queryOptions.value)
    }
    const setQueryOptions = (options:RecipeQueryOptionType) => {
        queryOptions.value = options
    }


    return {
        getRecipes,
        isRecipesLoaded,
        fetchRecipes
    }
})