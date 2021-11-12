<script>
export default {
  name: 'Home',
  // data() {
  //   return {
  //     // bucket: "https://cedarriver.s3.us-west-2.amazonaws.com/"
  //   }
  // },
  inject: ['bucket'],
  computed: {
    imageName() {
      // const bucket = "https://cedarriver.s3.us-west-2.amazonaws.com/"
      // const bucket = this.bucket
      const today = new Date()
      const month = today.getMonth()
      const date = today.getDay()
      // Month is zero based -- January = 0
      if (month < 2 || month == 2 && date <= 21) {
        return "nigori.jpg" 
      }
      if (month < 5 || month == 5 && date <= 21) {
        return "nama.jpg" 
      }
      if (month < 8 || month == 8 && date <= 21) {
        return "junmai.jpg" 
      }
      if (month < 11 || month == 11 && date <= 21) {
        return "taru.jpg" 
      }
      return "nigori.jpg"
    }
  }
}
</script>

<template>
  <img :src="bucket + imageName" alt="Sake Images" />
</template>
