document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  // Loop through each link and add an event listener
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      // If the link is for an external page, allow default navigation
      if (this.getAttribute("href").includes(".html")) {
        return;
      }

      // Otherwise, scroll to section within the same page
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});
