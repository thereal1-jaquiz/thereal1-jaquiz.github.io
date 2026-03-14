// 2D Cube Jump Game - Geometry Dash Style with Multiple Gamemodes!

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 400;

// Game state
let gameRunning = false;
let score = 0;
let highScore = localStorage.getItem('cubeJumpHighScore') || 0;
let gameSpeed = 5;
let frameCount = 0;
let currentMode = 'cube';
let isHoldingSpace = false;

// Mode selection
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
    });
});

// Player with mode-specific properties
const player = {
    x: 100,
    y: 300,
    width: 40,
    height: 40,
    velocityY: 0,
    velocityX: 0,
    gravity: 0.8,
    jumpPowerY: -15,
    jumpPowerX: 7,
    isGrounded: true,
    color: '#e94560',
    maxForwardX: 180,
    rotation: 0,
    isRotating: false,
    // Mode-specific
    size: 40,
    waveAngle: 0,
    robotPulse: 0
};

// Ground
const ground = {
    y: 340,
    height: 60,
    color: '#16213e'
};

// Spikes
let spikes = [];
const spikeWidth = 30;
const spikeHeight = 40;

// Particles for death effect
let particles = [];

// Initialize high score display
document.getElementById('high-score-value').textContent = highScore;

// Event listeners
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', restartGame);

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        isHoldingSpace = true;
        if (gameRunning) {
            jump();
        } else if (!document.getElementById('start-screen').classList.contains('hidden')) {
            startGame();
        } else if (!document.getElementById('game-over-screen').classList.contains('hidden')) {
            restartGame();
        }
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
        isHoldingSpace = false;
    }
});

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (gameRunning) {
        jump();
    }
});

canvas.addEventListener('click', () => {
    if (gameRunning) {
        jump();
    }
});

function jump() {
    switch(currentMode) {
        case 'cube':
            if (player.isGrounded) {
                player.velocityY = player.jumpPowerY;
                player.velocityX = player.jumpPowerX;
                player.isGrounded = false;
                player.isRotating = true;
            }
            break;
        case 'ship':
            // Ship gradually goes up when holding (handled in updateShip)
            break;
        case 'ufo':
            // UFO can jump in mid-air
            player.velocityY = -10;
            break;
        case 'spider':
            // Spider teleports to ceiling when clicked
            player.y = 0; // Ceiling position
            player.velocityY = 0;
            break;
        case 'wave':
            // Wave mode - flies up while holding, falls when released (handled in updateWave)
            break;
        case 'robot':
            // Robot can double jump
            if (player.jumpsLeft > 0) {
                player.velocityY = -12;
                player.jumpsLeft--;
            }
            break;
    }
}

function startGame() {
    document.getElementById('start-screen').classList.add('hidden');
    gameRunning = true;
    score = 0;
    gameSpeed = 5;
    frameCount = 0;
    spikes = [];
    particles = [];
    
    // Reset player based on mode
    player.y = ground.y - player.height;
    player.x = 100;
    player.velocityY = 0;
    player.velocityX = 0;
    player.isGrounded = true;
    player.rotation = 0;
    player.isRotating = false;
    player.waveAngle = 0;
    player.robotPulse = 0;
    
    // Mode-specific setup
    switch(currentMode) {
        case 'spider':
            player.gravity = 0.8;
            break;
        case 'robot':
            player.jumpsLeft = 1; // Double jump
            break;
    }
    
    document.getElementById('score-value').textContent = score;
    
    gameLoop();
}

function restartGame() {
    document.getElementById('game-over-screen').classList.add('hidden');
    startGame();
}

function gameOver() {
    gameRunning = false;
    
    // Create death particles
    for (let i = 0; i < 20; i++) {
        particles.push({
            x: player.x + player.width / 2,
            y: player.y + player.height / 2,
            velocityX: (Math.random() - 0.5) * 10,
            velocityY: (Math.random() - 0.5) * 10,
            size: Math.random() * 8 + 4,
            color: player.color,
            life: 1
        });
    }
    
    // Update high score
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('cubeJumpHighScore', highScore);
        document.getElementById('high-score-value').textContent = highScore;
    }
    
    document.getElementById('final-score').textContent = score;
    
    // Show game over after particles animation
    setTimeout(() => {
        document.getElementById('game-over-screen').classList.remove('hidden');
    }, 500);
}

