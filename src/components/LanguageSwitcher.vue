<script>
export default {
  data() {
    const isEnglish = !this.$route.path.includes('/en')

    const url = isEnglish ? '/en' : '/'
    const title = isEnglish ? 'en' : 'lv'
  
    return {
      url,
      title
    }
  }
}
</script>

<template>
<div class="language-switcher">
  <router-link class="language" :to="url">
    {{ title }}
  </router-link>
</div>
</template>

<style scoped>
.language {
    color: #000;
    font-size: 24px;
    font-weight: 800;
    position: absolute;
    text-decoration: none;
    top: 20px;
    right: 20px;
}

.language:hover {
    text-decoration: underline;
}
</style>