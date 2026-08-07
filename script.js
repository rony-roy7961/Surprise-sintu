// 1. Particle Canvas Animation
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 3 + 1,
  speed: Math.random() * 1 + 0.5
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ff69b4';
  
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    p.y -= p.speed;
    if (p.y < 0) p.y = canvas.height;
  });

  requestAnimationFrame(animate);
}
animate();

// 2. Photo Carousel
const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'];
let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % photos.length;
  document.getElementById('photo').src = photos[currentIndex];
}, 3000);

// 3. Audio Player
const music = document.getElementById('bgMusic');
const btn = document.getElementById('musicBtn');
btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = '⏸ Song Stop Karo';
  } else {
    music.pause();
    btn.textContent = '🎵 Song Play Karo';
  }
});