function spawnSpike() {
    const spike = {
        x: canvas.width + spikeWidth,
        y: ground.y - spikeHeight,
        width: spikeWidth,
        height: spikeHeight
    };
    spikes.push(spike);
}

function checkCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

function update() {
    if (!gameRunning) {
        updateParticles();
        return;
    }
    
    frameCount++;
    score = Math.floor(frameCount / 10);
    document.getElementById('score-value').textContent = score;
    
    // Increase speed over time
    if (frameCount % 500 === 0) {
        gameSpeed += 0.5;
    }
    
    // Mode-specific physics
    switch(currentMode) {
        case 'cube':
            updateCube();
            break;
        case 'ship':
            updateShip();
            break;
        case 'ufo':
            updateUfo();
            break;
        case 'spider':
            updateSpider();
            break;
        case 'wave':
            updateWave();
            break;
        case 'robot':
            updateRobot();
            break;
    }
    
    // Spawn spikes
    if (frameCount % Math.max(30, 90 - Math.floor(gameSpeed * 5)) === 0) {
        spawnSpike();
    }
    
    // Update spikes
    for (let i = spikes.length - 1; i >= 0; i--) {
        spikes[i].x -= gameSpeed;
        
        // Remove off-screen spikes
        if (spikes[i].x + spikes[i].width < 0) {
            spikes.splice(i, 1);
            continue;
        }
        
        // Check collision with player
        if (checkCollision(player, spikes[i])) {
            gameOver();
            return;
        }
    }
    
    // Ceiling collision for modes that can fly
    if (player.y < 0) {
        player.y = 0;
        player.velocityY = 0;
    }
    
    // Floor collision
    if (player.y + player.height >= ground.y) {
        player.y = ground.y - player.height;
        
        if (currentMode === 'spider') {
            player.gravity = 0.8;
        }
        if (currentMode === 'robot') {
            player.jumpsLeft = 1;
        }
        if (currentMode === 'cube') {
            player.velocityX = 0;
            player.rotation = 0;
            player.isRotating = false;
        }
        player.velocityY = 0;
        player.isGrounded = true;
    }
}

function updateCube() {
    player.velocityY += player.gravity;
    player.y += player.velocityY;
    
    // Apply horizontal movement
    player.x += player.velocityX;
    player.velocityX *= 0.95;
    
    if (player.x > player.maxForwardX) player.x = player.maxForwardX;
    if (player.x < 50) player.x = 50;
    
    if (player.isRotating) {
        player.rotation += 0.15;
    }
}

function updateShip() {
    // Ship gradually goes up when holding, down when released
    if (isHoldingSpace) {
        player.velocityY -= 0.4; // Gradually accelerate upward
        if (player.velocityY < -8) player.velocityY = -8; // Max upward speed
    } else {
        player.velocityY += 0.3; // Gradually fall
        if (player.velocityY > 6) player.velocityY = 6; // Max fall speed
    }
    
    player.y += player.velocityY;
    player.x += 2; // Constant forward movement
    if (player.x > player.maxForwardX) player.x = player.maxForwardX;
    
    // Tilt based on velocity
    player.rotation = player.velocityY * 0.05;
}

function updateUfo() {
    player.velocityY += 0.2;
    player.y += player.velocityY;
    player.x += 3;
    if (player.x > player.maxForwardX) player.x = player.maxForwardX;
    
    // UFO bobbing effect
    player.waveAngle += 0.1;
    player.y += Math.sin(player.waveAngle) * 0.5;
}

function updateSpider() {
    // Spider sticks to ceiling (teleports there on click)
    // Simple gravity - falls slowly from ceiling
    player.velocityY += 0.3;
    player.y += player.velocityY;
    
    // Bounce off ceiling
    if (player.y < 0) {
        player.y = 0;
        player.velocityY = 0;
    }
    
    // Move forward
    player.x += player.velocityX;
    player.velocityX *= 0.95;
    if (player.x > player.maxForwardX) player.x = player.maxForwardX;
    if (player.x < 50) player.x = 50;
}

