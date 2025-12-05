const SNOW_EMOJIS = ["❄", "✻", "✼", "✽", "✾", "❅", "❆"];
const container = document.getElementById("snow-container");

function spawnSnowflake() {
  const flake = document.createElement("div");
  flake.className = "snowflake";
  flake.style.animationName = "snowFall, snowSway";

  // random size
  const sizes = ["sm", "md", "lg"];
  flake.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);

  // emoji content
  flake.textContent = SNOW_EMOJIS[Math.floor(Math.random() * SNOW_EMOJIS.length)];

  // random horizontal start
  flake.style.left = Math.random() * window.innerWidth + "px";

  // random durations
  const fall = 8 + Math.random() * 10; // 8–18s
  const sway = 3.5 + Math.random() * 3.5; // 3.5–7s
  const amp  = (Math.random() * 40 + 20) * (Math.random() < 0.5 ? -1 : 1);

  flake.style.setProperty("--fall", fall + "s");
  flake.style.setProperty("--sway", sway + "s");
  flake.style.setProperty("--amp", amp + "px");

  container.appendChild(flake);

  // cleanup
  setTimeout(() => flake.remove(), (fall + 0.2) * 1000);
}

let stormInterval = null;
function startSnow(rate = 380) {
  stopSnow();
  stormInterval = setInterval(() => {
    const burst = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < burst; i++) spawnSnowflake();
  }, rate);
}
function stopSnow() {
  if (stormInterval) clearInterval(stormInterval);
  stormInterval = null;
}

// start immediately
startSnow(380);

// adapt density on resize
window.addEventListener("resize", () => {
  const w = window.innerWidth;
  const rate = w > 1200 ? 320 : w > 768 ? 380 : 450;
  startSnow(rate);
});
