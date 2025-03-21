const canvas = document.getElementById("matrixRainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;

const rain = [];
const dropDensity = Math.floor(canvas.width / 15);
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
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const cyrillic = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЭЮЯабвгдеёжзийклмнопрстуфхцчшщыэюя';    
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nums = '0123456789';

    const chars = cyrillic + latin + nums;
    return chars[Math.floor(Math.random() * chars.length)];
}

// Add fade to white trail head
function draw() {
    ctx.fillStyle = "rgb(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + "px monospace";
    ctx.fillStyle = '#0F0';
    for (let i = 0; i < rain.length; i++) {
        rain[i].char = getRandomChar();
        ctx.fillText(rain[i].char, rain[i].x, rain[i].y);
        rain[i].y += rain[i].speed;
        
        // check if y pos of rain[i] is lowest in the array
        // if true, fillStyle = #FFF
        // remove pos if y < canvas.height

        if (rain[i].y > canvas.height) {
            rain[i].y = -rain[i].length;
            rain[i].x = Math.random() * canvas.width;
            rain[i].length = Math.floor(Math.random() * 30) + 30;
            rain[i].speed = Math.random() * 5 + 15;
        }
    }
}

setInterval(draw, 60);