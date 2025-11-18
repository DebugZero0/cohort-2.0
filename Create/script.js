var button = document.querySelector("button"); 
var main = document.querySelector("main");

button.addEventListener("click", function(){
    run();
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  for (let i = 0; i < 1000; i++) {
    var div = document.createElement("div");
    
    // 1. Set size (needed to see them) and position
    div.style.position = "absolute";
    div.style.top = `${Math.floor(Math.random() * (window.innerHeight - 100))}px`;
    div.style.left = `${Math.floor(Math.random() * (window.innerWidth - 100))}px`;
    
    // 2. Apply the color
    div.style.background = `radial-gradient(circle at 30% 30%, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`;
    
    // 3. ANIMATION SETUP: Start at size 0 and add transition speed
    div.style.transform = "scale(0)";
    div.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"; // The cubic-bezier adds a bouncy effect
    
    main.appendChild(div); 

    // 4. TRIGGER ANIMATION: 
    // We use requestAnimationFrame to wait for the browser to paint the frame
    // so it realizes the div started at 0.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
         div.style.transform = `scale(${Math.random() * 1 + 0.5})`;
      });
    });

    await delay(50); 
  }
}