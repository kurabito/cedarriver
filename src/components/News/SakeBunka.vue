<script>
export default {
  name: 'SakeBunka',
  data() {
    return {
      bucket: "https://cedarriver.s3.us-west-2.amazonaws.com/"
    }
  }
}
</script>

<template>
    <h3>Sake Bunka, Yamada, December 10, 2014</h3>
    <p>
        <a :href="bucket + 'sake-bunka-cover.jpg'" target="_blank"><img :src="bucket + 'sake-bunka-cover.jpg'" alt="Sake Bunka magazine cover" /></a>
        <a :href="bucket + 'sake-bunka-article.jpg'" target="_blank"><img :src="bucket + 'sake-bunka-article.jpg'" alt="Sake Bunka magazine article" /></a>
    </p>
    <br />
    <p>Article translation courtesy of Marika Yoshikawa.</p>
    <br />
    <p>I found easily “Sakenomi” (Sake drinker) at the Downtown Seattle. “Sakenomi” is the counter bar, specialized Japanese Sake. This bar also sell their sake too.</p>
    <p>“Hi, are you from Japan?”</p>
    <p>The master of the Japanese bar, Johnny Stroud welcomed me with smile. He taught English in Iwate prefecture, the north part in Japan and he has delicious sake in the prefecture. (Iwate is famous for Japanese Sake)  Thanks to his experiences, he served me good conditioned Sake. However, there is no food in Sakenomi. People who want to have only good and inexpensive sake, which is called Kakuuchi, come to the bar every night.</p>
    <p>The next day, I went to “Cedar River Sake”, a Japanese Sake manufacturing in Seattle. Johnny strongly recommend me to go there. Jeff James, the owner of the company makes Sake by himself in his brewery, looks like a garage.</p>
    <p>He makes sake from California rice, which is 60% polished, and with Yeast No. 9.</p>
    <p>He makes three kinds of Sake, which are Nama (crude), Nigori (cloudy) and Junmai (100% rice). Initially he made beer as a hobby and he got interested in Sake. Thus he makes sake using the machine for making beer by learning by watching others. Then, he decided to start his business of Sake, considering it’s interesting and promising.</p>
    <p>Year by year, the amount of sake’s export is increasing and it is said that sake goes into global market. However, I think we can say that the true meaning of globalization, this is when the Sake manufacturing companies like Cedar River appear, and these companies make Sake using local ingredient and local people drink the sake.</p>
</template>
