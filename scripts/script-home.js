// JavaScript Document
console.log("hi");

menuOpen = document.querySelector("header ul li > button");
menuClose = document.querySelector("header ul li nav button");
Nav = document.querySelector("header ul nav");

menuOpen.onclick = MenuOpen;

function MenuOpen() {
    Nav.classList.add('open-menu');
    console.log('clicked menu');
}

menuClose.onclick = MenuClose;

function MenuClose() {
    Nav.classList.remove('open-menu');
    console.log('clicked menu');
}





var opslaanHearthome = document.querySelectorAll("section:nth-of-type(6) > ul li button:nth-of-type(1)");
headerHeart = document.querySelector("header > ul li:nth-of-type(4) a svg");

for (let i = 0; i < opslaanHearthome.length; i++) {
    opslaanHearthome[i].onclick = opslaanHeart;
}

function opslaanHeart() {

    console.log('like');

    headerHeart.classList.add('heartAnimation');

    if (headerHeart.classList.contains('headerHeartproperties')) {
        
    } else {
        headerHeart.classList.add('headerHeartproperties');
    }

    setTimeout(removeAnimation, 1000);
}

function removeAnimation() {
    headerHeart.classList.remove('heartAnimation');
}




MeerLaden = document.querySelector("section:nth-last-of-type(1) > button");
Body = document.querySelector("body");
Header =  document.querySelector("header")
laserDiv = document.querySelector("body main > div");
stickyUl = document.querySelector("section:nth-of-type(6) > div");


MeerLaden.onclick = Verrassing;

function Verrassing() {
    stickyUl.classList.toggle('verrassing-background');
    Nav.classList.toggle('verrassing-background');
    Header.classList.toggle('verrassing-background');
    laserDiv.classList.toggle('animation-verrassing-2');
    Body.classList.toggle('animation-verrassing');
    console.log('clicked verrassing');
}
