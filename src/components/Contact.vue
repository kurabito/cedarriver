<script>
export default {
    name: "Contact",
    inject: ["bucket"],
}
</script>

<template>
    <h1>Contact Us</h1>
    <h2>Find Us on Social Media</h2>
    <div id="social">
        <!-- Facebook -->
        <a href="http://www.facebook.com/CedarRiverBrewing" target="_blank" title="Cedar River Brewing Company"><img :src="bucket + 'facebook.png'" alt="Facebook" title="Facebook" /></a>
        <!-- Twitter -->
        <a href="http://twitter.com/CedarRiverSake" target="_blank" title="Cedar River Brewing Company"><img :src="bucket + 'twitter.png'" alt="Twitter" title="Twitter" /></a>
        <!-- Instagram -->
        <a href="http://instagram.com/cedarriver_sake" target="_blank" title="Cedar River Brewing Company"><img :src="bucket + 'instagram.png'" alt="Instagram" title="Instagram" /></a>
    </div>
</template>