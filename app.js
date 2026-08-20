/* ─────────────────────────────────────────────────────────────
   POĽSKO 2026 — Soundtrack  ·  prehrávač
   Závisí od TRACKS (tracks.js)
   ───────────────────────────────────────────────────────────── */
(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const audio     = $("audio");
  const player    = $("player");
  const listEl    = $("tracklist");
  const playBtn   = $("playBtn");
  const prevBtn   = $("prevBtn");
  const nextBtn   = $("nextBtn");
  const seek      = $("seek");
  const curTime   = $("curTime");
  const durTime   = $("durTime");
  const npTitle   = $("npTitle");
  const npCover   = $("npCover");
  const dlBtn     = $("dlBtn");
  const lyricsBtn = $("lyricsBtn");
  const vol       = $("vol");
  const muteBtn   = $("muteBtn");

  const sheet        = $("sheet");
  const sheetTitle   = $("sheetTitle");
  const sheetEmoji   = $("sheetEmoji");
  const sheetLyrics  = $("sheetLyrics");
  const sheetClose   = $("sheetClose");
  const sheetBackdrop= $("sheetBackdrop");

  let current = -1;               // index práve načítanej skladby
  const rows = [];                // <li> elementy podľa indexu
  const durations = [];           // cache dĺžok (sekundy)

  // ── Pomocníci ───────────────────────────────────────────────
  const accentClass = (a) => "a-" + (a || "purple");

  // názov albumu pre lockscreen — stránka ho môže prebiť globálom ALBUM
  const ALBUM_META = (typeof ALBUM === "object" && ALBUM)
    ? ALBUM
    : { title: "Soundtrack", artist: "POĽSKO 2026" };

  // ikonky v zozname — stránka ich môže prebiť globálom PAGE_ICONS
  const ICONS = Object.assign(
    { lyrics: "🎤", download: "⬇" },
    (typeof PAGE_ICONS === "object" && PAGE_ICONS) || {}
  );

  const fmt = (s) => {
    if (!isFinite(s) || s < 0) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ":" + String(sec).padStart(2, "0");
  };

  const slug = (name) =>
    name.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  // ── Vykreslenie zoznamu ─────────────────────────────────────
  function render() {
    listEl.innerHTML = "";
    TRACKS.forEach((t, i) => {
      const li = document.createElement("li");
      li.className = "track " + accentClass(t.accent);
      li.dataset.index = i;
      li.innerHTML = `
        <span class="track-index">${i + 1}</span>
        <span class="track-art">
          ${t.emoji || "🎵"}
          <span class="art-play">▶</span>
        </span>
        <span class="track-body">
          <span class="track-title">${escapeHtml(t.title)}</span>
          <span class="track-meta">
            <span class="now">${t.emoji || "🎵"}</span>
            <span class="dur" data-dur="${i}">–:––</span>
          </span>
        </span>
        <span class="track-actions">
          <button class="tbtn lyrics-btn ${t.lyrics ? "" : "no-lyrics"}"
                  data-tip="${t.lyrics ? "Text piesne" : "Text čoskoro"}" aria-label="Text piesne">${ICONS.lyrics}</button>
          <a class="tbtn" data-tip="Stiahnuť MP3" aria-label="Stiahnuť"
             href="${t.file}" download="${slug(t.title)}.mp3">${ICONS.download}</a>
        </span>`;

      // klik na riadok → prehraj (okrem akčných tlačidiel)
      li.addEventListener("click", (e) => {
        if (e.target.closest(".track-actions")) return;
        if (i === current) togglePlay();
        else play(i);
      });
      li.querySelector(".lyrics-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        openLyrics(i);
      });

      rows[i] = li;
      listEl.appendChild(li);

      // dĺžku načítaj na pozadí (metadata)
      preloadDuration(i, t.file);
    });

    $("trackCount").textContent = TRACKS.length + " " + plural(TRACKS.length);
    renderSoon();
  }

  // ── "Čoskoro" — postupne vychádzajúce skladby ───────────────
  function renderSoon() {
    const n = (typeof UPCOMING === "number" ? UPCOMING : 0);
    const el = $("soon");
    if (!el) return;
    if (n <= 0) { el.hidden = true; el.innerHTML = ""; return; }
    const rows = Array.from({ length: n }, () => `
      <li class="track ghost" aria-disabled="true">
        <span class="track-index">🔒</span>
        <span class="track-art"><span class="ghost-note">♪</span></span>
        <span class="track-body">
          <span class="track-title">Čoskoro…</span>
          <span class="track-meta">Nová skladba pribudne</span>
        </span>
        <span class="soon-pill">Čoskoro</span>
      </li>`).join("");
    el.hidden = false;
    el.innerHTML = `
      <p class="soon-head"><span class="soon-line"></span>🎶 ${n === 1 ? "Ďalšia skladba" : "Ďalšie skladby"}<span class="soon-line"></span></p>
      <ol class="tracklist ghosts">${rows}</ol>
      <p class="soon-note">Album vzniká na cestách — nové pesničky pribúdajú postupne. 🚗✨</p>`;
  }

  function plural(n) {
    if (n === 1) return "skladba";
    if (n >= 2 && n <= 4) return "skladby";
    return "skladieb";
  }

  function preloadDuration(i, file) {
    const a = new Audio();
    a.preload = "metadata";
    a.src = file;
    a.addEventListener("loadedmetadata", () => {
      durations[i] = a.duration;
      const el = listEl.querySelector(`.dur[data-dur="${i}"]`);
      if (el) el.textContent = fmt(a.duration);
      updateTotal();
    });
  }

  function updateTotal() {
    const known = durations.filter((d) => isFinite(d));
    if (known.length === TRACKS.length) {
      const total = known.reduce((s, d) => s + d, 0);
      $("totalTime").textContent = fmt(total) + " min";
    }
  }

  // ── Prehrávanie ─────────────────────────────────────────────
  function play(i) {
    const t = TRACKS[i];
    if (!t) return;
    if (i !== current) {
      current = i;
      audio.src = t.file;
      npTitle.textContent = t.title;
      npCover.innerHTML = `<span>${t.emoji || "🎵"}</span>`;
      // accent prenes na prehrávač (farba seek baru + coveru)
      npCover.className = "np-cover " + accentClass(t.accent);
      player.querySelector(".player-inner").className =
        "player-inner " + accentClass(t.accent);
      dlBtn.href = t.file;
      dlBtn.setAttribute("download", slug(t.title) + ".mp3");
    }
    player.classList.add("show");
    player.setAttribute("aria-hidden", "false");
    audio.play().catch(() => {});
    markActive();
  }

  function togglePlay() {
    if (current < 0) { play(0); return; }
    if (audio.paused) audio.play().catch(() => {}); else audio.pause();
  }

  function next() { play((current + 1) % TRACKS.length); }
  function prev() {
    // <3s → predošlá skladba, inak reštart aktuálnej (ako Spotify)
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    play((current - 1 + TRACKS.length) % TRACKS.length);
  }

  function markActive() {
    rows.forEach((li, i) => {
      li.classList.toggle("active", i === current);
      li.classList.toggle("playing", i === current && !audio.paused);
    });
    playBtn.textContent = audio.paused ? "▶" : "⏸";
  }

  // ── Audio události ──────────────────────────────────────────
  audio.addEventListener("play", markActive);
  audio.addEventListener("pause", markActive);
  audio.addEventListener("ended", next);

  audio.addEventListener("loadedmetadata", () => {
    durTime.textContent = fmt(audio.duration);
    seek.max = Math.floor(audio.duration) || 1000;
  });

  audio.addEventListener("timeupdate", () => {
    if (seeking) return;
    curTime.textContent = fmt(audio.currentTime);
    seek.value = Math.floor(audio.currentTime);
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    seek.style.setProperty("--pct", pct + "%");
  });

  // ── Seek ────────────────────────────────────────────────────
  let seeking = false;
  seek.addEventListener("input", () => {
    seeking = true;
    curTime.textContent = fmt(+seek.value);
    const pct = seek.max ? (seek.value / seek.max) * 100 : 0;
    seek.style.setProperty("--pct", pct + "%");
  });
  seek.addEventListener("change", () => {
    audio.currentTime = +seek.value;
    seeking = false;
  });

  // ── Ovládanie ───────────────────────────────────────────────
  playBtn.addEventListener("click", togglePlay);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  lyricsBtn.addEventListener("click", () => { if (current >= 0) openLyrics(current); });

  // ── Hlasitosť ───────────────────────────────────────────────
  const VOL_KEY = "soundtrack.volume";
  function applyVolume(v, save) {
    v = Math.min(1, Math.max(0, v));
    audio.volume = v;
    if (v > 0) audio.muted = false;
    vol.value = Math.round(v * 100);
    vol.style.setProperty("--pct", vol.value + "%");
    muteBtn.textContent = (audio.muted || v === 0) ? "🔇" : v < 0.5 ? "🔉" : "🔊";
    if (save) { try { localStorage.setItem(VOL_KEY, String(v)); } catch (e) {} }
  }
  vol.addEventListener("input", () => applyVolume(vol.value / 100, true));
  muteBtn.addEventListener("click", () => {
    if (audio.muted || audio.volume === 0) {
      // odtlmiť na poslednú / rozumnú hodnotu
      const restore = audio.volume > 0 ? audio.volume : 1;
      audio.muted = false;
      applyVolume(restore, true);
    } else {
      audio.muted = true;
      muteBtn.textContent = "🔇";
      vol.style.setProperty("--pct", "0%");
    }
  });
  // iOS ignoruje programové nastavenie hlasitosti (ovláda sa HW tlačidlami)
  // — ak sa audio.volume nedá zmeniť, skry ovládanie, nech nemätie.
  audio.volume = 0.5;
  const volumeControllable = audio.volume === 0.5;
  if (!volumeControllable) document.querySelector(".vol").style.display = "none";
  // načítaj uloženú hlasitosť (fallback 100 %)
  let startVol = 1;
  try { const s = parseFloat(localStorage.getItem(VOL_KEY)); if (isFinite(s)) startVol = s; } catch (e) {}
  applyVolume(startVol, false);

  // klávesnica: medzerník = play/pause, šípky = seek/skladba
  document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.code === "Space") { e.preventDefault(); togglePlay(); }
    else if (e.code === "ArrowRight" && e.shiftKey) next();
    else if (e.code === "ArrowLeft"  && e.shiftKey) prev();
    else if (e.code === "ArrowRight") audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
    else if (e.code === "ArrowLeft")  audio.currentTime = Math.max(0, audio.currentTime - 5);
    else if (e.code === "ArrowUp")   { e.preventDefault(); applyVolume(audio.volume + 0.05, true); }
    else if (e.code === "ArrowDown") { e.preventDefault(); applyVolume(audio.volume - 0.05, true); }
    else if (e.code === "Escape") closeLyrics();
  });

  // Media Session (lockscreen / bluetooth ovládanie)
  if ("mediaSession" in navigator) {
    audio.addEventListener("play", () => {
      const t = TRACKS[current];
      if (!t) return;
      navigator.mediaSession.metadata = new MediaMetadata({
        title: t.title, artist: ALBUM_META.artist, album: ALBUM_META.title,
      });
    });
    navigator.mediaSession.setActionHandler("play", () => audio.play());
    navigator.mediaSession.setActionHandler("pause", () => audio.pause());
    navigator.mediaSession.setActionHandler("nexttrack", next);
    navigator.mediaSession.setActionHandler("previoustrack", prev);
  }

  // ── Lyrics sheet ────────────────────────────────────────────
  function openLyrics(i) {
    const t = TRACKS[i];
    if (!t) return;
    sheetEmoji.textContent = t.emoji || "🎵";
    sheetTitle.textContent = t.title;
    if (t.lyrics && t.lyrics.trim()) {
      sheetLyrics.textContent = t.lyrics;
      sheetLyrics.classList.remove("empty");
    } else {
      sheetLyrics.textContent = "Text tejto pesničky sem čoskoro pridám. 🎶";
      sheetLyrics.classList.add("empty");
    }
    sheet.hidden = false;
  }
  function closeLyrics() { sheet.hidden = true; }
  sheetClose.addEventListener("click", closeLyrics);
  sheetBackdrop.addEventListener("click", closeLyrics);

  // ── util ────────────────────────────────────────────────────
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ── štart ───────────────────────────────────────────────────
  if (typeof TRACKS === "undefined" || !Array.isArray(TRACKS) || TRACKS.length === 0) {
    listEl.innerHTML = '<li class="track" style="cursor:default">Zatiaľ tu nie sú žiadne pesničky. Pridaj ich do <code>tracks.js</code>.</li>';
    return;
  }
  render();
})();
