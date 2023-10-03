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

var CloseInfoDrawer = document.querySelectorAll(".product section:nth-of-type(2) article > ul li div  button");

for (let i = 0; i < CloseInfoDrawer.length; i++) {
    CloseInfoDrawer[i].onclick = CloseDrawer;
  }

function CloseDrawer() {
    ProcessingInformatieDrawer.classList.remove('open');
    AfMetingenDrawer.classList.remove('open');
    console.log("clicked");
}




var addtoCartButtons = document.querySelectorAll(".product section:nth-of-type(3) article > button:nth-of-type(1)");
cartBubble = document.querySelector("header > ul li:nth-of-type(5) a span");

for (let i = 0; i < addtoCartButtons.length; i++) {
  addtoCartButtons[i].onclick = addToShoppingCart;
}

function addToShoppingCart() {

    console.log('added to cart');

    if (cartBubble.classList.contains('showCartamount')) {
        
    } else {
        cartBubble.classList.add('showCartamount')
    }

    let shoppingCartAmount = document.querySelector("header ul li:nth-of-type(5) a span");
    let currentAmount = shoppingCartAmount.innerHTML;
    currentAmount = parseInt(currentAmount);
    let newAmount = currentAmount + 1;
    shoppingCartAmount.innerHTML = newAmount;

    cartBubble.classList.add('cartAmount');

    setTimeout(removeAnimation, 1000);
}

function removeAnimation() {
    cartBubble.classList.remove('cartAmount');
}




var opslaanHeartproduct = document.querySelectorAll(".product section:nth-of-type(3) article button:nth-of-type(2)");
headerHeart = document.querySelector("header > ul li:nth-of-type(4) a svg");

for (let i = 0; i < opslaanHeartproduct.length; i++) {
    opslaanHeartproduct[i].onclick = opslaanHeart;
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
