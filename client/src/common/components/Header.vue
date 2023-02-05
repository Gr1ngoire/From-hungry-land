<template>
  <nav v-if="allowedToRender">
    <ul class="header-elements">
      <li class="header-elem">
        <button class="header-btn">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </li>
      <li class="header-elem">
        <p>Page Name</p>
      </li>
      <li class="header-elem">
        <router-link to="">
          <button class="header-btn">
            <font-awesome-icon :icon="['fas', 'user']" />
          </button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import {AppRoutes} from "@/common/enums/enums";

  const allowedToRender = window.location.pathname !== AppRoutes.SIGN_IN && window.location.pathname !== AppRoutes.SIGN_UP
</script>

<style scoped>
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
</style>
