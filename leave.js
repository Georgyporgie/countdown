// --- Config ---
const IMG_BASE = ''; // e.g., 'images/' if your assets live in /images/
const BLACK_IMG  = IMG_BASE + 'black-leaf.png';
const GOLDEN_IMG = IMG_BASE + 'golden-leaf.png';
const SNOW_IMG   = IMG_BASE + 'snowflake.png';




// --- Cached DOM refs ---
const container = document.getElementById('leaf-container');
const soloLeaf = document.getElementById('solo-leaf');



// --- Guards for special triggers ---
let lastHourBlackTriggered = null;
let lastHourGoldenTriggered = null;

// Prevent immediate double-fire if the app loads exactly on the window
const appStart = Date.now();
const STARTUP_COOLDOWN_MS = 3000; // 3s

/* --- Background drift --- */
function spawnLeaf() {
  if (!container) return;
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');

  leaf.style.left = Math.random() * 100 + 'vw';

  const duration = 5 + Math.random() * 5; // 5–10s
  leaf.style.animationName = 'fall'; // relies on your CSS @keyframes fall
  leaf.style.animationDuration = duration + 's';

  const size = 20 + Math.random() * 40; // 20–60px
  leaf.style.width = size + 'px';
  leaf.style.height = size + 'px';

  container.appendChild(leaf);
  setTimeout(() => leaf.remove(), duration * 1000);
}
setInterval(spawnLeaf, 2500);

/* --- Special black leaf omen (hourly) --- */
function maybeSpawnBlackHourly() {
  const now = new Date();

  // allow a 3s window at top of the hour; avoid firing during startup cooldown
  const inWindow = now.getMinutes() === 0 && now.getSeconds() < 3;
  const cooledDown = Date.now() - appStart > STARTUP_COOLDOWN_MS;

  if (inWindow && cooledDown) {
    if (lastHourBlackTriggered !== now.getHours()) {
      spawnSpecialLeaf(BLACK_IMG, 'blackFall', 60); // larger, distinct animation
      lastHourBlackTriggered = now.getHours();
    }
  }
}

/* --- Golden blessing (hourly at half past) --- */
function maybeSpawnGoldenHourly() {
  const now = new Date();

  const inWindow = now.getMinutes() === 30 && now.getSeconds() < 3;
  const cooledDown = Date.now() - appStart > STARTUP_COOLDOWN_MS;

  if (inWindow && cooledDown) {
    if (lastHourGoldenTriggered !== now.getHours()) {
      spawnSpecialLeaf(GOLDEN_IMG, 'goldenFall', 56);
      lastHourGoldenTriggered = now.getHours();
    }
  }
}

// Check every second for omen/blessing windows
setInterval(maybeSpawnBlackHourly, 1000);
setInterval(maybeSpawnGoldenHourly, 1000);

/* --- Ritual solo leaf (re-animate existing element) --- */
function dropSingleLeaf() {
  if (!soloLeaf) return;

  soloLeaf.style.left = Math.random() * 100 + 'vw';

  // reset + trigger animation
  soloLeaf.style.animation = 'none';
  void soloLeaf.offsetWidth; // force reflow
  soloLeaf.style.animation = 'soloFall 7s linear forwards';
}
setInterval(dropSingleLeaf, 8000);

/* --- Helper to spawn a special leaf with custom animation --- */
function spawnSpecialLeaf(imgUrl, animationName, pxSize) {
  if (!container) return;
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');

  // image + distinct animation
  leaf.style.backgroundImage = `url(${imgUrl})`;
  leaf.style.animationName = animationName; // relies on your CSS keyframes

  // position and timing
  leaf.style.left = Math.random() * 100 + 'vw';
  const duration = 7 + Math.random() * 3; // 7–10s
  leaf.style.animationDuration = duration + 's';

  // size
  leaf.style.width = pxSize + 'px';
  leaf.style.height = pxSize + 'px';

  container.appendChild(leaf);
  setTimeout(() => leaf.remove(), duration * 1000);
}



function maybeSpawnGoldenRandom() {
  const cooledDown = Date.now() - appStart > STARTUP_COOLDOWN_MS;
  if (!cooledDown) return;
  if (Math.random() < 0.01) { // ~1% per check
    spawnSpecialLeaf(GOLDEN_IMG, 'goldenFall', 56);
  }
}
setInterval(maybeSpawnGoldenRandom, 10000);








// leaf.js
function startLeaves(rate = 800) {
  // spawn leaves at interval
}
function stopLeaves() { /* clear interval */ }





function spawnFlake() {
  const flake = document.createElement("div");
  flake.className = "flake";
  flake.style.left = Math.random() * window.innerWidth + "px";
  flake.style.backgroundImage = "url('snowflake.png')";

  const duration = 6 + Math.random() * 6;
  flake.style.animationDuration = duration + "s";

  document.getElementById("flake-container").appendChild(flake);

  setTimeout(() => flake.remove(), duration * 1000);
}


leaf.style.backgroundImage = `url('${BLACK_IMG}')`;

function spawnFlake() {
  const flake = document.createElement("div");
  flake.className = "flake";
  flake.style.left = Math.random() * window.innerWidth + "px";
  flake.style.backgroundImage = `url('${SNOW_IMG}')`;

  const duration = 6 + Math.random() * 6;
  flake.style.animationDuration = duration + "s";

  container.appendChild(flake);
  setTimeout(() => flake.remove(), duration * 1000);
}
const month = new Date().getMonth(); // 0 = Jan, 11 = Dec
let currentAsset;

if (month >= 9 && month <= 10) {
  currentAsset = BLACK_IMG; // autumn leaves
} else if (month === 11 || month <= 1) {
  currentAsset = SNOW_IMG; // winter snowflakes
} else {
  currentAsset = GOLDEN_IMG; // spring/summer flourish
}

function spawnSeasonal() {
  const el = document.createElement("div");
  el.className = "leaf"; // or "flake" if you want separate styles
  el.style.backgroundImage = `url('${currentAsset}')`;
  container.appendChild(el);
}




