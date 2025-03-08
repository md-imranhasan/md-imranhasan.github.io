document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".navbar ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("ResumeBtn").addEventListener("click", function () {
    window.open("cv.pdf", "_blank");
  });
});
