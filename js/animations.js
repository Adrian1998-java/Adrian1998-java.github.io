document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".col");

  elementos.forEach(e => {
    e.addEventListener("mouseover", () => {
      e.classList.add("scale-in-out");
    });
    e.addEventListener("mouseout", () => {
      e.classList.remove("scale-in-out");
    });
  });
});