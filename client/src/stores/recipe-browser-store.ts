import {defineStore} from "pinia";
import {StoreNames} from "@/common/enums/enums";
import {ref} from "vue";

export const useRecipeBrowserStore = defineStore(StoreNames.RECIPES,() =>{
    const recipes = ref([])
})