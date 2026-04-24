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

// click xmark to close tab
menuBtn.addEventListener()