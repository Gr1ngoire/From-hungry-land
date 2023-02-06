<template>
  <nav v-if="allowedToRender">
    <ul class="header-elements">
      <li class="header-elem">
        <button class="header-btn" @click="toggleNavMenu">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
        <Transition name="slide-fade">
          <NavMenu @close="handleClickOutside" v-if="isNavMenuOpen">
          </NavMenu>
        </Transition>
      </li>
      <li class="header-elem">
        <p>Page Name</p>
      </li>
      <li class="header-elem">
        <router-link to="">
          <button class="header-btn">
            <font-awesome-icon :icon="['fas', 'user']"/>
          </button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { AppRoutes } from "@/common/enums/enums";
import NavMenu from "./NavMenu.vue";
import { ref } from "vue";
import router from '@/router/index'

const allowedToRender = ref<boolean>( false)

router.isReady().then(() => {
  const route = router.currentRoute.value.path
  allowedToRender.value = route !== AppRoutes.SIGN_IN && route !== AppRoutes.SIGN_UP
})

const isNavMenuOpen = ref(false);

const toggleNavMenu = () => {
  isNavMenuOpen.value = !isNavMenuOpen.value;
}

const handleClickOutside = () => {
  isNavMenuOpen.value = false;
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  z-index: 1;
}

.header-elements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  background-color: var(--header-color);

  padding: 0;
  margin: 0;
}

.header-elem {
  color: white;
  text-decoration: none;
}

a {
  color: white;
  text-decoration: none;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

</style>
