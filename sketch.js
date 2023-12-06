const colorInput = document.getElementById("color");
const weight = document.getElementById("weight");
const clear = document.getElementById("clear");
const paths = [];
let currentPath = [];

/*function preload() {
  imgsave = loadImage("");
}*/

/*function preload() {
  imgsave = loadImage(dataURL);
}*/

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  /* oldbrg = getItem("brgimage");

  if (oldbrg != null) {
    background("oldbrg");
  } else {
    background(255);
  }*/

  /*var dataURL = localStorage.getItem(imgCanvas);
  var img = new Image();
  img.src = dataURL;
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };*/
}

function saveAsCanvas() {
  save("Doodler drawing.png");
}

function draw() {
  noFill();

  if (mouseIsPressed) {
    const point = {
      x: mouseX,
      y: mouseY,
      color: colorInput.value,
      weight: weight.value,
    };
    currentPath.push(point);
  }

  paths.forEach((path) => {
    beginShape();
    path.forEach((point) => {
      stroke(point.color);
      strokeWeight(point.weight);
      vertex(point.x, point.y);
    });
    endShape();
  });

  /* localStorage.setItem("imgCanvas", canvas.toDataURL());
  storeItem("brgimage", canvas.toDataURL());*/
}

function mousePressed() {
  currentPath = [];
  paths.push(currentPath);
}

saveBtnImage.addEventListener("click", saveAsCanvas);

clear.addEventListener("click", () => {
  paths.splice(0);
  background(255);

  /* localStorage.setItem("imgCanvas", canvas.toDataURL());
  storeItem("brgimage", canvas.toDataURL());*/
});
