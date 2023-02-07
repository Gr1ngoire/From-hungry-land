<template>
  <div class="footerWrapper">
    <hr class="separator" />
    <div class="footer">
      <div class="links">
        <p class="linksHeading">
          Follow us:
        </p>
        <div class="linksSection">
          <font-awesome-icon class="linkIcon telegram" icon="fa-brands fa-telegram" />
          <font-awesome-icon class="linkIcon instagram" icon="fa-brands fa-instagram" />
          <font-awesome-icon class="linkIcon facebook" icon="fa-brands fa-facebook" />
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
  align-items: center;
  padding: .5rem 1rem .5rem 1rem;
}

.links {
  display: flex;
  justify-content: center;
}

.linksHeading {
  text-align: end;
  margin-right: .5rem;
}

.linksSection {
  display: flex;
  gap: .5rem;
  align-items: center;
}

.linkIcon {
  cursor: pointer;
  font-size: 1.5rem;
}

.info {
  display: flex;
  gap: 1.5rem;
}

.infoParagraph {
  color: #DE00A0;
}

.telegram:hover {
  color: #0088CC;
}

.instagram:hover {
  color: #E1306C;
}

.facebook:hover {
  color: #3B5998;
}


@media (max-width: 768px) {

  .footer {
    flex-direction: column;
  }

  .infoParagraph {
    text-align: center;
  }
}
</style>
