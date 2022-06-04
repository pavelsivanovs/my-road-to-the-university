<script>
import sourceData from '@/data.json'

const getImageUrl = (image) => {
  return new URL(`../assets/images/${image}`, import.meta.url).href
}

export default {
  data() {
    const { key } = this.$route.params
    const {
      title_eng: title,
      text_eng: text, 
      image
    } = sourceData.sections[key]
    const imageUrl = getImageUrl(image)

    document.title = title
    
    return {
      title,
      text,
      imageUrl
    }
  }
}
</script>

<template>
  <div class="header">
    <div class="hero" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <div class="title-wrapper">
        <h1 class="title">{{ title }}</h1>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="content-wrapper">
      <div class="text" v-html="text"></div>
      <router-link class="link" :to="{ name: 'HomeEng' }">return to the main page</router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--yellow);
  position: relative;
}

.hero {
  display: flex;
  align-items: flex-end;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: var(--desktop-screen);
  position: relative;
  min-height: 600px;
  margin: 0 auto;
}

.title-wrapper {
  background-color: var(--cyan);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  width: fit-content;
  margin: 0 auto;
  padding: 20px 20px 20px 20px;
  top: 95%;
}

.title {
  font-family: KyivPost;
  font-size: 80px;
}

.content {
  background-color: var(--magenta);
  padding: 50px 0;
}

.content-wrapper {
  margin: 0 auto;
  max-width: var(--desktop-screen);
  /* width: fit-content; */
}

.text {
  font-size: 20px;
  line-height: 1.5;
  text-align: left;
}

.link {
  color: #000;
  /* font-weight: 800; */
  font-size: 24px;
  text-decoration: none;
  margin: 0 auto;
  margin-top: 40px;
  display: block;
  width: fit-content;
  padding: 20px;
  background-color: var(--yellow);
  border-radius: 50px;
}

.link:hover {
  /* font-weight: 800; */
  /* text-decoration: underline; */
  /* font-family: KyivPost; */
  background-color: var(--cyan);
}
</style>

<style>
.text p {
  margin: 20px 0;
}
</style>

