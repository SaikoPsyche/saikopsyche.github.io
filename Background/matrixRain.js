const canvas = document.getElementById("matrixRainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 25;

const rain = [];
const dropDensity = Math.floor(canvas.width / 5);
for (let i = 0; i < dropDensity; i++) {
    rain.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.floor(Math.random() * 30 + 10),
        speed: Math.random() * 5 + 15,
        char: ''
    });
}

function getRandomChar() {
    //const chars = String.fromCharCode(Math.floor(Math.random() * 255));
    //const chars = "abcdef0123456789";
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    const chars = katakana + latin + nums;
    return chars[Math.floor(Math.random() * chars.length)];
}

// Add fade to white trail head
function draw() {
    ctx.fillStyle = "rgb(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "25px monospace";
    ctx.fillStyle = "green";
    for (let i = 0; i < rain.length; i++) {
        rain[i].char = getRandomChar();
        ctx.fillText(rain[i].char, rain[i].x, rain[i].y);
        rain[i].y += rain[i].speed;
        
        // // Calculate the color for the raindrop based on its y-position
        // const fadeFactor = Math.min(1, rain[i].y / canvas.height); // Fade factor based on y-position
        // ctx.fillStyle = `rgb(${255 * fadeFactor}, ${255 * fadeFactor}, ${255 * fadeFactor})`; // White to green effect
        
        if (rain[i].y > canvas.height) {
            rain[i].y = -rain[i].length;
            rain[i].x = Math.random() * canvas.width;
            rain[i].length = Math.floor(Math.random() * 30) + 30;
            rain[i].speed = Math.random() * 5 + 15;
        }
    }
}

setInterval(draw, 90);