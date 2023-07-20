const closed = document.querySelector(".closed");
const opened = document.querySelector(".opened");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");

// Eventos
btnOpen.addEventListener("click", openCookie);
btnClose.addEventListener("click", closeCookie);

// Funções
function openCookie(event) {
  event.preventDefault();

  closed.classList.add("hide");
  opened.classList.remove("hide");
}

function closeCookie(event) {
  event.preventDefault();

  closed.classList.remove("hide");
  opened.classList.add("hide");
}
