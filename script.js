const heartsContainer = document.getElementById('heartsContainer');
const heartEmojis = ['💗', '💖', '💓', '💕', '💘', '💝', '🌸', '✨', '🎀'];

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);

const confessionText = `Dear Sherry... 💕

From the very first message we exchanged on Litmatch, something just felt different. Those late-night chats, your cute laughs through the screen, and the way you always knew exactly what to say — you made my heart skip a beat even through a phone screen.

I never thought I could fall for someone I met online, but you proved me wrong. Every notification from you brightens my day. You're special, Sherry, and I can't keep pretending this is just friendship.

I really, really like you. Will you be my girlfriend? 🥺💗`;

let charIndex = 0;
const textElement = document.getElementById('typewriterText');

function typeWriter() {
    if (charIndex < confessionText.length) {
        if (confessionText[charIndex] === '\n') {
            textElement.innerHTML += '<br>';
        } else {
            textElement.innerHTML += confessionText[charIndex];
        }
        charIndex++;
        
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        textElement.appendChild(cursor);
        
        setTimeout(() => {
            if (cursor.parentNode) cursor.remove();
            typeWriter();
        }, 45);
    } else {
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        textElement.appendChild(cursor);
    }
}

function openCard() {
    document.getElementById('openBtn').style.display = 'none';
    const card = document.getElementById('mainCard');
    card.classList.add('show');
    setTimeout(typeWriter, 600);
}

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.85) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        const hues = [300, 320, 340, 0, 20];
        sparkle.style.background = `hsl(${hues[Math.floor(Math.random() * hues.length)]}, 100%, 75%)`;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
});

function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ffb6c1', '#ffc0cb', '#fff0f5', '#ff6b6b', '#ff8e8e'];
    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

function sayYes() {
    createConfetti();
    document.getElementById('buttons').style.display = 'none';
    const responseArea = document.getElementById('responseArea');
    responseArea.style.display = 'block';
    document.getElementById('responseMsg').textContent = "Yay! You made me the happiest person ever! 💕🎉";
    
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 80);
    }
}

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.style.zIndex = '100';
    const texts = ['Nope! 😜', 'Catch me! 🏃', 'Try again! 🤭', 'So close! 😏', 'Not today! 😆'];
    noBtn.textContent = texts[Math.floor(Math.random() * texts.length)];
});

function sayNo() {
    noBtn.textContent = "You have to say Yes! 😤💗";
    createConfetti();
}

for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
}