function updateWave() {
    // Wave mode - go up diagonally when holding, down diagonally when released
    if (isHoldingSpace) {
        player.velocityY = -5;
        player.velocityX = 3;
        player.rotation = -Math.PI / 4; // -45 degrees (pointing up-right)
    } else {
        player.velocityY = 5;
        player.velocityX = -1;
        player.rotation = Math.PI / 4; // 45 degrees (pointing down-right)
    }
    
    player.y += player.velocityY;
    player.x += player.velocityX;
    
    // Keep within bounds
    if (player.x > player.maxForwardX) player.x = player.maxForwardX;
    if (player.x < 50) player.x = 50;
}

function updateRobot() {
    player.velocityY += player.gravity;
    player.y += player.velocityY;
    
    // Apply horizontal movement
    player.x += player.velocityX;
    player.velocityX *= 0.95;
    if (player.x > player.maxForwardX) player.x = player.maxForwardX;
    if (player.x < 50) player.x = 50;
    
    // Robot pulse effect
    player.robotPulse += 0.1;
}

function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.velocityX;
        p.y += p.velocityY;
        p.velocityY += 0.3;
        p.life -= 0.02;
        
        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }
}

function draw() {
    // Clear canvas
    ctx.fillStyle = '#0f0f23';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw background grid
    ctx.strokeStyle = 'rgba(233, 69, 96, 0.1)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    
    // Draw ground
    ctx.fillStyle = ground.color;
    ctx.fillRect(0, ground.y, canvas.width, ground.height);
    
    // Draw ground line
    ctx.strokeStyle = '#e94560';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, ground.y);
    ctx.lineTo(canvas.width, ground.y);
    ctx.stroke();
    
    // Draw spikes
    ctx.fillStyle = '#e94560';
    for (const spike of spikes) {
        ctx.beginPath();
        ctx.moveTo(spike.x, spike.y + spike.height);
        ctx.lineTo(spike.x + spike.width / 2, spike.y);
        ctx.lineTo(spike.x + spike.width, spike.y + spike.height);
        ctx.closePath();
        ctx.fill();
        
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    // Draw player based on mode
    if (gameRunning || particles.length > 0) {
        drawPlayer();
    }
    
    // Draw particles
    for (const p of particles) {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
    }
    ctx.globalAlpha = 1;
}

