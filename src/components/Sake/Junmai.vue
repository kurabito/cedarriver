<script>
export default {
    inject: ['bucket']
}
</script>

<template>
    <h2>Junmai</h2>
    <div class="product-text">
        <p>
            Type: Junmai Muroka<br />
            Rice: Calrose<br />
            Semaibuai (rice polish): 60%<br />
            Yeast: #9<br />
            ABV: 14-16%<br />
        </p>
        <p><strong>Junmai</strong> is luscious, flavorful sake from Cedar River Brewing Company. The word junmai in Japanese means “pure rice” and designates sake which has been made only from water, rice, koji and yeast. No other ingredients have been added.</p>
        <p>When fermentation is complete, Junmai is pressed through cotton bags to remove most of the rice lees. Many types of sake are filtered after pressing to remove any remaining rice sediment, but Junmai is unfiltered (muroka) to preserve as much aroma and flavor as possible.</p>
        <p>Junmai will keep for up to a year or more, but is best enjoyed fresh. It should be served chilled and kept refrigerated after opening.</p>
        <p>We hope you enjoy Junmai. Please let us know how you like it!</p>
        <img :src="bucket + 'signature.jpg'" alt="Jeff James" />
        <p>
            Jeff James<br />
            Owner and Brewer<br />
            Cedar River Brewing Company<br />
            Seattle, Washington, USA<br />
            www.cedarriverbrewing.com<br />
        </p>
    </div>

    <div class="product-image">
        <img :src="bucket + 'junmai-bottle.png'" alt="Junmai" />
    </div>
</template>

<style scoped>
img {
    max-width: 200px;
}
.left {
    float: left;
}
</style>