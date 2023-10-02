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





ProductInformatie = document.querySelector(".product section:nth-of-type(2) article > ul li:nth-of-type(1) button");
AfMetingen = document.querySelector(".product section:nth-of-type(2) article > ul li:nth-of-type(2) button");

ProcessingInformatieDrawer = document.querySelector(".product section:nth-of-type(2) article ul li:nth-of-type(1) div");
AfMetingenDrawer = document.querySelector(".product section:nth-of-type(2) article ul li:nth-of-type(2) div");

ProductInformatie.onclick = openProductInformation;

function openProductInformation() {
    ProcessingInformatieDrawer.classList.add('open');
};

AfMetingen.onclick = openAfMetingen;

function openAfMetingen() {
    AfMetingenDrawer.classList.add('open');
};

CloseProductinformation = document.querySelector(".product section:nth-of-type(2) article > ul li:nth-of-type(1) div  button");
CloseProductafmetingen = document.querySelector(".product section:nth-of-type(2) article > ul li:nth-of-type(2) div button");

CloseProductinformation.onclick = CloseDrawer;
CloseProductafmetingen.onclick = CloseDrawer;

function CloseDrawer() {
    ProcessingInformatieDrawer.classList.remove('open');
    AfMetingenDrawer.classList.remove('open');
    console.log("clicked");
}





MeerLaden = document.querySelector("section:nth-last-of-type(1) > button");
Body = document.querySelector("body");
laserDiv = document.querySelector("body main > div");
stickyUl = document.querySelector("section:nth-of-type(6) ul:nth-of-type(1)");


MeerLaden.onclick = Verrassing;

function Verrassing() {
    stickyUl.classList.toggle('verrassing-background');
    Nav.classList.toggle('verrassing-background');
    laserDiv.classList.toggle('animation-verrassing-2');
    Body.classList.toggle('animation-verrassing');
    console.log('clicked verrassing');
}
