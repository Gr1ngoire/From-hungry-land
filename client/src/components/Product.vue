<template>
    <button class="product-btn rounded">
        <img :src="image" :alt="alt" />
    <div class="product-name-tag">
        <span>{{ name }}</span>
        <span class="tag">{{ tag }}</span>
    </div>
        <button class="delete-btn">
            <font-awesome-icon icon="xmark" />
        </button>
    </button>
</template>

<script setup lang="ts">

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    }
});
</script>

<style scoped>
.product-btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: .7rem;
    background-color: var(--section-color);
    border: 1px solid black;
    padding: .4rem;
    box-shadow: 1px 1px 5 px rgba(0, 0, 0, 0.2);
}

.product-name-tag {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.tag {
    font-size: .5rem;
    color: grey;
}

img {
    display: flex;

    align-items: center;
    color: grey;
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 10px;
}

.delete-btn {
    background: transparent;
    border: none;
}
</style>
