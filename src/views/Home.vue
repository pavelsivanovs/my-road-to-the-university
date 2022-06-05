<script>
import LanguageSwitcherVue from '../components/LanguageSwitcher.vue';
import Section from '../components/Section.vue'
import sourceData from '../data.json'

export default {
  data() {
    document.title = 'mans ceļš'

    return {
      sections: sourceData.sections
    }
  },
  components: {
    LanguageSwitcherVue,
    Section
  }
}
</script>

<template>
  <div class="header">
    <LanguageSwitcherVue/>
    <div class="content">
      <div class="content-item logo-wrapper">
        <img class="logo" src="../assets/main-page-logo@2x.png" alt="Logo">
      </div>
      <div class="content-item title-wrapper">
        <h1>mans ceļš uz universitāti</h1>
      </div>
    </div>
  </div>

  <div class="main">
    <div class="sections">
      <Section v-for="{key, title} in sections"
               :url="'/section/' + key"
               :section-title="title"/>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--yellow);
  padding: 50px 20px;
}

.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 60px;
  margin: 0 auto;
  max-width: var(--desktop-screen);
  overflow-wrap: break-word;
  word-break: break-word;
}

.content-item {
  flex-grow: 1;
}

.logo {
  max-width: 300px;
  width: 100%;
}

.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-wrapper > h1 {
  font-size: 80px;
  font-weight: 400;
  height: fit-content;
  max-width: 600px;
  text-align: left;
  width: fit-content;
}

.main {
  background-color: var(--magenta);
  padding: 60px 20px;
}

.sections {
  display: flex;
  margin: 0 auto;
  max-width: var(--desktop-screen);
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}

@media screen and (max-width: 768px) {
  .content {
    gap: 0;
  }

  .logo {
    width: 70%;
    float: left;
  }

  .content .title-wrapper > h1 {
    font-size: 60px;
    text-align: right;
  }  
}
</style>