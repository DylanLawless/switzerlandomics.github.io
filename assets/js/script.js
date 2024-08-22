// Generate random delay times for the animation
let delays = [];
for (let i = 0; i < 8; i++) {
  let delay = Math.floor(Math.random() * 10 + 4); // Random number between 1 and 10
  delays.push(delay);
}

// Set the animation delay for each circle div
let circles = document.querySelectorAll('.circle');
circles.forEach((circle, index) => {
  circle.style.animationDelay = `${delays[index]}s`;
});
