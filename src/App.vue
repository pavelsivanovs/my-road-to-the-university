<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
</script>

<template>
  <RouterView/>
  <Footer/>
</template>

<style>
/* CSS RESET */

* {
  margin: 0;
  padding: 0;
}

/* END */

@font-face {
  font-family: e-Ukraine;
  src: url(./assets/fonts/e-Ukraine-Light.woff2);
}

@font-face {
  font-family: KyivPost;
  src: url(./assets/fonts/KyivTypeSerif-Bold3.woff2);
}

:root {
  --yellow: #edde80;
  --cyan: #65eaea;
  --magenta: #f384bc;

  --desktop-screen: 1040px;
}

html, body {
  background-color: var(--cyan);
  min-height: 100%; 
  margin: 0;
}

#app {
  font-family: e-Ukraine, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  font-size: 20px;
}
</style>
