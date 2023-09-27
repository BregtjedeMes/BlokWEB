// JavaScript Document
console.log("hi");

ProductInformatie = document.querySelector(".product section:nth-of-type(2) article > ul li:nth-of-type(1) button")
AfMetingen = document.querySelector(".product section:nth-of-type(2) article > ul li:nth-of-type(2) button")
Reviews = document.querySelector(".product section:nth-of-type(2) article > ul li:nth-of-type(3) button")

ProcessingInformatieDrawer = document.querySelector(".product section:nth-of-type(2) article ul li:nth-of-type(1) div");
AfMetingenDrawer = document.querySelector(".product section:nth-of-type(2) article ul li:nth-of-type(2) div");
ReviewsDrawer = document.querySelector(".product section:nth-of-type(2) article ul li:nth-of-type(3) div");

ProductInformatie.onclick = openProductInformation;

function openProductInformation() {
    ProcessingInformatieDrawer.classList.add('open');
};

AfMetingen.onclick = openAfMetingen;

function openAfMetingen() {
    AfMetingenDrawer.classList.add('open');
};

Reviews.onclick = openReviews;

function openReviews() {
    ReviewsDrawer.classList.add('open');
};

CloseButton = document.querySelector(".product section:nth-of-type(2) article > ul li div button");

CloseButton.onclick = CloseDrawer;

function CloseDrawer() {
    ProcessingInformatieDrawer.classList.remove('open');
    AfMetingenDrawer.classList.remove('open');
    ReviewsDrawer.classList.remove('open');
    console.log("clicked");
}


