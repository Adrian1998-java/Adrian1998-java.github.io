let elementos;

document.addEventListener("DOMContentLoaded", () => {
  elementos = document.querySelectorAll(".col");

  elementos.forEach((e, index) => {
    setTimeout(() => {
      e.classList.add("card-animation");
      e.classList.remove("hidden");
    }, 1000 + (index * 250));
  });
});
