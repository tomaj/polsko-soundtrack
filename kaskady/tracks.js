/*
 * ────────────────────────────────────────────────────────────────
 *  KASKÁDY — zoznam pesničiek
 * ────────────────────────────────────────────────────────────────
 *  Rovnaký formát ako hlavný tracks.js — pridanie novej pesničky
 *  = nový objekt do poľa `TRACKS` (MP3 daj do audio/kaskady/).
 *
 *  emoji  = notový znak (♪ ♫ ♬ ♩), nie farebné emoji — kvôli vizuálu
 *  accent = tan | slate | forest | sage  (paleta hotela Kaskády)
 * ────────────────────────────────────────────────────────────────
 */

const UPCOMING = 0;

const ALBUM = { title: "Kaskády", artist: "Alika · Kajko · Veve" };

/* typografické ikonky namiesto farebných emoji — kvôli vizuálu stránky */
const PAGE_ICONS = { lyrics: "¶", download: "↓" };

const TRACKS = [
  {
    title: "¡Kaskády, Kaskády!",
    file: "/audio/kaskady/kaskady-2.mp3",
    emoji: "♫",
    accent: "tan",
    lyrics: `Z Bratislavy vyrážajú, motor pekne vrčí,
Alika má okuliare, Kajko za volantom mrčí.
Z Prešova sa Veve rúti, plyn až na podlahu,
lebo počula, že ráno bude bufet na dosahu.

Tri kufre, jeden cieľ a jeden veľký hlad,
Kaskády, drž sa pevne, my vás ideme mať rád!

¡Kaskády, Kaskády! Ay, dnes večer nespíme,
tri poháre do vzduchu a všetko vypijeme.
¡Kaskády, Kaskády! Tancuje aj recepcia,
prišli k vám traja blázni - a to je najlepšia akcia!

Na mini golfe vonku sa dnes bude diať dráma,
Alika si palicu berie ako veľká dáma.
Kajko sľubuje, že dnes to celé otočí,
no Alika ho nabije, kým otvorí oči.

¡Kaskády, Kaskády! Ay, dnes večer nespíme,
tri poháre do vzduchu a všetko vypijeme.
¡Kaskády, Kaskády! Tancuje aj recepcia,
prišli k vám traja blázni - a to je najlepšia akcia!

Ráno sa dvere bufetu slávnostne otvoria,
Veve vojde dnu a kuchári sa zapotia.
Vajcia, syr, palacinky, šunka a aj torta,
a šéfkuchár už kričí: señorita, basta!

Uno - biela guľa padne rovno do lúzy,
dos - Kajko kričí ¡soy campeón! a nemá k tomu dôvody,
tres - Alika to natáča a smeje sa jak blázon,
cuatro - Veve ešte je, veď ráno príde za rohom.

V kolibe nám oheň praská, vôňa ide von,
za oknom sa zíde stádo srniek ako na balkón.
Pozerajú, čo tí traja vonku vystrájajú,
a potichu si medzi sebou o nás rozprávajú.

Masáž, para, wellness a telo hlási: sí,
Kajko chrápe na lehátku, o revanši sní.
O mačičku sa doma Janinka nám stará,
tak žiadny stres, mi amigo - len bazén a gitara.

¡Kaskády, Kaskády! Ay, dnes večer nespíme,
tri poháre do vzduchu a všetko vypijeme.
¡Kaskády, Kaskády! Tancuje aj recepcia,
prišli k vám traja blázni - a to je najlepšia akcia!

¡Kaskády, Kaskády! Adios, už ideme,
ale o rok v ten istý deň sa sem zas vrátime.
¡Ay, ay, ay... Alika, Kajko, Veve!`
  },
  {
    title: "Uno, dos, tres",
    file: "/audio/kaskady/kaskady-3.mp3",
    emoji: "♬",
    accent: "slate",
    lyrics: `Uno - biela guľa padne rovno do lúzy,
Z Bratislavy vyrážajú, motor pekne vrčí,
Alika je za volantom, Kajko vedľa nej mrčí.
Z Prešova sa Veve rúti, plyn až na podlahu,
lebo počula, že ráno bude bufet na dosahu.

Tri kufre, jeden cieľ a jeden veľký hlad,
Kaskády, drž sa pevne, my vás ideme mať rád!

¡Kaskády, Kaskády! Ay, dnes večer nespíme,
tri poháre do vzduchu a všetko vypijeme.
¡Kaskády, Kaskády! Tancuje aj recepcia,
prišli k vám traja blázni - a to je najlepšia akcia!

Na mini golfe vonku sa dnes bude diať dráma,
Alika si palicu berie ako veľká dáma.
Kajko sľubuje, že dnes to celé otočí,
no Alika ho nabije, kým otvorí oči.

¡Kaskády, Kaskády! Ay, dnes večer nespíme,
tri poháre do vzduchu a všetko vypijeme.
¡Kaskády, Kaskády! Tancuje aj recepcia,
prišli k vám traja blázni - a to je najlepšia akcia!

Ráno sa dvere bufetu slávnostne otvoria,
Veve vojde dnu a kuchári sa zapotia.
Vajcia, syr, palacinky, šunka a aj torta,
a šéfkuchár už kričí: señorita, basta!

Uno - biela guľa padne rovno do lúzy,
dos - Kajko kričí ¡soy campeón! a nemá k tomu dôvody,
tres - Alika to natáča a smeje sa jak blázon,
cuatro - Veve ešte je, veď ráno príde za rohom.

V kolibe nám oheň praská, vôňa ide von,
za oknom sa zíde stádo srniek ako na balkón.
Pozerajú, čo tí traja vonku vystrájajú,
a potichu si medzi sebou o nás rozprávajú.

Masáž, para, wellness a telo hlási: sí,
Kajko chrápe na lehátku, o revanši sní.
O mačičky sa doma Janinka nám stará,
tak žiadny stres, mi amigo - len bazén a gitara.

¡Kaskády, Kaskády! Ay, dnes večer nespíme,
tri poháre do vzduchu a všetko vypijeme.
¡Kaskády, Kaskády! Tancuje aj recepcia,
prišli k vám traja blázni - a to je najlepšia akcia!

¡Kaskády, Kaskády! Adios, už ideme,
ale o rok v ten istý deň sa sem zas vrátime.
¡Ay, ay, ay... Alika, Kajko, Veve!`
  },
  {
    title: "Tri cesty, jeden večer",
    file: "/audio/kaskady/kaskady-1.mp3",
    emoji: "♪",
    accent: "forest",
    lyrics: `Ešte je tma a celé mesto tvrdo spí,
a v aute sa nám o Kaskádach pekne sní.
Alica a Kaiko z Bratislavy ráno idú,
z Prešova ide Veve - tri cesty sa nám zídu.

Hotel nás už víta a v oknách svetlo svieti,
zložíme kufre a čas nám odrazu inak letí.
Prvý drink sa zaiskrí, sklo tíško zazvoní,
a večer sa nám v ústrety pomaly ukloní.

Nechaj mesto za nami, nech ostane tam kdesi,
tu sú len hory, ticho a tri smiechy v lese.

Kaskády, Kaskády, dokorán nám otvor bránu,
nechaj svetlo horieť, kým sa vrátim k svojim snom.
Kaskády, Kaskády, od večera až k ránu -
tri srdcia, jeden stôl a jeden spoločný dom.

Gule na zelenom súkne ticho cinkajú,
tágo v ruke, chvíľa pred úderom utíchne.
Poháre sa v pološere lesknú, iskria, hrajú,
a noc je ešte mladá, ešte sladko vzdychne.

Vonku stúpa para z vody hore k hviezdam,
na všetky svoje starosti dnes večer zabúdam.
Vnútri nás hladina kolíše sem a tam,
a celý tento večer patrí iba nám.

Kaskády, Kaskády, dokorán nám otvor bránu,
nechaj svetlo horieť, kým sa vrátim k svojim snom.
Kaskády, Kaskády, od večera až k ránu -
tri srdcia, jeden stôl a jeden spoločný dom.

Na mini golfe vonku padne verdikt konečne,
Alica minule Kajka zložila nešetrne.
Dnes stojí proti nej a v očiach oheň má,
veď revanš je revanš a ten sa len tak nedá.

Ráno je stôl ako sviatok, všetkého je dosť,
Veve nosí plné taniere a v očiach má radosť.
Zje to celé do poslednej omrvinky, ladne,
a človek fakt nechápe, ako to všetko zvládne.

V kolibe praská oheň, drevo tíško dýcha,
obed aj večera a k tomu kus ticha.
Za oknom stoja srnky a ticho hľadia na nás,
akoby strážili ten večer aj ten čas.

Prechádzky po lese, kde ihličie vonia,
masáž, para, ticho - starosti nás už nehonia.
O mačičku je postarané, Janinka ju stráži,
tak Kajko, neboj sa, už nič ťa nezaťaží.

Kaskády, Kaskády, ešte raz nám otvor bránu,
nechaj hviezdy svietiť, kým sa vrátim k svojim snom.
Kaskády, Kaskády, od večera až k ránu -
tri srdcia, jeden stôl a jeden spoločný dom.

A keď raz zhasnú svetlá a pôjdeme si spať,
zostane tu ticho, čo sa bude na nás smiať.
Tri cesty, jeden večer, jedno svetlo v tme,
a že sa sem raz vrátime - to všetci dobre vieme.
[End: single held guitar note]`
  },
  {
    title: "Kaskády Reggaetón",
    file: "/audio/kaskady/kaskady-4.mp3",
    emoji: "♩",
    accent: "sage",
    lyrics: `Z Bratislavy vyrážajú, (eh)
motor pekne vrčí.
Alika je za volantom,
Kajko vedľa mrčí. (ja, ja)
Z Prešova sa Veve rúti,
plyn až na podlahu,
lebo počula, že ráno
bufet je na dosahu. (¡uy!)

Tri kufre, jeden cieľ
a jeden veľký smäd.
Kaskády, my sme tu
a nejdeme už späť. (¡vamos!)

¡Kaskády! (Kaskády)
Ay, dnes večer nespíme.
¡Kaskády! (Kaskády)
Poháre hore - vypime.
¡Kaskády! (Kaskády)
Dnes je z hotela fiesta.
Tancuje aj bazén,
aj gulečník, aj cesta.

Ay, ay, ay - Alika, Kajko, Veve. (eh, eh)
Ay, ay, ay - Kaskády, ya llegué. (eh, eh)

Mini golf a veľká dráma, (dráma)
Alika je tvrdá dáma. (¡uy!)
Kajko vraví: dnes to zlomím,
dnes ju konečne porazím.
No Alika bez milosti
nabije ho na kosti. (ja, ja)

¡Kaskády! (Kaskády)
Ay, dnes večer nespíme.
¡Kaskády! (Kaskády)
Poháre hore - vypime.
¡Kaskády! (Kaskády)
Dnes je z hotela fiesta.
Tancuje aj bazén,
aj gulečník, aj cesta.

Ráno bufet otvoria,
kuchári sa zapotia.
Vajcia, syr aj palacinky
zmiznú do poslednej omrvinky.
A šéfkuchár už kričí:
señorita, ¡basta! (eh)

Uno - biela guľa presne do diery,
dos - Kajko kričí ¡campeón!, no nikto mu neverí,
tres - Alika ho natáča, to video pôjde svetom,
cuatro - Veve ešte je a noc jej beží letom.

V kolibe nám praská oheň,
vôňa ide rovno von.
Za oknom sa zíde stádo,
srnky ako na balkón.
Pozerajú, čo tí traja
vonku zase vystrájajú.

Masáž, para, wellness - sí,
Kajko chrápe, o revanši sní.
O mačičky sa doma
Janinka nám stará,
tak žiadny stres, mi amigo,
len bazén a gitara.

¡Kaskády! (Kaskády)
Ay, dnes večer nespíme.
¡Kaskády! (Kaskády)
Poháre hore - vypime.
¡Kaskády! (Kaskády)
Dnes je z hotela fiesta.
Tancuje aj bazén,
aj gulečník, aj cesta.

Ay, ay, ay... Alika, Kajko, Veve.
¡Kaskády! Adios... hasta el próximo año. (eh, eh)`
  },
];
