//toggle the mobile menu button
const navLinks = document.getElementById("nav-links-js");
const menuBtn = document.querySelector(".mobile-menu-button-js"); 

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = menuBtn.querySelector("i");
    if(navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");s
    }
})

// click nav link then close xmark and its tab
document.querySelectorAll(".nav-items").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        let icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    })
})

//whatsApp integration
const whatsAppNumber = "917306715959";
const whatsAppBtns = document.querySelectorAll(".whatsApp-btn-js")

whatsAppBtns.forEach( btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault(); //used to cancel a browser's default action associated with an event
        const msg = btn.getAttribute('data-message');
        const encodedMessage = encodeURIComponent(msg);
        const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
        window.open(whatsAppUrl, '_blank');
    })
})