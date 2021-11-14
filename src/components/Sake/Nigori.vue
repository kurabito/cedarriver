<script>
export default {
    inject: ['bucket']
}
</script>

<template>
    <h2>Nigori</h2>
    <div class="product-text">
        <p>
            Type: Junmai Nigori<br />
            Rice: Calrose<br />
            Semaibuai (rice polish): 60%<br />
            Yeast: #9<br />
            ABV: 14-16%<br />
        </p>
        <p><strong>Nigori</strong> is traditional, unfiltered sake from Cedar River Brewing Company.  The word nigori in Japanese means “cloudy” and this sake lives up to the name.  It has billowing clouds of white sake lees that give it the appearance of a snowy sky on a crisp winter day.</p>
        <p>When fermentation is complete, Nigori is pressed through a coarse mesh, which allows some of the rice lees or sediment to remain. Before serving, gently shake the bottle to mix the lees. The white, cloudy elixir offers fresh flavors of rice and yeast along with subtle fruit aromas and flavors.</p>
        <p>Nigori will keep for up to a year or more, but is best enjoyed fresh.  It should be served chilled and kept refrigerated after opening.</p>
        <p>We hope you enjoy Nigori. Please let us know how you like it!</p>
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
        <img :src="bucket + 'nigori-bottle.png'" alt="Nigori" />
    </div>
</template>
