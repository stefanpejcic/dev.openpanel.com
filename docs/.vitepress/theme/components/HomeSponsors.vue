<template>
  <div class="sponsors_outer">
    <div>

      <div class="cta">
        <a class="become-sponsor" href="https://community.openpanel.org">{{
          translations[site.lang] || translations.en
        }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const { site } = useData()
const translations = {
  en: 'Get Support',
}
</script>

<style scoped>
.sponsors_outer {
  text-align: center;
  padding: 35px 40px 45px;
  background-color: var(--vp-c-bg-accent);
  /* transition when toggling dark mode */
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
}

.cta {
  margin-top: 2rem;
}
</style>
