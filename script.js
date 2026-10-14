const element = document.getElementById("imagem-problema");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");
    }
  });
},{threshold: 0.5});
document.querySelectorAll(".revelar").forEach((el) => observer.observe(el));