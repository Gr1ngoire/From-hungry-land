import {defineStore} from "pinia";
import {RecipeDifficulty, StoreNames} from "@/common/enums/enums";
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
    const setSearchQuery = (searchQuery: string) =>{
        queryOptions.value.searchQuery = searchQuery
    }
    const setDifficult = (difficulty: RecipeDifficulty[]) => {
        queryOptions.value.difficulty = difficulty
    }

    const setTakeSkip = (take: number, skip: number) =>{
        queryOptions.value.take = take
        queryOptions.value.skip = skip
    }


    return {
        getRecipes,
        isRecipesLoaded,
        fetchRecipes,
        setSearchQuery,
        setQueryOptions,
        setDifficult,
        setTakeSkip
    }
})