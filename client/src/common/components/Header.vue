<template>
  <nav>
    <ul class="header-elements">
      <li class="header-elem">
        <button class="header-btn" @click="toggleNavMenu">
          <font-awesome-icon :icon="['fas', 'bars']"/>
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
        <div v-if="authStore.getCurrentUserData" class="authActionWrapper">
          <Button @click="logout" :text="`${authStore.getCurrentUserData?.nickname}/Log out`" bg-color="bg-grey" class="bg-grey"/>
        </div>
        <div v-else-if="!authStore.getCurrentUserData && authStore.getIsSignInButtonRenderable" class="authActionWrapper">
          <Button @click="redirectToSignIn" bg-color="bg-grey" text="Sign In"/>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import {AppRoutes} from "@/common/enums/enums";
import NavMenu from "./NavMenu.vue";
import Button from './Button.vue';
import {useAuthStore} from "@/stores/auth.store";

const initRouter = useRouter();
const authStore = useAuthStore();


const isNavMenuOpen = ref(false);

const toggleNavMenu = () => {
  isNavMenuOpen.value = !isNavMenuOpen.value;
}

const handleClickOutside = () => {
  isNavMenuOpen.value = false;
}

const logout = () => {
  authStore.logout();
  initRouter.push(AppRoutes.SIGN_IN);
}

const redirectToSignIn = () => {
  initRouter.push(AppRoutes.SIGN_IN)
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

.authActionWrapper {
  padding-right: 16px;
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
