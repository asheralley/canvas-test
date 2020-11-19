const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

// get mouse position
let mouse = {
  x: null,
  y: null,
  radius: 80
};

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// create constructor function
function Particle(x, y, directionX, directionY, size, color) {
  this.x = x;
  this.y = y;
  this.directionX = directionX;
  this.directionY = directionY;
  this.size = size;
  this.color = color;
}

Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

// add update method to particle prototype
Particle.prototype.update = function () {
  if (this.x + this.size > canvas.width || this.x - this.size < 0) {
    this.directionX = -this.directionX;
  }
  if (this.y + this.size > canvas.height || this.y - this.size < 0) {
    this.directionY = -this.directionY;
  }

  // check collision detection - mouse position / particle position
  // try to figure out how to make the speed scale as the mouse get closer/
  // further away from the particle
  // change the direction of the particle?
  let dx = this.x - mouse.x;
  let dy = this.y - mouse.y;
  let distance = Math.sqrt(dx * dx + dy * dy) - 10;
  // function calcAngle(opposite, adjacent) {
  //   return Math.atan(opposite / adjacent);
  // }
  // let tanAngle = calcAngle(dy, dx);

  if (distance < mouse.radius + this.size) {
    if (mouse.x < this.x && this.x < canvas.width - this.size * 20) {
      // this.x += 1;
      this.directionX = (dx / distance) * 0.4;
    }
    if (mouse.x > this.x && this.x > this.size * 20) {
      // this.x -= 1;
      // this.directionX = (dx / 2) * 0.05;
      this.directionX = (dx / distance) * 0.4;
    }
    if (mouse.y < this.x && this.x < canvas.height - this.size * 20) {
      //this.y += 1;
      // this.directionY = (dy / 2) * 0.05;
      this.directionY = (dy / distance) * 0.4;
    }
    if (mouse.y > this.x && this.y > this.size * 20) {
      // this.y -= 1;
      // this.directionY = (dy / 2) * 0.05;
      this.directionY = (dy / distance) * 0.4;
    }
  }

  this.x += this.directionX;
  this.y += this.directionY;

  this.draw();
};

// create particle array

function init() {
  particleArray = [];
  // adjust number of particles based on screen size
  let particleNumber = 0;
  if (window.screen.width < 768) {
    particleNumber = 80;
  } else {
    particleNumber = 150;
  }
  for (let i = 0; i < particleNumber; i++) {
    let size = 0.3;
    let x = Math.random() * (innerWidth - size * 2);
    let y = Math.random() * (innerHeight - size * 2);
    let directionX = Math.random() * 0.4 - 0.2;
    let directionY = Math.random() * 0.4 - 0.2;
    let color = '#ececec';

    particleArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }

  connect();
}

// check if particles are close enough to draw a line between them.
function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particleArray.length; a++) {
    for (let b = a; b < particleArray.length; b++) {
      let distance =
        (particleArray[a].x - particleArray[b].x) *
          (particleArray[a].x - particleArray[b].x) +
        (particleArray[a].y - particleArray[b].y) *
          (particleArray[a].y - particleArray[b].y);
      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        opacityValue = 1 - distance / 30000;
        ctx.strokeStyle = 'rgba(140,140,140,' + opacityValue + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particleArray[a].x, particleArray[a].y);
        ctx.lineTo(particleArray[b].x, particleArray[b].y);
        ctx.stroke();
      }
    }
  }
}

//resize event
window.addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  mouse.radius = 80;
});

window.addEventListener('mouseout', function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

init();
animate();
