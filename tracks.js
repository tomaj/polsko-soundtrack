/*
 * ────────────────────────────────────────────────────────────────
 *  SOUNDTRACK — zoznam pesničiek
 * ────────────────────────────────────────────────────────────────
 *  Pridanie novej pesničky = jeden nový objekt do poľa `TRACKS`:
 *
 *    1. Nahraj MP3 do priečinka  audio/
 *    2. Pridaj riadok sem dole:
 *
 *         {
 *           title: "Názov pesničky",
 *           file: "audio/nazov-suboru.mp3",
 *           emoji: "🎵",            // ikonka na "obale"
 *           accent: "teal",          // coral | orange | yellow | green | teal | sky | purple | pink
 *           lyrics: `Sem príde text…`  // nepovinné — nechaj "" ak text ešte nemáš
 *         },
 *
 *  Poradie v zozname = poradie na stránke.
 * ────────────────────────────────────────────────────────────────
 */

/*
 *  Koľko "čoskoro" (zamknutých) slotov ukázať pod zoznamom — evokuje album,
 *  ktorý vychádza postupne. Daj 0, keď už bude kompletný.
 */
const UPCOMING = 3;

const TRACKS = [
  {
    title: "Ešte sedem dní",
    file: "audio/sedem-dni.mp3",
    emoji: "⏳",
    accent: "coral",
    lyrics: `Ticho... kufre ešte spia.
Ale niečo sa už blíži.
Sedem dní! (POĽ-SKO!)
Šesť dní! (POĽ-SKO!)
Motor zareve, mapa svieti v tme...
POĽ-SKO! POĽ-SKO! Poď!

Kufor v noci cvakne, mapa svieti v tme, (hej!)
štyri tiene v aute a už na ceste sme. (POĽSKO!)
Beskydy sa budia, hmla sa dvíha ponad les,
vodopád nám zahučí: „Kto sa bojí, ten sem nelez!"
Daniel príde blízko, sokol krúži nad nami,
lanovka nás vytiahne až vysoko nad stromami.

Ruky hore! (hore!)
Hlasy von! (von!)
Raz, dva, tri...
POĽ-SKO!

POĽ-SKO! (POĽ-SKO!) hu-ha, hu-ha!
Sedem dní a potom cesta sa nám začína,
štyri kufre, štyri srdcia, jedna rodina!
POĽ-SKO! (POĽ-SKO!) drak sa nás už bojí,
lanovka nás vytiahne až tam, kde nebo stojí.
POĽ-SKO! POĽ-SKO! my už letíme,
raz, dva, tri a nikdy nezastavíme!

Zator je zem, kde dino dupe medzi stromami, (hej!)
kolotoče točia nebo priamo nad hlavami. (POĽSKO!)
Krakov, hradná brána, drak si fúkne oheň von,
z veže zahrá trubač a k tomu bije zvon.
Praclík máme v ruke, ešte celý hreje,
najväčšie námestie v Európe sa nám smeje.

Ruky hore! (hore!)
Hlasy von! (von!)
Raz, dva, tri...
POĽ-SKO!

POĽ-SKO! (POĽ-SKO!) hu-ha, hu-ha!
Sedem dní a potom cesta sa nám začína,
štyri kufre, štyri srdcia, jedna rodina!
POĽ-SKO! (POĽ-SKO!) drak sa nás už bojí,
lanovka nás vytiahne až tam, kde nebo stojí.
POĽ-SKO! POĽ-SKO! my už letíme,
raz, dva, tri a nikdy nezastavíme!

TOMAJ: volant v ruke, osemsto kilometrov, žiadny strach! (POĽSKO!)
JANINKA: plán, voda, plavky, za nami zostáva iba prach! (POĽSKO!)
MIA: šesť rokov, oči ako reflektory, ja vidím aj v tme! (POĽSKO!)
MATKO: štyri roky, dino lovec, počuť ma až k vám, tu sme! (POĽSKO!)
Tatry! (hej!) Termály! (hej!) Gubałówka! Krupówky!
Tri... dva... jeden... POĽ-SKO!

POĽ-SKO! (POĽ-SKO!) hu-ha, hu-ha!
Sedem dní a potom cesta sa nám začína,
štyri kufre, štyri srdcia, jedna rodina!
POĽ-SKO! (POĽ-SKO!) tobogán nás točí,
slnko nad Tatrami nám svieti rovno do očí.
POĽ-SKO! POĽ-SKO! my už letíme,
raz, dva, tri a nikdy nezastavíme!

Sedem dní...
šesť...
päť...
...už to začína.
POĽ-SKO! (POĽ-SKO!) 🔥`,
  },
  {
    title: "Balenie",
    file: "audio/balenie.mp3",
    emoji: "🧳",
    accent: "orange",
    lyrics: `Ticho... kufre ešte spia
Ale niečo sa už blíži
Sedem dní! (POĽ-SKO!)
Šesť dní! (POĽ-SKO!)
Motor zareve, mapa svieti v tme
POĽ-SKO! POĽ-SKO! Poď!

Kufor v noci cvakne, mapa svieti v tme (hej!)
Štyri tiene v aute a už na ceste sme (POĽSKO!)
Beskydy sa budia, hmla sa dvíha ponad les
Vodopád nám zahučí: kto sa bojí, ten sem nelez!
Daniel príde blízko, sokol krúži nad nami
Lanovka nás vytiahne až vysoko nad stromami

Ruky hore! (hore!)
Hlasy von! (von!)
Raz, dva, tri...
POĽ-SKO!

POĽ-SKO! (POĽ-SKO!) hu-ha, hu-ha!
Sedem dní a potom cesta sa nám začína
Štyri kufre, štyri srdcia, jedna rodina!
POĽ-SKO! (POĽ-SKO!) drak sa nás už bojí
Lanovka nás vytiahne až tam, kde nebo stojí
POĽ-SKO! POĽ-SKO! my už letíme
Raz, dva, tri a nikdy nezastavíme!

Zator je zem, kde dino dupe medzi stromami (hej!)
Kolotoče točia nebo priamo nad hlavami (POĽSKO!)
Krakov, hradná brána, drak si fúkne oheň von
Z veže zahrá trubač a k tomu bije zvon
Praclík máme v ruke, ešte celý hreje
Najväčšie námestie v Európe sa nám smeje

Ruky hore! (hore!)
Hlasy von! (von!)
Raz, dva, tri...
POĽ-SKO!

POĽ-SKO! (POĽ-SKO!) hu-ha, hu-ha!
Sedem dní a potom cesta sa nám začína
Štyri kufre, štyri srdcia, jedna rodina!
POĽ-SKO! (POĽ-SKO!) drak sa nás už bojí
Lanovka nás vytiahne až tam, kde nebo stojí
POĽ-SKO! POĽ-SKO! my už letíme
Raz, dva, tri a nikdy nezastavíme!

Volant v ruke, osemsto kilometrov, žiadny strach! (POĽSKO!)
Plán, voda, plavky, za nami zostáva iba prach! (POĽSKO!)
Šesť rokov, oči ako reflektory, ja vidím aj v tme! (POĽSKO!)
Štyri roky, dino lovec, počuť ma až k vám, tu sme! (POĽSKO!)

Tatry! (hej!) Termály! (hej!) Gubałówka! Krupówky!
Tri... dva... jeden... POĽ-SKO!

POĽ-SKO! (POĽ-SKO!) hu-ha, hu-ha!
Sedem dní a potom cesta sa nám začína
Štyri kufre, štyri srdcia, jedna rodina!
POĽ-SKO! (POĽ-SKO!) tobogán nás točí
Slnko nad Tatrami nám svieti rovno do očí
POĽ-SKO! POĽ-SKO! my už letíme
Raz, dva, tri a nikdy nezastavíme!

Sedem dní...
šesť...
päť...
...už to začína
POĽ-SKO! (POĽ-SKO!)`,
  },
];
