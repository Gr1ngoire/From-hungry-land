<script setup lang="ts">
import VueSelect from "vue-select";
import { Button } from "@/common/components/components";
import { Product } from '@/components/components'

import { ref, reactive, onMounted, computed } from "vue";
import { useProductListStore } from "@/stores/productList.store";
import type { ProductDTO } from "@/common/types/types";

const productsStore = useProductListStore();

const filters = ref([] as string[]);
const options = ref([] as ProductDTO[]);
const condition = ref(false);
const searchText = ref("");



onMounted(async () => {
    productsStore.fetchProducts().then(() => {
        options.value = [...productsStore.getProducts];
    });
    productsStore.fetchProductTags().then(() => {
        filters.value = [...productsStore.getProductTags]
    });
    await productsStore.fetchSearchProducts();

});

const selected = ref(null as ProductDTO | null);

const chosenFilters = reactive([] as string[]);

const addFilter = (filter: string) => {
    chosenFilters.push(filter);
    filters.value.splice(filters.value.indexOf(filter), 1);
    productsStore.filterProducts(searchText.value, chosenFilters);
}

const removeFilter = (filter: string) => {
    filters.value.push(filter);
    chosenFilters.splice(chosenFilters.indexOf(filter), 1);
    productsStore.filterProducts(searchText.value, chosenFilters);
}

const toggleDropdown = () => {
    condition.value = !condition.value;
}

const onSearch = (search: string) => {
    console.log(search);
    productsStore.fetchSearchProducts(search);
};

</script>

<template>
    <div class="page-wrapper">
        <div class="page-section rounded">
            <p class="caption-text">Add Products</p>

            <div class="product-search-wrapper">
                <VueSelect @search="onSearch" placeholder="Search for products..." class="flex-grow-4 min-w-10" :options="productsStore.getSearchProducts" v-model="selected" label="name" />
                <Button text="Add" class="flex-grow-0" bgColor="bg-cyan-green" :icon="['fas', 'plus']" />
            </div>


            <Button @click="toggleDropdown" class="filters-dropdown-btn flex-grow-1" text=" Filters"
                bgColor="bg-cyan-green" :icon="['fas', 'caret-down']" />

            <Transition name="slide-fade">
                <div v-show="condition" class="filters-dropdown">
                    <div class="filters-section">
                        <Button v-for="filter in chosenFilters" :text="filter" class="flex-grow-1" bgColor="bg-pink"
                            @click="removeFilter(filter)" />
                    </div>
                    <div class="filters-section">
                        <Button v-for="filter in filters" :text="filter" class="flex-grow-1" bgColor="bg-grey"
                            @click="addFilter(filter)" />
                    </div>
                </div>
            </Transition>
            <p class="caption-text">Your Products</p>
            <div class="product-search-wrapper">
                <input type="text" placeholder="Search" class="input rounded flex-grow-4 min-w-10" v-model="searchText" />
                <Button text="Search" class="flex-grow-0" bgColor="bg-cyan-blue" :icon="['fas', 'search']" />
            </div>
           
            <div class="products-wrapper">
                <Product v-for="product in productsStore.getProducts" :name="product.name" :image="product.imgUrl"
                    :alt="product.name" :tag="product.productTag.name" class="flex-grow-1">
                </Product>
            </div>
        </div>
        <div class="page-section rounded filters-normal">
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
:deep(.product-search-wrapper) {
    --vs-border-radius: 20px;
    --vs-actions-padding: 4px 1rem 0;
    --vs-dropdown-option--active-bg: var(--header-color);
    --vs-dropdown-option--active-color: white;
}

/* page layout */
.page-wrapper {
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
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
    display: flex;
    flex-wrap: wrap;
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
    min-width: 10rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    overflow-y: hidden;
    overflow-x: scroll;
}

.filters-dropdown {
    display: none;
    margin-bottom: 1rem;
}

.filters-dropdown-btn {
    display: none;
    margin-bottom: 1rem;
}

@media (max-width: 768px) {
    .page-wrapper {
        grid-template-columns: 1fr;
    }

    .filters-dropdown {
        display: block;
    }

    .filters-normal {
        display: none;
    }

    .filters-dropdown-btn {
        display: block;
    }

    .products-wrapper {
        display: flex;
        flex-wrap: wrap;
    }


}

@media (max-width: 576px) {
    .product-search-wrapper {
        flex-direction: column;
        align-items: stretch;

    }

    .page-wrapper {
        padding: 2rem;
    }
}

/* ect */

.min-w-10 {
    min-width: 10rem;
}

.btn {
    min-width: 2rem;
}

/* transition */

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.input {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid rgb(172, 172, 172);
    margin: 0;
    font-size: 1rem;
}

.search-user-products {
    display: flex;
    flex-direction: column;
}
</style>
