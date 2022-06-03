<script setup>
import { RouterLink } from 'vue-router';

let url = document.location.pathname
let title = "lv"

if (url.substring(0, 3) != "/en") {
    url = "/en" + url
    title = "en"
}

console.log(url)
</script>

<template>
<div class="language-switcher">
    <RouterLink class="language" :to=url>
        {{ title }}
    </RouterLink>
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