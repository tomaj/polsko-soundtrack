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
const UPCOMING = 1;

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
  {
    title: "Zlaté leto",
    file: "audio/zlate-leto.mp3",
    emoji: "☀️",
    accent: "yellow",
    lyrics: `Leto dvetisícdvadsaťšesť...
Leto... zlaté leto...

Celý rok sme čakali,
celý rok sa pýtali.
A slnko svieti na tvári,
a všetko okolo žiari.

Leto, leto, zlaté leto,
a svieť nám rovno do očí,
toto leto sa neskončí,
kým sa za ruky držíme
a nikdy ho nepustíme.

Horská voda, mokré vlasy,
a nad vodou naše hlasy.
Večer príde dlhý tieň,
a bol to najdlhší deň.

Leto, leto, zlaté leto,
a svieť nám rovno do očí,
toto leto sa neskončí,
kým sa za ruky držíme
a nikdy ho nepustíme.

Zavri oči, pamätaj,
a tento deň si schovaj,
toto svetlo si nechaj,
a nikdy ho nepúšťaj.

Leto, leto, zlaté leto,
a svieť nám rovno do očí,
toto leto sa neskončí,
kým sa za ruky držíme
a nikdy ho nepustíme,
zlaté leto za Tatrami.

Leto... zlaté leto...`,
  },
  {
    title: "V aute",
    file: "audio/v-aute.mp3",
    emoji: "🚗",
    accent: "green",
    lyrics: `Zafira...
Kufor plný, jeden smer.
Poď.

Šesť ráno, v držiaku stojí káva,
klíma beží, Janinka smer dáva.
Batožinu celú v kufri už máme,
a tristo kilometrov si dnes dáme.
Arašidy po aute lietajú,
a keksy do sedačiek padajú.

V aute! (v aute!)
Plný kufor, dlhá cesta, ideme,
a jeden smer, nič iné už nechceme.
Klíma beží, vzadu vládne bordel,
a ťahá nás ďalej jeden Opel.
V aute! (v aute!)

Vzadu nám bežia dve rozprávky naraz,
keď jedna zhasne, tak je koniec zaraz.
Drobky sú všade, špina, prázdne fľaše,
ale deti sú spokojné, sú naše.
Ešte sto kilometrov do cieľa,
a kávy už veru nemám veľa.

V aute! (v aute!)
Plný kufor, dlhá cesta, ideme,
a jeden smer, nič iné už nechceme.
Klíma beží, vzadu vládne bordel,
a ťahá nás ďalej jeden Opel.
V aute! (v aute!)

Kedy tam už budeme? (Ešte nie!)
Môžem si dať ešte keks? (Zober si!)
Ide ti ten tablet? (IDE!)
Tak dobre. Zafira, poď ďalej.

V aute! (v aute!)
Plný kufor, dlhá cesta, ideme,
a jeden smer, nič iné už nechceme.
Klíma beží, vzadu vládne bordel,
a ťahá nás ďalej jeden Opel.
V aute! (v aute!)
V aute! (v aute!)

Zafira...
ideme.`,
  },
  {
    title: "Zmrzlina a limonáda",
    file: "audio/zmrzlina-a-limonada.mp3",
    emoji: "🍦",
    accent: "pink",
    lyrics: `Uh! Uh-huh!
Zmrzlina... limonáda...
Poď!

Pri stánku už dlho stojím,
a očami sa už prosím.
Ja si dva kopčeky dám,
a ostatné rozdám vám.

Prosím, prosím, prosím ťa,
veď je to len maličkosť!
Dobre, ale potom dosť!

Zmrzlina, limonáda,
a k tomu čokoláda.
Zmrzlina, limonáda,
toto je fakt paráda!
Ešte raz! (ešte raz!)

Palacinka s čokoládou,
a zapijem limonádou.
Brucho ma už trochu bolí,
ale Janinka dovolí.

Prosím, prosím, prosím ťa,
veď je to len maličkosť!
Dobre, ale potom dosť!

Zmrzlina, limonáda,
a k tomu čokoláda.
Zmrzlina, limonáda,
toto je fakt paráda!
Ešte raz! (ešte raz!)

Kto mi zjedol posledný kopček? (Ja nie!)
Kto má nos od čokolády? (Ja nie!)
Kto si pýta ešte jednu? (MY VŠETCI!)
Tak dobre... naposledy!

Zmrzlina, limonáda,
a k tomu čokoláda.
Zmrzlina, limonáda,
toto je fakt paráda!
Ešte raz! (ešte raz!)
Ešte raz! (ešte raz!)

Zmrzlina... limonáda...
naposledy.`,
  },
  {
    title: "Nad oblakmi",
    file: "audio/nad-oblakmi.mp3",
    emoji: "☁️",
    accent: "sky",
    lyrics: `Lanovka sa pohla...
a zrazu je ticho.

Celý rok som doma prala,
celý rok som varievala.
Teraz sedím, nič nerobím,
a vôbec sa tu nenudím.

Budík, káva, kľúče, volant, každý deň ten stres,
a takto to ide stále, aj vlani, aj dnes.
Mail, telefón, porada a ďalší termín, choď,
a doma na mňa čakajú a hovoria: poď!

A teraz...
nič.
Len sedím.

Tri minúty ticha máme,
nikam sa neponáhľame.

Tu hore sme nad oblakmi,
a dolina pod nohami.
Tu hore je dobre sedieť,
len tak dýchať a len vidieť.
Nad oblakmi.

Vidíš tie hory?
(Vidím ich. Vidím.)
Počuješ to ticho?
(Počujem. Počujem.)

Tu hore sme nad oblakmi,
a dolina pod nohami.
Tu hore je dobre sedieť,
len tak dýchať a len vidieť.
Nad oblakmi.

O chvíľu sme dole a deti chcú zmrzlinu,
ale ešte tu máme aspoň polhodinu.
Ešte chvíľu sa pozeraj,
a potom pokojne vstávaj.

Tu hore sme nad oblakmi,
(žiadny mail, žiadny termín, aspoň na pol hodiny)
a dolina pod nohami.
(len lano, vietor a ty vedľa mňa)
Tu hore je dobre sedieť,
(fakt dobre sa tu sedí, fakt dobre sa tu sedí)
len tak dýchať a len vidieť.
Nad oblakmi.
Nad oblakmi.

A dole nás čakajú.
Ešte chvíľu.`,
  },
  {
    title: "Nás je šesť",
    file: "audio/nas-je-sest.mp3",
    emoji: "6️⃣",
    accent: "purple",
    lyrics: `Krakov... večer...
Dvaja ešte chýbajú
(POĽ-SKO!)

Nad Krakovom hodiny, trubač hrá svoj tón,
čakáme pri bráne, kým doznie starý zvon.
Potom spoza rohu, kde stánky voňajú,
dva známe hlasy na nás hlasno volajú.
Teta Veve máva a ujo Rado s ňou,
zo štyroch je zrazu šesť pod krakovskou tmou.

Raz, dva, tri, štyri...
päť...
ŠESŤ!

Šesť! (šesť!) Nás je zrazu šesť!
dvaja noví lovci a to je dobrá zvesť!
Krakov nás dal dokopy, drak sa už bojí,
z dvoch rodín je banda, ktorá pevne stojí!
POĽSKO! (POĽSKO!) naša banda je už celá,
POĽSKO! (POĽSKO!) a cesta bude veselá!

Večer je v Krakove a nikto nechce spať,
lebo zajtra Rabkoland, tam sa bude hrať!
Kolotoče, cukrová vata, detský rev,
a nad tým všetkým letí náš šesťhlasý spev.
Potom cesta stúpa cez tie serpentíny,
a v Zakopanom čakajú nás doliny.

Raz, dva, tri, štyri...
päť...
ŠESŤ!

Šesť! (šesť!) Nás je zrazu šesť!
dvaja noví lovci a to je dobrá zvesť!
Krakov nás dal dokopy, drak sa už bojí,
z dvoch rodín je banda, ktorá pevne stojí!
POĽSKO! (POĽSKO!) naša banda je už celá,
POĽSKO! (POĽSKO!) a cesta bude veselá!

Kto je tu? (Mia!)
Kto je tu? (Matko!)
Kto je tu? (Janinka!)
Kto je tu? (Tomaj!)
Kto je tu? (Teta Veve!)
Kto je tu? (Ujo Rado!)
Šesť lovcov, jedna cesta a jedno slovo:
POĽ-SKO!

Šesť! (šesť!) Nás je zrazu šesť!
dvaja noví lovci a to je dobrá zvesť!
Krakov nás dal dokopy, drak sa už bojí,
z dvoch rodín je banda, ktorá pevne stojí!
POĽSKO! (POĽSKO!) naša banda je už celá,
POĽSKO! (POĽSKO!) a cesta bude veselá!

Šesť...
šesť...
POĽ-SKO!`,
  },
  {
    title: "Drak pod hradom",
    file: "audio/drak-pod-hradom.mp3",
    emoji: "🐉",
    accent: "teal",
    lyrics: `Sto rokov...
sto rokov ticha...
a niekto klope.

Sto rokov spím pod zemou,
s ohňom a s nocou temnou.
Počujem kroky nad hlavou,
chodíte za mojou slávou.

Poď bližšie...
ešte bližšie...
a teraz sa pozeraj.

Drak! (Drak!) ja som drak pod hradom,
Drak! (Drak!) a trasiem sa hladom.
Poď bližšie, poď bližšie ku mne,
a uvidíš, čo je vo tme.

Ovce som jedával večery,
a potom som spal na dne diery.
Vypil som z rieky, čo sa dalo,
a aj tak mi to bolo málo.

Poď bližšie...
ešte bližšie...
a teraz sa pozeraj.

Drak! (Drak!) ja som drak pod hradom,
Drak! (Drak!) a trasiem sa hladom.
Poď bližšie, poď bližšie ku mne,
a uvidíš, čo je vo tme.

Keď fúknem oheň, deti tlieskajú,
a ešte raz si ma zavolajú.
Tak fúknem ešte raz a dosť,
veď aj drak má svoju radosť.

Drak! (Drak!) ja som drak pod hradom,
Drak! (Drak!) a trasiem sa hladom.
Poď bližšie, poď bližšie ku mne,
a uvidíš, čo je vo tme.
Drak! (Drak!)
Drak! (Drak!)

Sto rokov...
a spím ďalej.`,
  },
  {
    title: "Krakovské oko",
    file: "audio/krakovske-oko.mp3",
    emoji: "🎡",
    accent: "coral",
    lyrics: `Krakov!
Šesť nás je!
Poď!

Od rána už ideme,
šesť nás je a vládzeme.
Zbyšek košele, my kávu,
a syfón nám zdvihol hlavu.

Poďme na koleso! (Nie!)
Poďme na koleso! (Nie!)
Ešte raz - koleso! (NIE!)

Koleso! (Koleso!)
Šiesti sme hore, ideme,
a už nikam nevládzeme.
Wawel dole pod nohami,
a celý Krakov je s nami!
Koleso! (Koleso!)

Deti chcú zmrzlinu hneď,
žurek, boršč a potom sleď.
Radko vraví: idem spať,
a Janinka: treba vstať!

Poďme na koleso! (Nie!)
Poďme na koleso! (Nie!)
Ešte raz - koleso! (NIE!)

Koleso! (Koleso!)
Šiesti sme hore, ideme,
a už nikam nevládzeme.
Wawel dole pod nohami,
a celý Krakov je s nami!
Koleso! (Koleso!)

Praclík, hrad a tmavý mrak,
dve sekundy ohňa, drak.
Radko nechcel, no aj tak
teraz mu tam svieti zrak.

Večer. Izba. Všetci sedia.
Ideme?
(Zajtra!)
Ráno otvárajú až o dvanástej.
(...)
Tak teraz.
(TAK TERAZ!)

Koleso! (Koleso!)
Šiesti sme hore, ideme,
a už nikam nevládzeme.
Wawel dole pod nohami,
a celý Krakov je s nami!
Koleso! (Koleso!)
Koleso! (Koleso!)

A nakoniec sme šli.
Radko: to bolo super.
Krakov!`,
  },
];
