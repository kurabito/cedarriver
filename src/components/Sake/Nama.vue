<script>
export default {
    inject: ['bucket']
}
</script>

<template>
    <h2>Nama</h2>
    <div class="product-text">
        <p>
            Type: Junmai Nama Muroka<br />
            Rice: Calrose<br />
            Semaibuai (rice polish): 60%<br />
            Yeast: #9<br />
            ABV: 14-16%<br />
        </p>
        <p><strong>Nama</strong> is the first sake brewed and sold by Cedar River Brewing Company. It is pure rice (junmai) sake, meaning no distilled alcohol or any ingredients other than water, rice, koji and yeast have been used to make it. It is unpasteurized (nama) to retain the bright and fresh flavor and aroma of sake in its most natural and original form.</p>
        <p>When fermentation is complete, Nama is pressed through cotton bags to remove most of the rice lees. After pressing, some sake is filtered to remove any remaining rice sediment, but Nama is unfiltered (muroka) to preserve as much aroma and flavor as possible. </p>
        <p>This is sake at its freshest. It should be kept refrigerated and enjoyed as soon as possible, especially after opening.</p>
        <p>We hope you enjoy Nama. Please let us know how you like it!</p>
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
        <img :src="bucket + 'nama-bottle.jpg'" alt="Nama" />
    </div>
</template>
