<script>
export default {
    inject: ['bucket']
}
</script>

<template>
    <p>We make four styles of sake. Click on a label for more information.</p>
    <p>
        <router-link to="/sake/junmai"><img :src="bucket + 'junmai-label.jpg'" alt="Junmai" /></router-link>
        <router-link to="/sake/nama"><img :src="bucket + 'nama-label.jpg'" alt="Nama" /></router-link>
    </p>
    <p>
        <router-link to="/sake/nigori"><img :src="bucket + 'nigori-label.jpg'" alt="Nigori" /></router-link>
        <router-link to="/sake/taru"><img :src="bucket + 'taru-label.jpg'" alt="Taru" /></router-link>
    </p>
</template>

<style scoped>
img {
    padding: 12px;
}
</style>