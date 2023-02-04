<script setup lang="ts">
import VueSelect from "vue-select";
import Button from "@/components/Button.vue";
import Product from "@/components/Product.vue";

import { ref } from "vue";

const selected = ref(null);
const options = ref(["one", "two", "three"]);
const filters = ref([
    "filter1",
    "filter2",
    "fer3",
    "filtsdaer2",
    "filter3",
    "filter2",
    "filter3",
]);

const products = ref([
    {
        name: "Bread",
        imgUrl: "https://www.themealdb.com/images/ingredients/Bread.png",
        tag: "Flour products",
    }
])

</script>

<template>
    <div class="page-wrapper">
        <div class="page-section rounded">
            <div class="product-search-wrapper">
                <VueSelect class="flex-grow-4 min-w-10" :options="options" v-model="selected" label="name" />
                <Button text="Add" class="flex-grow-1" bgColor="bg-cyan-green" :icon="['fas', 'plus']" />
            </div>
            <div class="products-wrapper">
                <Product v-for="product in products" :name="product.name" :image="product.imgUrl" :alt="product.name"
                    :tag="product.tag">
                </Product>
            </div>
        </div>
        <div class="page-section rounded">
            <p class="filters-text">Filters</p>
            <div class="filters-section">
                <Button v-for="filter in filters" :text="filter" class="flex-grow-1" bgColor="bg-grey" />
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

.products-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem 0 0 0;
}

.min-w-10 {
    min-width: 20rem;
}

.filters-text {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0;
    margin: 0 0 1rem 0;
}

.btn {
    min-width: 4rem;
}

.filters-section {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
}

.product-search-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.page-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    padding: 3rem 3rem 0 3rem;
}

.page-section {
    padding: 2rem;
    background-color: var(--section-bg-color);
}
</style>
