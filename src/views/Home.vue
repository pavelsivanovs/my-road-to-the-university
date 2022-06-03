<template>
    <div class="home">
        <h1>Labdien!</h1>
    </div>
</template>

<style scoped>
.header {
  background-color: var(--yellow);
  padding: 50px 0;
}

.content {
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin: 0 auto;
  max-width: var(--desktop-screen);
}

.content-item {
  flex-grow: 1;
}

.logo {
  max-width: 300px;
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

.sections {
  display: flex;
  margin: 0 auto;
  max-width: var(--desktop-screen);
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
}

.main {
  background-color: var(--magenta);
  padding: 100px 0;
}
</style>