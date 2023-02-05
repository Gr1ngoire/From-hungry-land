<script setup lang="ts">
import VueSelect from "vue-select";
import Button from "@/components/Button.vue";
import Product from "@/components/Product.vue";

import { ref, reactive, onMounted } from "vue";
import { useProductListStore } from "@/stores/productListStore.js";
import type { ProductTagDTO, ProductDTO } from "@/common/types/types";

const productsStore = useProductListStore();

const filters = ref([] as string[]);
const options = ref([] as ProductDTO[]);

onMounted(() => {
    productsStore.fetchProducts().then(() => {
        options.value = [...productsStore.getProducts];
    });
    productsStore.fetchProductTags().then(() => {
        filters.value = [...productsStore.getProductTags]
    });
    
});

const selected = ref({
    name: "",
    imgUrl: "",
    productTag: {
        name: "",
    },
});



const chosenFilters = reactive([] as string[]);


const addFilter = (filter: string) => {
    chosenFilters.push(filter);
    filters.value.splice(filters.value.indexOf(filter), 1);
}

const removeFilter = (filter: string) => {
    filters.value.push(filter);
    chosenFilters.splice(chosenFilters.indexOf(filter), 1);
}


</script>

<template>
    <div class="page-wrapper">
        <div class="page-section rounded">
            <p class="caption-text">Add Products</p>
            <div class="product-search-wrapper">
                <VueSelect class="flex-grow-4 min-w-10" :options="options" v-model="selected" label="name" />
                <Button text="Add" class="flex-grow-1" bgColor="bg-cyan-green" :icon="['fas', 'plus']" />
            </div>
            <p class="caption-text">Your Products</p>
            <div class="products-wrapper">
                <Product v-for="product in productsStore.getProducts" :name="product.name" :image="product.imgUrl"
                    :alt="product.name" :tag="product.productTag.name">
                </Product>
            </div>
        </div>
        <div class="page-section rounded">
            <p class="caption-text">Filters</p>
            <div class="filters-section">
                <Button v-for="filter in chosenFilters" :text="filter" class="flex-grow-1" bgColor="bg-pink"
                    @click="removeFilter(filter)" />
            </div>
            <div class="filters-section">
                <Button v-for="filter in filters" :text="filter" class="flex-grow-1" bgColor="bg-grey"
                    @click="addFilter(filter)" />
            </div>
        </div>
    </div>
</template>

<style scoped>
:deep() {
    --vs-border-radius: 20px;
    --vs-actions-padding: 4px 1rem 0;
    --vs-dropdown-option--active-bg: var(--header-color);
    --vs-dropdown-option--active-color: white;
}

/* page layout */
.page-wrapper {
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    padding: 3rem 3rem 0 3rem;
    min-height: 30rem;
}

.page-section {
    padding: 2rem;
}

/* products section */

.product-search-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.products-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

/* filters section */

.caption-text {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0;
    margin: 0 0 1rem 0;
}

.filters-section {
    padding-bottom: .3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    overflow-y: hidden;
}

/* ect */

.min-w-10 {
    min-width: 20rem;
}

.btn {
    min-width: 4rem;
}
</style>
