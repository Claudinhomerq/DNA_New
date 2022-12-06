window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var img = document.querySelector("#trocar_img");

  nav.classList.toggle("bg-dark", window.scrollY > 550);
  img.setAttribute("src", "/img/png_sem fundo.png", window.scrollY > 550);
});
