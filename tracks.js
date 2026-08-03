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

Tatry! (hej!) Termály! (hej!) Gubalowka! Krupowky!
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
  {
    title: "Balíme!",
    file: "audio/balenie.mp3",
    emoji: "🧳",
    accent: "orange",
    lyrics: `Zoznam! Kufor! Zips!
POĽSKO!

Skriňa je dokorán a všetko letí von,
kufre sú na zemi a začína sa hon.
Tričká a kraťasy a mikina na chlad,
plavky idú navrch, tie chcem mať prvé v rad.
Krém, čiapka, okuliare, to je povinnosť,
bez nich je z dovolenky rýchlo iba zlosť.

Doklady? MÁME!
Nabíjačky? MÁME!
Plavky? MÁME!
Plyšáky? ...počkať!

Bal, bal, bal, až kým sa to zapne,
tlač, tlač, tlač, nech to všetko sadne.
Kufre v aute, o chvíľu vyrážame,
POĽSKO! POĽSKO! A nič nenecháme!

Plyšáky sú svätá vec, tie nesmú chýbať,
bez nich sa v cudzej posteli nedá spávať.
Tablety do auta, nabité do plna,
rozprávky stiahnuté a cesta pokojná.
Knižky, pastelky a hračky, celá taška,
bez nich je z tej cesty jedna veľká kaša.
Kefky a pyžamá, ponožiek je veda,
v Krakove však zistíš, že chýbajú, beda.

Lekárnička? MÁME!
Zlotky? MÁME!
Pršiplášť? MÁME!
Zubné kefky? ...počkať!

Bal, bal, bal, až kým sa to zapne,
tlač, tlač, tlač, nech to všetko sadne.
Kufre v aute, o chvíľu vyrážame,
POĽSKO! POĽSKO! A nič nenecháme!

Kufor sa nezatvára, tak si naň teda sadnem,
zips ide po milimetri, ešte kúsok, zvládnem.
Tlačím a dýcham a prosím, ešte chvíľu drž sa,
ešte jeden centimeter, kufor môj, nevzdaj sa!

Klik! Je to! Hotovo! Konečne je pokoj,
zoznam je odškrtnutý, dnes už žiadny boj.
A vtedy z detskej izby zaznie tichý hlások:
„A kde mám plyšáka?"
...otváram to znova.

Bal, bal, bal, až kým sa to zapne,
tlač, tlač, tlač, nech to všetko sadne.
Kufre v aute, o chvíľu vyrážame,
POĽSKO! POĽSKO! A nič nenecháme!

Deti sú vzadu, kufre v aute, ideme,
čo sme zabudli, to niekde cestou kúpime.
Zoznam letí do koša, už ho nechcem mať,
POĽSKO! POĽSKO! Konečne sa ideme hrať!`,
  },
];
