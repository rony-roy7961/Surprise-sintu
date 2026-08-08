// Screen switching function
function goToScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  
  // Auto-play song on click
  const music = document.getElementById('bgMusic');
  if (music && music.paused) {
    music.play().catch(() => {});
  }
}

// Show surprise based on selected Penguin
function showSurprise(option) {
  const content = document.getElementById('giftContent');
  
  if (option === 1) {
    // Option 1: Happy Birthday Note + Single Photo
    content.innerHTML = `
      <h2>HAPPY BIRTHDAY! 🎂💖</h2>
      <img src="photo1.jpg" style="width:100%; max-height:220px; object-fit:cover; border-radius:15px; margin:10px 0;">
      <div class="letter-box">
        <p>Happy Birthday to the most amazing person! 🎉 You bring so much joy and sweetness into my life. Hope your day is filled with love and laughter! 💕</p>
      </div>
    `;
    if (typeof confetti === 'function') confetti();
  } 
  else if (option === 2) {
    // Option 2: Beautiful Photo Collage
    content.innerHTML = `
      <h2>Beautiful Memories 📸✨</h2>
      <div class="collage-grid">
        <img src="photo1.jpg">
        <img src="photo2.jpg">
        <img src="photo3.jpg">
        <img src="photo4.jpg">
      </div>
      <p style="font-size:0.9rem; font-weight:600; color:#ff5d8f;">Forever My Cutie ❤️</p>
    `;
  } 
  else if (option === 3) {
    // Option 3: Virtual Hug & Love Message
    content.innerHTML = `
      <h2>Virtual Hug for ya! 🤗💕</h2>
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZhcTB0YW90OHd2NGZtd3dqYXdqaXV5bGt5YWs2dzFzeGgxdHRuOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2QDM9Jnim1YV55YA/giphy.gif" style="width:180px; margin:10px 0;">
      <h2>I MISS YOU & I LOVE YOU! ❤️</h2>
    `;
    if (typeof confetti === 'function') confetti({ particleCount: 120, spread: 80 });
  }

  goToScreen('screen4');
}
