let divAtiva = null;
const divs = document.querySelectorAll("#divImg");

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function ({ target }) {
    if (target.classList.contains("divAtiva")) {
      target.classList.remove("divAtiva");
      divAtiva == null;
    }
    if (divAtiva != null) {
      divAtiva.classList.remove("divAtiva");
    }
    target.classList.add("divAtiva");
    divAtiva = target;
  });
}
