const continueBtn = document.getElementById("continueBtn");
const page2 = document.getElementById("page2");

const forgiveBtn = document.getElementById("forgiveBtn");
const loveBar = document.getElementById("loveBar");
const loveText = document.getElementById("loveText");
const teddyScene = document.getElementById("teddyScene");

let progress = 0;

continueBtn.onclick = () => {

    continueBtn.style.display = "none";

    page2.style.display = "block";

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    });

}

forgiveBtn.onclick = ()=>{

    progress += 20;

    if(progress>100) progress=100;

    loveBar.style.width = progress+"%";

    if(progress==20){
        loveText.innerHTML="🌸 Thank you...";
    }

    if(progress==40){
        loveText.innerHTML="🐱 The kitty is smiling...";
    }

    if(progress==60){
        loveText.innerHTML="🧸 Almost there...";
    }

    if(progress==80){
        loveText.innerHTML="❤️ You're so kind...";
    }

    if(progress==100){

        forgiveBtn.style.display="none";

        loveText.innerHTML="✨ Thank you for reaching the end.";

        teddyScene.style.display="block";

        startConfetti();

    }

}


// Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML=["💖","💕","💗","🌸","✨","❤️"][Math.floor(Math.random()*6)];

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.pointerEvents="none";
heart.style.zIndex="0";

document.body.appendChild(heart);

let pos=window.innerHeight;

const move=setInterval(()=>{

pos-=2;

heart.style.top=pos+"px";

heart.style.transform=`translateX(${Math.sin(pos/25)*25}px)`;

if(pos<-50){

clearInterval(move);

heart.remove();

}

},20);

}

setInterval(createHeart,600);


// Confetti

function startConfetti(){

for(let i=0;i<120;i++){

setTimeout(()=>{

const c=document.createElement("div");

c.innerHTML=["💖","🌸","✨","💕"][Math.floor(Math.random()*4)];

c.style.position="fixed";
c.style.left=Math.random()*100+"vw";
c.style.top="-30px";
c.style.fontSize=(15+Math.random()*20)+"px";

document.body.appendChild(c);

let y=-30;

const fall=setInterval(()=>{

y+=4;

c.style.top=y+"px";

if(y>window.innerHeight){

clearInterval(fall);

c.remove();

}

},15);

},i*30);

}

}
// Typewriter Effect

const text = "💖 For Tikli 💖";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
    }
}

window.onload = function () {
    typeWriter();
};
