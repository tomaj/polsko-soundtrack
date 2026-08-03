# 🎧 POĽSKO 2026 — Soundtrack

Komplementárna stránka k [polska-2026.vercel.app](https://polska-2026.vercel.app/) —
album pesničiek z výletu. Spotify-štýl prehrávač priamo v prehliadači:
pusti / pozastav, previň (seek), stiahni, prečítaj text.

Čisto statická stránka (žiadny build) — HTML + CSS + vanilla JS.

## 📁 Štruktúra

```
index.html      – stránka
styles.css      – vizuál (nadväzuje na sesterský web)
app.js          – logika prehrávača
tracks.js       – ZOZNAM PESNIČIEK  ← toto upravuješ
audio/          – MP3 súbory
favicon.svg
```

## ➕ Pridanie novej pesničky

1. Nahraj MP3 do priečinka `audio/` (napr. `audio/nova-pesnicka.mp3`).
2. Otvor `tracks.js` a pridaj objekt do poľa `TRACKS`:

   ```js
   {
     title: "Názov pesničky",
     file: "audio/nova-pesnicka.mp3",
     emoji: "🎵",          // ikonka na obale
     accent: "teal",        // coral|orange|yellow|green|teal|sky|purple|pink
     lyrics: `Prvý riadok
   Druhý riadok…`,          // nepovinné — nechaj "" ak text ešte nemáš
   },
   ```

3. Ulož a nahraj (commit + push). Poradie v zozname = poradie na stránke.

> Dĺžka skladby a celkový čas albumu sa počítajú automaticky z MP3.
> Text sa dá pridať kedykoľvek neskôr — dovtedy tlačidlo 📝 ukáže „čoskoro".

## ▶️ Lokálne spustenie

Statické súbory — stačí HTTP server (kvôli načítaniu MP3):

```bash
python3 -m http.server 5050
# → http://localhost:5050
```

## 🚀 Nasadenie na Vercel

Zero-config statická stránka:

```bash
npm i -g vercel      # ak ešte nemáš
vercel               # náhľad
vercel --prod        # produkcia
```

Alebo prepoj repozitár cez [vercel.com](https://vercel.com) → New Project →
framework preset **Other** (žiadny build command, output = root).

Po nasadení už len prelinkuj obe stránky navzájom (tlačidlo „Späť na itinerár"
už na album smeruje na sesterský web).

## ⌨️ Klávesové skratky

| Klávesa | Akcia |
|---|---|
| `Space` | prehrať / pozastaviť |
| `←` / `→` | previň o 5 s |
| `Shift + ←/→` | predošlá / ďalšia skladba |
| `Esc` | zavrieť text |
