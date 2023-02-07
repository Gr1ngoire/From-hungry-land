<template>
    <div @click="handleClickOutside" class="nav-menu">
        <ul class="nav-menu__list">
            <router-link v-for="route in navRoutes" :to="route.path" class="router_link" >
                <div class="nav-menu__list-item-link">
                <li class="nav-menu__list-item" :key="route.name">
                    {{ route.name }}
                </li>
            </div>
            </router-link>
        </ul>
    </div>

</template>

<script setup lang="ts">
import { AppRoutes } from "@/common/enums/enums";



const navRoutes = [
    {
        name: "Your Products",
        path: AppRoutes.PRODUCTS,
    },
    {
        name: "Recipes",
        path: "/recipes"
    },
];


const emit = defineEmits(["close"]);

const handleClickOutside = () => {
    emit("close");
}

</script>

<style scoped>
.nav-menu {
    position: fixed;
    left: 0;
    width: 120%;
    height: 100%;
    background-color: rgba(72, 72, 72, .5);
    z-index: 4;

}

.nav-menu__list {
    position: relative;
    width: 30%;
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: rgb(218, 218, 218);
    z-index: 5;
}

.nav-menu__list-item {
    padding: 1rem;
    border-bottom: 1px solid black;
}

.router_link {
    text-decoration: none;
    color: black;
}

.nav-menu__list-item-link {
    width: 100%;
    text-decoration: none;
    font-weight: 600;
    color: rgb(86, 86, 86);
    margin: 0;
    padding: 0;
    z-index: 6;
    transition: all .4s ease-in-out;
}


.nav-menu__list-item-link:hover {
    color: rgb(255, 255, 255);
    background-color: var(--header-color)
}


@media screen and (max-width: 768px) {
    .nav-menu__list {
        width: 50%;
    }

}
</style>