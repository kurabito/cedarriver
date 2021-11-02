<script>
export default {
  name: 'Home',
  data() {
    return {
      // bucket: "https://cedarriver.s3.us-west-2.amazonaws.com/"
    }
  },
  computed: {
    imageURI() {
      const bucket = "https://cedarriver.s3.us-west-2.amazonaws.com/"
      const today = new Date()
      const month = today.getMonth()
      const date = today.getDay()
      // Month is zero based -- January = 0
      if (month < 2 || month == 2 && date <= 21) {
        return bucket + "nigori.jpg" 
      }
      if (month < 5 || month == 5 && date <= 21) {
        return bucket + "nama.jpg" 
      }
      if (month < 8 || month == 8 && date <= 21) {
        return bucket + "junmai.jpg" 
      }
      if (month < 11 || month == 11 && date <= 21) {
        return bucket + "taru.jpg" 
      }
      return bucket + "nigori.jpg"
      // return "https://cedarriver.s3.us-west-2.amazonaws.com/banner.jpg"
    }
  }
  // const imageURI = "https://cedarriver.s3.us-west-2.amazonaws.com/banner.jpg"
}
</script>

<template>
  <img v-bind:src="imageURI" alt="Sake Images" />
</template>

<style scoped>
  img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
</style>