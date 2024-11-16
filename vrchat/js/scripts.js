const images = [
    "./files/1.webp", "./files/2.webp", "./files/3.webp",
    "./files/4.webp", "./files/5.webp", "./files/6.webp",
    "./files/7.webp", "./files/8.webp", "./files/9.webp",
    "./files/10.webp", "./files/11.webp", "./files/12.webp",
    "./files/13.webp", "./files/14.webp", "./files/15.webp",
    "./files/16.webp", "./files/17.webp", "./files/18.webp"
];

let currentIndex = 0;

const leftImage = document.getElementById("leftImage");
const centerImage = document.getElementById("centerImage");
const rightImage = document.getElementById("rightImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImages(index) {
    centerImage.src = images[index];
    leftImage.src = images[(index === 0) ? images.length - 1 : index - 1];
    rightImage.src = images[(index === images.length - 1) ? 0 : index + 1];
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImages(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImages(currentIndex);
});

// Initialize snow effect
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");
let snowflakes = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createSnowflakes() {
    snowflakes = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5
    }));
}

function updateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(flake => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) flake.y = 0;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    });
    requestAnimationFrame(updateSnowflakes);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
createSnowflakes();
updateSnowflakes();
