<script>
export default {
    name: 'Ibuki',
    inject: ['bucket']
}
</script>

<template>
    <h3>Ibuki, July/August 2014</h3>
    <p>
        <a :href="bucket + 'ibuki.jpg'" target="_blank"><img :src="bucket + 'ibuki.jpg'" alt="Ibuki's Picks" /></a>
    </p>
</template>
