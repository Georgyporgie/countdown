/* --- Background drift --- */
function spawnLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");

  // random horizontal start
  leaf.style.left = Math.random() * 100 + "vw";

  // random duration (fall speed)
  const duration = 5 + Math.random() * 5; // 5–10s
  leaf.style.animationDuration = duration + "s";

  // random size
  const size = 20 + Math.random() * 40; // 20–60px
  leaf.style.width = size + "px";
  leaf.style.height = size + "px";

  document.getElementById("leaf-container").appendChild(leaf);

  // remove after animation ends
  setTimeout(() => leaf.remove(), duration * 1000);
}

// spawn one every 2.5s
setInterval(spawnLeaf, 2500);


/* --- Ritual leaf --- */
const soloLeaf = document.getElementById("solo-leaf");

function dropSingleLeaf() {
  // random horizontal start
  soloLeaf.style.left = Math.random() * 100 + "vw";

  // reset + trigger animation
  soloLeaf.style.animation = "none";
  void soloLeaf.offsetWidth; // force reflow
  soloLeaf.style.animation = "soloFall 7s linear forwards";
}

// trigger every 8s (or tie this to your countdown event)
setInterval(dropSingleLeaf, 8000);
