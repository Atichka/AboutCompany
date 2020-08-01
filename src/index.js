import "./index.css";

const buttonWork = document.querySelector('.button__work');
const buttonClose = document.querySelector('.button__close');

function stutusButtonWork() {
  buttonWork.classList.add("hide");
  buttonClose.classList.remove("hide");
}

function stutusButtonClose() {
  buttonClose.classList.add("hide");
  buttonWork.classList.remove("hide");
}

buttonWork.addEventListener('click', stutusButtonWork);
buttonClose.addEventListener('click', stutusButtonClose);
