const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelector(".nav-links");

mobileNav.addEventListener("click",(event)=>{
    if(navLinks.style.display == "none"){
        navLinks.style.display = "flex";
        navLinks.classList.add("open");
    }else{
        navLinks.style.display = "none";
        navLinks.classList.remove("open");
    }
});
