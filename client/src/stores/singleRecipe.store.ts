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

    const getSingleRecipe = computed((): SingleRecipe =>  singleRecipe.value);
    const getIsRecipeLoading = computed(() => isRecipeLoading.value);
    
    const fetchSingleRecipe = async (id: number) => {
        isRecipeLoading.value = true;
        const recipe = await recipeService.getRecipe(id);
        singleRecipe.value = recipe;
        isRecipeLoading.value = false;
    };

    const clearSingleRecipe = () => {
        singleRecipe.value = {} as SingleRecipe;
    };
    
    return {
        singleRecipe,
        getSingleRecipe,
        fetchSingleRecipe,
        getIsRecipeLoading,
        clearSingleRecipe
    };
    }
);
