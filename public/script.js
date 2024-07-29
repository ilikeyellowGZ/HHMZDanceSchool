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
