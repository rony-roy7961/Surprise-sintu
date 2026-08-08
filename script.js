// 1. Floating Hearts Canvas Animation (60FPS)
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height + canvas.height,
  size: Math.random() * 10 + 5,
  speed: Math.random() * 1.5 + 0.6,
  opacity: Math.random() * 0.7 + 0.3
}));

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.beginPath();
  ctx.translate(x, y);
  ctx.scale(size / 10, size / 10);
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-5, -5, -10, 0, 0, 10);
  ctx.bezierCurveTo(10, 0, 5, -5, 0, 0);
  ctx.fillStyle = `rgba(255, 182, 193, ${opacity})`;
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    drawHeart(p.x, p.y, p.size, p.opacity);
    p.y -= p.speed;
    if (p.y < -20) {
      p.y = canvas.height + 20;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// 2. Photo Carousel (Smooth Fade Effect for 5 Photos)
const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'];
let currentIndex = 0;
const imgElement = document.getElementById('photo');

setInterval(() => {
  imgElement.style.opacity = '0';
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % photos.length;
    imgElement.src = photos[currentIndex];
    imgElement.style.opacity = '1';
  }, 800);
}, 3500);

// 3. Audio Music Control
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  if (music.paused) {
    music.play();
    btn.textContent = '⏸ Song Stop Karo';
  } else {
    music.pause();
    btn.textContent = '🎵 Background Music Play Karo';
  }
}

// 4. Secret Box Unlock & Confetti Burst Effect 🎉
function openSurprise() {
  document.getElementById('unlockBtn').style.display = 'none';
  document.getElementById('secretText').style.display = 'block';

  // Confetti Animation (Crackers/Phool/Hearts Blast)
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}
