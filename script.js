'use strict';

// Function to toggle sections
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("[data-nav-link]");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        sections.forEach(section => section.classList.remove("active"));
        navLinks.forEach(nav => nav.classList.remove("active"));

        document.getElementById(this.getAttribute("data-nav-link")).classList.add("active");
        this.classList.add("active");
        window.scrollTo(0, 0);
    });
});
