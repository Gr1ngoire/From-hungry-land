<template>
  <nav>
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
        <div v-if="userTokenExists"  class="logoutWrapper">
          <Button @click="logout" text="Log out" type="click" bg-color="bg-pink" class="bg-grey"/>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {useRouter} from "vue-router";
import { AppRoutes } from "@/common/enums/enums";
import NavMenu from "./NavMenu.vue";
import Button from './Button.vue'
import {useAuthStore} from "@/stores/auth.store";
import {LocalStorageService} from "@/services/localStorage/localStorage.service";

const authStore = useAuthStore();
const localStorageService = new LocalStorageService();
const userTokenExists = ref<boolean>(Boolean(localStorageService.getToken()))

const initRouter = useRouter()


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
  userTokenExists.value = false;
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

.logoutWrapper {
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
