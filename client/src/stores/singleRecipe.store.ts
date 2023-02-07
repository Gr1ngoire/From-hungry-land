import { StoreNames } from "@/common/enums/enums";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { recipeService } from "@/services/services";
import type { ProductDTO } from "shared/common/types/types";

type SingleRecipe = {
    id : number,
    name: string,
    instruction: string,
    imgUrl: string,
    difficult: any,
    productRecipes: {
        product: ProductDTO;
        quantity: number;
    }[]
}

export const useSingleRecipeStore = defineStore(StoreNames.SINGLE_RECIPE, () => {
    const singleRecipe = ref({} as SingleRecipe);
    const isRecipeLoading = ref<boolean>(false);
    const recipeIngredientsChecks = ref<{id: number, isPresent: boolean}[]>([]);

    const getSingleRecipe = computed((): SingleRecipe =>  singleRecipe.value);
    const getIsRecipeLoading = computed(() => isRecipeLoading.value);
    const getRecipeIngredientsChecks = computed(() => recipeIngredientsChecks.value);
    
    const fetchSingleRecipe = async (id: number) => {
        isRecipeLoading.value = true;
        const recipe = await recipeService.getRecipe(id);
        singleRecipe.value = recipe;
        isRecipeLoading.value = false;
    };

    const checkRecipeIngredients = async (id: number) => {
        const ingredients = await recipeService.checkRecipeIngredients(id);
        recipeIngredientsChecks.value = ingredients;
    }

    const presentIngredients = computed((id: number) => {
        return recipeIngredientsChecks.value.map((check) => {
            const recipe = singleRecipe.value.productRecipes.find((product) => product.product.id === check.id);
            return {recipe: recipe, isPresent: check.isPresent};
        });
    });
        

    const clearSingleRecipe = () => {
        singleRecipe.value = {} as SingleRecipe;
    };
    
    return {
        singleRecipe,
        getSingleRecipe,
        fetchSingleRecipe,
        getIsRecipeLoading,
        clearSingleRecipe,
        checkRecipeIngredients,
        getRecipeIngredientsChecks,
        presentIngredients
    };
    }
);
