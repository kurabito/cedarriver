<script setup>
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
  <div>
      <img src="https://cedarriver.s3.us-west-2.amazonaws.com/banner.jpg" alt="Cedar River Brewing Company" title="Cedar River Brewing Company" width="640" height="72" />
  </div>
  <main>
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
nav > a {
  margin-right: 15px;
  font-size: 12px;
  color: black;
}
.router-link-active {
  color: red
}
main
{
	margin: 0 auto 10px auto;
  width: 720px;
}
h2, h3, p {
  text-align: left;
}
</style>
