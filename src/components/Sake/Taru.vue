<script>
export default {
    inject: ['bucket']
}
</script>

<template>
    <h2>Taru</h2>
    <div class="product-text">
        <p>
            Type: Junmai Taru<br />
            Rice: Calrose<br />
            Semaibuai (rice polish): 60%<br />
            Yeast: #9<br />
            ABV: 14-16%<br />
        </p>
        <p>Traditionally, sake was stored in cedar casks or taru, which imparted a spicy, woody aroma and flavor. Sake made in this style is called taruzake and harkens back to an earlier day in sake brewing.</p>
        <p>Our <strong>Taru</strong> is made in this tradition, but with a twist. Instead of using Japanese cedar, we use local Western Red cedar. The result is similar, but with a distinctive Pacific Northwest touch.</p>
        <p>Taru will keep for up to a year or more, but is best enjoyed fresh.  It should be served chilled and kept refrigerated after opening.</p>
        <p>We hope you enjoy Taru. Please let us know how you like it!</p>
        <p><img id="signature" :src="bucket + 'signature.jpg'" alt="Jeff James" /></p>
        <p>
            Jeff James<br />
            Owner and Brewer<br />
            Cedar River Brewing Company<br />
            Seattle, Washington, USA<br />
            www.cedarriverbrewing.com<br />
        </p>
    </div>
    <div class="product-image">
        <img :src="bucket + 'taru-bottle.jpg'" alt="Taru" />
    </div>
</template>
