const homebtn = document.getElementById("home");
const backImg = document.getElementById("backImg");
const optionImg = document.getElementById("optionImg");
const main = document.getElementById("main");
const tme = document.getElementById("time");
const full = document.getElementById("full");
const message = document.getElementById("message");
let toggle = false;

function getMyTime(){
    let mytime = new Date().toLocaleTimeString().split(" ");
    let onlytime = mytime[0].split("");
    onlytime.pop();
    onlytime.pop();
    onlytime.pop();
    let joinedtime = onlytime.join("");
    tme.innerHTML = `${joinedtime} ${mytime[1]}`;
}

function refreshtime(){
    getMyTime();
    setInterval(getMyTime, 30000);
}

refreshtime();

function startup(){
    main.style.backgroundImage = `url(./Img/paper.jpg)`; 
    backImg.src = `./Img/back.png`;
    optionImg.src = `./Img/options.png`;
    full.style.display = "flex"; 
    message.style.display = "none"; 
    toggle = true;
}

function sleep(){
    main.style.backgroundImage = `none`;
    backImg.src = `./Img/back-inactive.png`;
    optionImg.src = `./Img/options-inactive.png`;
    full.style.display = "none"; 
    toggle = false;
}

homebtn.addEventListener("click", function(){
    toggle ? sleep() : startup();
});