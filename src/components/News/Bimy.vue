<script>
export default {
  name: 'Bimy',
  data() {
    return {
      bucket: "https://cedarriver.s3.us-west-2.amazonaws.com/"
    }
  }
}
</script>

<template>
    <h3>Bimy Magazine, May 2017</h3>
    <p>
        <a :href="bucket + 'bimy-1.jpg'" target="_blank"><img :src="bucket + 'bimy-1.jpg'" alt="Bimy cover" /></a>
        <a :href="bucket + 'bimy-2.jpg'" target="_blank"><img :src="bucket + 'bimy-2.jpg'" alt="Bimy article full page" /></a>
        <a :href="bucket + 'bimy-3.jpg'" target="_blank"><img :src="bucket + 'bimy-3.jpg'" alt="Bimy article top of page" /></a>
        <a :href="bucket + 'bimy-4.jpg'" target="_blank"><img :src="bucket + 'bimy-4.jpg'" alt="Bimy article bottom of page" /></a>
    </p>
</template>
