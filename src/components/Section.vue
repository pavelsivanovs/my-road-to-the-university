<script>
import { RouterLink } from 'vue-router'

export default {
    props: [
        'sectionTitle',
        'url'
    ],
    components: [
        RouterLink
    ]
}
</script>

<template>
    <RouterLink :to=url class="section">
        <div class="title">{{ sectionTitle }}</div>
    </RouterLink>
</template>

<style scoped>
.section {
    background-image: url(../assets/images/section-bubble.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 300px;
    height: 225px;
    text-align: left;
    font-family: KyivPost, serif;
    font-size: 60px;
    line-height: 50px;
    color: #000;
    text-decoration: none;
    overflow-wrap: break-word;
    word-break: break-word;
}

.section:hover {
    background-image: url(../assets/images/section-yellow.png);
    text-decoration: underline;
    text-decoration-thickness: 5px;
}

.title {
    margin: 20px;
    margin-left: 60px;
}
</style>