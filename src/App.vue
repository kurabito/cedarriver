<script>
// import Home from "./components/Home.vue";
export default {
    name: "App",
    // data() {
    //   return {
    //     bucket: "https://cedarriver.s3.us-west-2.amazonaws.com/"
    //   }
    // }
    inject: ["bucket"],
    // components: { Home }
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/sake">Sake</router-link>
    <router-link to="/find">Find</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <main>
    <!-- <img src="https://cedarriver.s3.us-west-2.amazonaws.com/banner.jpg" alt="Cedar River Brewing Company" title="Cedar River Brewing Company" /> -->
    <img :src="bucket + 'banner.jpg'" alt="Cedar River Brewing Company" title="Cedar River Brewing Company" />
    <router-view />
  </main>
</template>

<style>
#app {
  font-family: Courier, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	text-align: center;
  color: #454746;
}
a {
  text-decoration: none;
  color: Red;
}
a:hover {
	text-decoration : underline
}
nav > a {
  margin-right: 15px;
  font-size: 12px;
  color: black;
}
.router-link-active {
  color: red
}
.dead-link {
  color: red
}
main
{
	margin: 0 auto 10px auto;
  max-width: 720px;
}
h3, p {
  text-align: left;
}
img {
  max-width: 100%;
  max-height: auto;
  margin-top: 10px;
}
#news-items {
	margin: auto;
  max-width: 80%;
}
.product-text {
  max-width: 60%;
  float: left; 
}
.product-image {
  max-width: 40%;
  float: right; 
}
#signature {
  max-width: 200px;
}
#social {
	margin: auto;
}
#social > a {
  padding: 20px;
}
</style>