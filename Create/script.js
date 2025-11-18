var button = document.querySelector("button"); 
var main = document.querySelector("main");

button.addEventListener("click", function () {
    run();
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {

  // 🔒 Disable button + update text
  button.disabled = true;
  button.textContent = "Generating…";

  for (let i = 0; i < 100; i++) {
    var div = document.createElement("div");

    div.style.position = "absolute";
    div.style.top = `${Math.floor(Math.random() * (window.innerHeight - 100))}px`;
    div.style.left = `${Math.floor(Math.random() * (window.innerWidth - 100))}px`;

    div.style.background = `radial-gradient(circle at 30% 30%, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`;

    div.style.transform = "scale(0)";
    div.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    main.appendChild(div);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        div.style.transform = `scale(${Math.random() * 1 + 0.5})`;
      });
    });

    await delay(50);
  }

  // 🔓 Re-enable button + restore text
  button.disabled = false;
  button.textContent = "Start";
}
