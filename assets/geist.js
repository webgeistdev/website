window.document.body.className += " js-active";

let playground = [];

function createPlayground() {
  // playground = Array(...document.querySelectorAll("p,.boundary")).map(p =>
  //   p.getBoundingClientRect()
  // );
  console.log(playground);
}
createPlayground();

function Geist(canvas, x, y) {
  this.x = x;
  this.y = y;

  const ctx = canvas.getContext("2d");

  const PADDING = 20;

  const geistWidth = 62;
  const geistHeight = 90;
  const eyeWidth = 4;

  const bodyLength = geistHeight - geistWidth / 2;
  const MOVE_SPEED = 125; // pixel pro second
  const DRAG = 7;

  canvas.width = geistWidth + 2 * PADDING;
  this.height = canvas.height = geistHeight + 2 * PADDING;
  this.boundingRect = {
    width: canvas.width - PADDING * 2,
    height: canvas.height - PADDING * 2
  };

  const points = [
    [0, 0.95],
    [0.2, 0.85],
    [0.3, 0.92],
    [0.55, 0.86],
    [0.7, 1.01],
    [0.9, 0.95],
    [1, 1]
  ];

  let lastXSteps = [];
  let lastXEyeSteps = [];
  let lastYSteps = [];
  let lastYEyeSteps = [];

  const rightEye = [PADDING + geistWidth * 0.67, PADDING + geistWidth / 2];
  const leftEye = [PADDING + geistWidth * 0.33, PADDING + geistWidth / 2];

  function accumulateSteps(steps, size = 10) {
    return steps.slice(0, size).reduce((acc, x) => acc + x, 0);
  }

  this.movingX = 0;
  this.movingY = 0;

  this.moveRight = function (val = true) {
    this.movingX = val ? 1 : 0;
  };

  this.moveLeft = function (val = true) {
    this.movingX = val ? -1 : 0;
  };

  this.moveUp = function (val = true) {
    this.movingY = val ? -1 : 0;
  };

  this.moveDown = function (val = true) {
    this.movingY = val ? 1 : 0;
  };

  this.draw = function (delta) {
    const stepSizeX = ((MOVE_SPEED * delta) / 1000) * this.movingX;
    const eyeStepSizeX = ((geistWidth * 0.5 * delta) / 1000) * this.movingX;

    const stepSizeY = ((MOVE_SPEED * delta) / 1000) * this.movingY;
    const eyeStepSizeY = ((geistWidth * 0.5 * delta) / 1000) * this.movingY;

    // console.log(isHitting(this.boundingRect, playground) ? 'Y' : 'N')
    // If new position is hitting the playground, don't apply it
    if (
      !isHitting(
        {
          ...this.boundingRect,
          x: this.x + stepSizeX + PADDING,
          y: this.y + stepSizeY + PADDING
        },
        playground
      )
    ) {
      this.x += stepSizeX;
      this.y += stepSizeY;
    }

    canvas.style.transform = `translate3D(${this.x}px, ${this.y}px, 0)`;
    const offset = 3;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(100, 100, 100, 0.88)";
    ctx.fillStyle = "rgba(250, 250, 250, 0.2)";
    ctx.beginPath();
    const dragX = accumulateSteps(lastXSteps, DRAG);
    const dragY = accumulateSteps(lastYSteps, DRAG);
    const geistCenter = geistWidth / 2;
    ctx.arc(
      PADDING + geistCenter,
      PADDING + geistCenter,
      geistCenter,
      0,
      Math.PI,
      true
    );
    points.slice().forEach((p, i) => {
      // const drag = accumulateSteps(pointsDrag[i]);
      // shorter sheet length means shorter drag of course :)
      ctx.lineTo(
        PADDING + p[0] * geistWidth + offset - dragX * p[1],
        PADDING + p[1] * bodyLength + geistCenter - dragY / 2
      );
    });
    ctx.lineTo(PADDING + geistWidth, PADDING + geistCenter);
    ctx.stroke();
    ctx.fill();

    const eyeDragX = accumulateSteps(lastXEyeSteps, DRAG);
    const eyeDragY = accumulateSteps(lastYEyeSteps, DRAG);
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.arc(
      rightEye[0] + eyeDragX,
      rightEye[1] + eyeDragY,
      eyeWidth,
      Math.PI * 2,
      false
    );
    ctx.arc(
      leftEye[0] + eyeDragX,
      leftEye[1] + eyeDragY,
      eyeWidth,
      Math.PI * 2,
      false
    );
    ctx.fill();

    lastXSteps.unshift(stepSizeX);
    lastXEyeSteps.unshift(eyeStepSizeX);
    lastXSteps = lastXSteps.slice(0, DRAG * 2);
    lastXEyeSteps = lastXEyeSteps.slice(0, DRAG * 2);
    lastYSteps.unshift(stepSizeY);
    lastYEyeSteps.unshift(eyeStepSizeY);
    lastYSteps = lastYSteps.slice(0, DRAG * 2);
    lastYEyeSteps = lastYEyeSteps.slice(0, DRAG * 2);
  };
}

function isHitting(ghost, items) {
  return !!items.find(item => isHittingItem(ghost, item));
}

function isHittingItem(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

window.addEventListener("DOMContentLoaded", function (event) {
  const geist = new Geist(document.getElementById("jsgeist"), 0, 0);

  let lastTime = Date.now();
  function drawLoop() {
    const now = Date.now();
    geist.draw(now - lastTime);
    window.requestAnimationFrame(drawLoop);
    lastTime = now;
  }
  drawLoop();

  document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 37) {
      geist.moveLeft();
    } else if (event.keyCode === 38) {
      geist.moveUp();
    } else if (event.keyCode === 39) {
      geist.moveRight();
    } else if (event.keyCode === 40) {
      geist.moveDown();
    } else {
      return;
    }
    event.preventDefault();
  });

  document.body.addEventListener("keyup", function (event) {
    if (event.keyCode === 37) {
      geist.moveLeft(false);
    } else if (event.keyCode === 38) {
      geist.moveUp(false);
    } else if (event.keyCode === 39) {
      geist.moveRight(false);
    } else if (event.keyCode === 40) {
      geist.moveDown(false);
    } else {
      return;
    }
    event.preventDefault();
  });

  document.querySelectorAll('.js-email').forEach(function (element) {
    element.innerHTML += '@webgeist.dev'
    element.href = 'mailto:' + element.innerHTML
  })
});


