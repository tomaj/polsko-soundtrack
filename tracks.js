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

const TRACKS = [
  {
    title: "Ešte sedem dní",
    file: "audio/sedem-dni.mp3",
    emoji: "⏳",
    accent: "coral",
    lyrics: "",
  },
  {
    title: "Balenie",
    file: "audio/balenie.mp3",
    emoji: "🧳",
    accent: "orange",
    lyrics: "",
  },
  {
    title: "Jízdenky",
    file: "audio/jizdenky.mp3",
    emoji: "🎫",
    accent: "sky",
    lyrics: "",
  },
  {
    title: "Prekvapko",
    file: "audio/prekvapko.mp3",
    emoji: "🎁",
    accent: "purple",
    lyrics: "",
  },
  {
    title: "Drum and bass",
    file: "audio/drum-and-bass.mp3",
    emoji: "🥁",
    accent: "teal",
    lyrics: "",
  },
];
