<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/sake">Sake</router-link>
    <router-link to="/find">Find</router-link>
    <router-link to="/contact">Contact</router-link>
    <!-- <asp:HyperLink ID="HomeLink" runat="server" NavigateUrl="~/Default.aspx" CssClass="menuItem" style="margin-left: 20px;">Home</asp:HyperLink>
    <asp:HyperLink ID="AboutLink" runat="server" NavigateUrl="~/About.aspx" CssClass="menuItem">About</asp:HyperLink>
    <asp:HyperLink ID="NewsLink" runat="server" NavigateUrl="~/News.aspx" CssClass="menuItem">News</asp:HyperLink>
    <asp:HyperLink ID="SakeLink" runat="server" NavigateUrl="~/Sake.aspx" CssClass="menuItem">Sake</asp:HyperLink>
    <asp:HyperLink ID="FindLink" runat="server" NavigateUrl="~/Find.aspx" CssClass="menuItem">Find</asp:HyperLink>
    <asp:HyperLink ID="ContactLink" runat="server" NavigateUrl="~/Contact.aspx" CssClass="menuItem">Contact</asp:HyperLink> -->
  </div>
  <div>
      <img src="https://cedarriver.s3.us-west-2.amazonaws.com/banner.jpg" alt="Cedar River Brewing Company" title="Cedar River Brewing Company" width="640" height="72" />
  </div>
  <main>
    <router-view />
  </main>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  color: red
}
</style>