function drawPlayer() {
    ctx.save();
    
    const centerX = player.x + player.width / 2;
    const centerY = player.y + player.height / 2;
    
    switch(currentMode) {
        case 'cube':
            ctx.translate(centerX, centerY);
            ctx.rotate(player.rotation);
            ctx.translate(-player.width / 2, -player.height / 2);
            
            ctx.fillStyle = player.color;
            ctx.fillRect(0, 0, player.width, player.height);
            
            ctx.shadowColor = player.color;
            ctx.shadowBlur = 20;
            ctx.fillRect(0, 0, player.width, player.height);
            ctx.shadowBlur = 0;
            
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, player.width, player.height);
            
            // Eyes
            ctx.fillStyle = '#fff';
            ctx.fillRect(8, 10, 8, 8);
            ctx.fillRect(24, 10, 8, 8);
            ctx.fillStyle = '#000';
            ctx.fillRect(10, 12, 4, 4);
            ctx.fillRect(26, 12, 4, 4);
            break;
            
        case 'ship':
            ctx.translate(centerX, centerY);
            ctx.rotate(player.rotation + Math.PI / 2); // Rotate 90 degrees
            
            // Draw rocketship
            // Main body (fuselage)
            ctx.fillStyle = '#e74c3c';
            ctx.beginPath();
            ctx.ellipse(0, 0, 12, 25, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Nose cone
            ctx.fillStyle = '#c0392b';
            ctx.beginPath();
            ctx.moveTo(0, -25);
            ctx.lineTo(8, -10);
            ctx.lineTo(-8, -10);
            ctx.closePath();
            ctx.fill();
            
            // Window
            ctx.fillStyle = '#85c1e9';
            ctx.beginPath();
            ctx.arc(0, -5, 6, 0, Math.PI * 2);
            ctx.fill();
            
            // Wings
            ctx.fillStyle = '#c0392b';
            ctx.beginPath();
            ctx.moveTo(-10, 5);
            ctx.lineTo(-20, 15);
            ctx.lineTo(-10, 15);
            ctx.closePath();
            ctx.fill();
            
            ctx.beginPath();
            ctx.moveTo(10, 5);
            ctx.lineTo(20, 15);
            ctx.lineTo(10, 15);
            ctx.closePath();
            ctx.fill();
            
            // Engine flame
            if (gameRunning) {
                ctx.fillStyle = '#f39c12';
                ctx.beginPath();
                ctx.moveTo(-5, 20);
                ctx.lineTo(0, 30 + Math.random() * 10);
                ctx.lineTo(5, 20);
                ctx.closePath();
                ctx.fill();
            }
            
            ctx.shadowColor = '#e74c3c';
            ctx.shadowBlur = 15;
            break;
            
        case 'ufo':
            // Draw UFO (oval with dome)
            ctx.translate(centerX, centerY);
            
            // Dome
            ctx.fillStyle = '#9b59b6';
            ctx.beginPath();
            ctx.ellipse(0, -5, 15, 12, 0, Math.PI, 0);
            ctx.fill();
            
            // Body
            ctx.fillStyle = '#8e44ad';
            ctx.beginPath();
            ctx.ellipse(0, 5, 25, 10, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Lights
            ctx.fillStyle = '#f1c40f';
            for (let i = -2; i <= 2; i++) {
                ctx.beginPath();
                ctx.arc(i * 8, 8, 3, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.shadowColor = '#9b59b6';
            ctx.shadowBlur = 20;
            break;
            
        case 'spider':
            ctx.translate(centerX, centerY);
            ctx.rotate(player.rotation);
            
            // Body
            ctx.fillStyle = '#2ecc71';
            ctx.beginPath();
            ctx.ellipse(0, 0, 18, 15, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Head
            ctx.beginPath();
            ctx.arc(0, -12, 10, 0, Math.PI * 2);
            ctx.fill();
            
            // Eyes
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(-4, -14, 3, 0, Math.PI * 2);
            ctx.arc(4, -14, 3, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(-4, -14, 1.5, 0, Math.PI * 2);
            ctx.arc(4, -14, 1.5, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.shadowColor = '#2ecc71';
            ctx.shadowBlur = 15;
            break;
            
        case 'wave':
            ctx.translate(centerX, centerY);
            ctx.rotate(player.rotation);
            
            // Draw wave (same as ship - blue triangle)
            ctx.fillStyle = '#3498db';
            ctx.beginPath();
            ctx.moveTo(0, -20);
            ctx.lineTo(15, 15);
            ctx.lineTo(0, 10);
            ctx.lineTo(-15, 15);
            ctx.closePath();
            ctx.fill();
            
            ctx.shadowColor = '#3498db';
            ctx.shadowBlur = 15;
            break;
            
        case 'robot':
            ctx.translate(centerX, centerY);
            
            const pulse = 1 + Math.sin(player.robotPulse) * 0.1;
            ctx.scale(pulse, pulse);
            
            // Body
            ctx.fillStyle = '#e67e22';
            ctx.fillRect(-15, -15, 30, 30);
            
            // Head
            ctx.fillStyle = '#d35400';
            ctx.fillRect(-12, -28, 24, 15);
            
            // Eyes
            ctx.fillStyle = '#fff';
            ctx.fillRect(-8, -24, 6, 6);
            ctx.fillRect(2, -24, 6, 6);
            
            ctx.fillStyle = '#000';
            ctx.fillRect(-6, -22, 3, 3);
            ctx.fillRect(4, -22, 3, 3);
            
            // Antenna
            ctx.fillStyle = '#e67e22';
            ctx.fillRect(-2, -35, 4, 8);
            ctx.fillStyle = '#f1c40f';
            ctx.beginPath();
            ctx.arc(0, -38, 4, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.shadowColor = '#e67e22';
            ctx.shadowBlur = 15;
            break;
    }
    
    ctx.restore();
}

function gameLoop() {
    update();
    draw();
    
    if (gameRunning || particles.length > 0) {
        requestAnimationFrame(gameLoop);
    }
}

// Initial draw
draw();

