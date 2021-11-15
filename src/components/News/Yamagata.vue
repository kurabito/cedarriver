<script>
export default {
    name: 'Yamagata',
    inject: ['bucket']
}
</script>

<template>
    <h3>Yamagata Local News Article, January 1, 2015</h3>
    <p>
        <a :href="bucket + 'yamagata-article.jpg'" target="_blank"><img :src="bucket + 'yamagata-article.jpg'" alt="Yamagata local news article" /></a>
    </p>
</template>
