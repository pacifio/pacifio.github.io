const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let hue = 0;

function setupSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("resize", function () {
  setupSize();
  draw();
});

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

window.addEventListener("scroll", function () {
  hue += 5;
});

function draw() {
  ctx.fillStyle = `hsla(${hue},100%, 50%, 0.01)`;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, Math.random() * 60 + 10, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

setupSize();

function animate() {
  draw();

  hue++;

  requestAnimationFrame(animate);
}

animate();
