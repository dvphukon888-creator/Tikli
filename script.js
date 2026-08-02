// Continue Button
document.getElementById("continueBtn").addEventListener("click", function () {
    alert("❤️ Thank you for reading. Keep scrolling... 🥺");
});

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = ["💖","💕","💗","🌸","✨"][Math.floor(Math.random()*5)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1";

    document.body.appendChild(heart);

    let pos = window.innerHeight;

    const move = setInterval(() => {

        pos -= 2;

        heart.style.top = pos + "px";

        heart.style.transform =
            `translateX(${Math.sin(pos/25)*25}px)`;

        if(pos < -50){
            clearInterval(move);
            heart.remove();
        }

    },20);
}

setInterval(createHeart,700);
