<script setup lang="ts">
import {Footer, Header} from "@/common/components/components";
import {LocalStorageService} from "@/services/services";
import {useAuthStore} from "@/stores/auth.store";

const authStore = useAuthStore();
const localStorageService: LocalStorageService = new LocalStorageService();
const userToken = localStorageService.getToken();

if (userToken) {
  authStore.getCurrentUser();
}

</script>

<template>
  <header>
    <Header/>
  </header>

  <main>
    <RouterView/>
  </main>

  <footer>
    <Footer/>
  </footer>
</template>
