
    // Replace leave.js with snow.js (inline here)
    const SNOW_EMOJIS = ["❄", "✻", "✼", "✽", "✾", "❅", "❆"];
    const container = document.getElementById("snow-container");

    function spawnSnowflake() {
      const flake = document.createElement("div");
    flake.className = "snowflake";
flake.style.animationName = "snowFall, snowSway";


      // Size variant
      const sizes = ["sm", "md", "lg"];
      flake.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);

      // Content
      flake.textContent = SNOW_EMOJIS[Math.floor(Math.random() * SNOW_EMOJIS.length)];

      // Horizontal start
      const startX = Math.random() * window.innerWidth;
      flake.style.left = startX + "px";

      // Randomize fall duration and sway amplitude
      const fall = 8 + Math.random() * 10;         // 8–18s
      const sway = 3.5 + Math.random() * 3.5;      // 3.5–7s
      const amp  = (Math.random() * 40 + 20) * (Math.random() < 0.5 ? -1 : 1); // ±20–60px

      flake.style.setProperty("--fall", fall + "s");
      flake.style.setProperty("--sway", sway + "s");
      flake.style.setProperty("--amp", amp + "px");

      // Random slight rotation via transform for variety
      flake.style.transform = `translate3d(0,0,0) rotate(${Math.random()*20 - 10}deg)`;

      container.appendChild(flake);

      // Cleanup after fall completes
      const ttl = (fall + 0.2) * 1000;
      setTimeout(() => {
        flake.remove();
      }, ttl);
    }

    // Gentle storm: variable rate, avoids overloading
    let stormInterval = null;
    function startSnow(storminess = 450) {
      stopSnow();
      stormInterval = setInterval(() => {
        // Burst pattern for natural feel
        const burst = 1 + Math.floor(Math.random() * 3); // 1–3 flakes
        for (let i = 0; i < burst; i++) spawnSnowflake();
      }, storminess);
    }
    function stopSnow() {
      if (stormInterval) clearInterval(stormInterval);
      stormInterval = null;
    }

    // Start snow
    startSnow(380);

    // Adapt density on resize (optional subtle responsiveness)
    window.addEventListener("resize", () => {
      const w = window.innerWidth;
      const rate = w > 1200 ? 320 : w > 768 ? 380 : 450;
      startSnow(rate);
    });

// snow.js
function startSnow(rate = 380) {
  // spawn flakes at interval
}
function stopSnow() { /* clear interval */ }
