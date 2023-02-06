<template>
  <div v-if="allowedToRender" class="footerWrapper">
    <hr class="separator"/>
    <div class="footer">
      <div class="links">
        <p class="linksHeading">
          Follow us:
        </p>
        <div class="linksSection">
          <font-awesome-icon class="linkIcon" icon="fa-brands fa-telegram" />
          <font-awesome-icon class="linkIcon" icon="fa-brands fa-instagram" />
          <font-awesome-icon class="linkIcon" icon="fa-brands fa-facebook" />
        </div>
      </div>
      <div class="info">
        <p class="infoParagraph">Privacy</p>
        <p class="infoParagraph">Terms</p>
        <p class="infoParagraph">@Company name 2023</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppRoutes } from "@/common/enums/enums";
import { ref } from "vue";
import router from '@/router/index'

const allowedToRender = ref<boolean>( false)

router.isReady().then(() => {
  const route = router.currentRoute.value.path
  allowedToRender.value = route !== AppRoutes.SIGN_IN && route !== AppRoutes.SIGN_UP
})
</script>

<style scoped>

.footerWrapper {
  margin-top: 20px;
}

.separator {
  border-width: 2px;
  border-color: #DE00A0;
  margin: 0;
}

.footer {
  background: #F4E9F1;
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.links {
  width: 25%;
  display: flex;
  justify-content: center;
}

.linksHeading {
  font-size: 1.25rem;
  text-align: end;
}

.linksSection {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.linkIcon {
  font-size: 1.75rem;
  cursor: pointer;
}

.info {
  width: 30%;
  display: flex;
  justify-content: space-evenly;
}

.infoParagraph {
  font-size: 1.25rem;
}

</style>
