const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const opique = document.getElementById("blackForContact");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.body;

openBtn.addEventListener("click", () => {
    mobileNav.classList.add("show");
    mobileNav.classList.remove("hide");
    opique.style.zIndex = 14
    body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
    mobileNav.classList.add("hide");
    mobileNav.classList.remove("show");
    opique.style.zIndex = -1
    body.classList.remove("no-scroll");
});

document.addEventListener("click", (event) => {
    if (!mobileNav.contains(event.target) && !openBtn.contains(event.target)) {
        mobileNav.classList.add("hide");
        mobileNav.classList.remove("show");
        body.classList.remove("no-scroll");
    }
});

const navContactBtn = document.getElementById("contact");
const heroContactBtn = document.getElementById("main_CTA");
const mainContact = document.getElementById("contactForm");
const contactCloseBtn = document.getElementById("closeTwo");

function openContactForm() {
    mainContact.classList.add("slideInOpen");
    mainContact.classList.remove("slideOutClose");
    opique.style.zIndex = 14
    document.body.style.overflow = "hidden"; 
}


function closeContactForm() {
    mainContact.classList.remove("slideInOpen");
    mainContact.classList.add("slideOutClose");
    opique.style.zIndex = -1
    document.body.style.overflow = "auto"; 
}


navContactBtn.addEventListener("click", openContactForm);
heroContactBtn.addEventListener("click", openContactForm);
contactCloseBtn.addEventListener("click", closeContactForm);


const faqButtons = document.querySelectorAll(".FAQcontact");

faqButtons.forEach(button => {
    button.addEventListener("click", openContactForm);
});
contactCloseBtn.addEventListener("click", closeContactForm);

document.addEventListener("click", function(event) {
    const isClickInsideFaqButton = Array.from(faqButtons).some(button => button.contains(event.target));
    
    if (!mainContact.contains(event.target) && !navContactBtn.contains(event.target) && !heroContactBtn.contains(event.target) && !contactCloseBtn.contains(event.target) && !isClickInsideFaqButton) {
        closeContactForm();
    }
});

const moreTikTokInfoBtn = document.querySelector("#tikTok .hiddenText");
const moreAfroBeatInfoBtn = document.querySelector("#afroBeat .hiddenText");
const moreBreakDanceInfoBtn = document.querySelector("#breakDance .hiddenText");
const moreHipHopInfoBtn = document.querySelector("#hipHop .hiddenText");
const moreurbanDanceInfoBtn = document.querySelector("#urbanDance .hiddenText");
const moreAmapianoInfoBtn = document.querySelector("#amapiano .hiddenText");


const TikTokImg = document.querySelector("#tikTok .tiktok");
const AfroBeatImg = document.querySelector("#afroBeat .AfroBeat");
const BreakDanceImg = document.querySelector("#breakDance .breakDance");
const HipHopImg = document.querySelector("#hipHop .hipHop");
const urbanDanceImg = document.querySelector("#urbanDance .UrbanDance");
const AmapianoImg = document.querySelector("#amapiano .Amapiano");

const TikTokReadLess = document.querySelector("#tikTok .ReadLess");
const AfroBeatReadLess = document.querySelector("#afroBeat .ReadLess");
const BreakDanceReadLess = document.querySelector("#breakDance .ReadLess");
const HipHopReadLess = document.querySelector("#hipHop .ReadLess");
const urbanDanceReadLess = document.querySelector("#urbanDance .ReadLess");
const AmapianoReadLess = document.querySelector("#amapiano .ReadLess");

const TikTokReadMore = document.querySelector("#tikTok .ReadMore");
const AfroBeatReadMore = document.querySelector("#afroBeat .ReadMore");
const BreakDanceReadMore = document.querySelector("#breakDance .ReadMore");
const HipHopReadMore = document.querySelector("#hipHop .ReadMore");
const urbanDanceReadMore = document.querySelector("#urbanDance .ReadMore");
const AmapianoReadMore = document.querySelector("#amapiano .ReadMore");

TikTokReadMore.addEventListener("click", () => {
    TikTokReadMore.classList.add("none");
    TikTokReadLess.classList.remove("none");
    moreTikTokInfoBtn.classList.remove("none");
});

TikTokReadLess.addEventListener("click", () => {
    TikTokReadMore.classList.remove("none");
    TikTokReadLess.classList.add("none");
    moreTikTokInfoBtn.classList.add("none");
});

AfroBeatReadMore.addEventListener("click", () => {
    AfroBeatReadMore.classList.add("none");
    AfroBeatReadLess.classList.remove("none");
    moreAfroBeatInfoBtn.classList.remove("none");
});

AfroBeatReadLess.addEventListener("click", () => {
    AfroBeatReadMore.classList.remove("none");
    AfroBeatReadLess.classList.add("none");
    moreAfroBeatInfoBtn.classList.add("none");
});

BreakDanceReadMore.addEventListener("click", () => {
    BreakDanceReadMore.classList.add("none");
    BreakDanceReadLess.classList.remove("none");
    moreBreakDanceInfoBtn.classList.remove("none");
});

BreakDanceReadLess.addEventListener("click", () => {
    BreakDanceReadMore.classList.remove("none");
    BreakDanceReadLess.classList.add("none");
    moreBreakDanceInfoBtn.classList.add("none");
});

HipHopReadMore.addEventListener("click", () => {
    HipHopReadMore.classList.add("none");
    HipHopReadLess.classList.remove("none");
    moreHipHopInfoBtn.classList.remove("none");
});

HipHopReadLess.addEventListener("click", () => {
    HipHopReadMore.classList.remove("none");
    HipHopReadLess.classList.add("none");
    moreHipHopInfoBtn.classList.add("none");
});

urbanDanceReadMore.addEventListener("click", () => {
    urbanDanceReadMore.classList.add("none");
    urbanDanceReadLess.classList.remove("none");
    moreurbanDanceInfoBtn.classList.remove("none");
});

urbanDanceReadLess.addEventListener("click", () => {
    urbanDanceReadMore.classList.remove("none");
    urbanDanceReadLess.classList.add("none");
    moreurbanDanceInfoBtn.classList.add("none");
});

AmapianoReadMore.addEventListener("click", () => {
    AmapianoReadMore.classList.add("none");
    AmapianoReadLess.classList.remove("none");
    moreAmapianoInfoBtn.classList.remove("none");
});

AmapianoReadLess.addEventListener("click", () => {
    AmapianoReadMore.classList.remove("none");
    AmapianoReadLess.classList.add("none");
    moreAmapianoInfoBtn.classList.add("none");
});

