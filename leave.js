function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");

  // random horizontal start
  leaf.style.left = Math.random() * 100 + "vw";

  // random duration (fall speed)
  const duration = 5 + Math.random() * 5; // 5–10 seconds
  leaf.style.animationDuration = duration + "s";

  // random size
  const size = 20 + Math.random() * 30; // 20–50px
  leaf.style.width = size + "px";
  leaf.style.height = size + "px";

  document.getElementById("leaf-container").appendChild(leaf);

  // remove after animation ends
  setTimeout(() => leaf.remove(), duration * 1000);
}

// spawn leaves continuously
setInterval(createLeaf, 800); // one leaf every 0.8s
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");

  // random horizontal start
  leaf.style.left = Math.random() * 100 + "vw";

  // random duration (fall speed)
  const duration = 5 + Math.random() * 5; // 5–10 seconds
  leaf.style.animationDuration = duration + "s";

  // random size
  const size = 20 + Math.random() * 40; // 20–60px
  leaf.style.width = size + "px";
  leaf.style.height = size + "px";

  document.getElementById("leaf-container").appendChild(leaf);

  // remove after animation ends
  setTimeout(() => leaf.remove(), duration * 1000);
}

// spawn leaves continuously
setInterval(createLeaf, 4200); // one leaf every 0.8s




const leaf = document.getElementById("solo-leaf");

function dropSingleLeaf() {
  // reset animation
  leaf.style.animation = "none";
  void leaf.offsetWidth; // force reflow so the next line takes effect
  leaf.style.animation = "soloFall 7s linear forwards";
}

// trigger every 8 seconds
setInterval(dropSingleLeaf, 8000);



