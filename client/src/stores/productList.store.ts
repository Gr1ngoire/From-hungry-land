import type { ProductDTO, ProductTagDTO } from '@/common/types/types'
import { ProductService, ProductTagService, UserService } from '@/services/services'
import { defineStore } from 'pinia'
import { ref, computed, type ComputedRef } from 'vue'
import { StoreNames } from '@/common/enums/enums'


export const useProductListStore = defineStore(StoreNames.PRODUCTS, () => {

    const products = ref([] as ProductDTO[])

    const productTags = ref([] as ProductTagDTO[])
    const searchProducts = ref<ProductDTO[]>([])
    const isProductsLoading = ref(false)
    
    const productService: ProductService = new ProductService();
    const productTagService: ProductTagService = new ProductTagService();
    const userService: UserService = new UserService();

    const getProducts: ComputedRef<ProductDTO[]> = computed(() => products.value);
    const getProductTags: ComputedRef<string[]> = computed(() => productTags.value.map((tag: ProductTagDTO) => tag.name));
    const getSearchProducts: ComputedRef<ProductDTO[]> = computed(() => searchProducts.value);
    const isProductsLoaded: ComputedRef<Boolean> = computed(() => !isProductsLoading.value);
    const isProductTagsLoaded: ComputedRef<Boolean> = computed(() => productTags.value.length > 0);

  
 
    
    const fetchProducts = 
    async  (options?: {
        take?: number,
        skip?: number,
        name?: string,
        filters?: string[] | string,
    }) => {
        isProductsLoading.value = true

         await productService.getProducts(
            {
                take: options?.take || 20,
                skip: options?.skip || 0,
                name: options?.name,
                filters: options?.filters
            }
        ).then((data) => {
            products.value = data
            isProductsLoading.value = false  
        })
    }




    const fetchSearchProducts =  async (name?: string) => {
        searchProducts.value = await productService.getProducts({ name: name, all: true})
    }

    const filterProducts = (options: { filters?: string[] | string, page?: number}) => {

        fetchProducts({ filters: options.filters || [], skip: (options.page || 0) * 20 })

    }

    const fetchProductTags = async () => {
        productTags.value = await productTagService.getProductTags()    
    }

    const addProductToUser = async (productId: number) => {
        await userService.addProductToUser(productId)
    }

    const removeProductFromUser = async (productId: number) => {
        await userService.removeProductFromUser(productId)
    }

    
    return {
        fetchProducts,
        getProducts,
        productTags,
        fetchProductTags,
        getProductTags,
        isProductsLoaded,
        isProductTagsLoaded,
        filterProducts,
        fetchSearchProducts,
        getSearchProducts,
        addProductToUser,
        removeProductFromUser,

    }



})
