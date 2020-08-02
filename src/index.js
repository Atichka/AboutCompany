import "./index.css";

const buttonWork = document.querySelector('.button__work');
const buttonClose = document.querySelector('.button__close');
const error = document.querySelector('.comment__error');
const btnSend = document.querySelector('.comment__button');
const input = document.querySelector('.comment__input');
const btnComment = document.querySelector('.look__comment');
const comment = document.querySelector('.comment');

function stutusButtonWork() {
  buttonWork.classList.add("hide");
  buttonClose.classList.remove("hide");
}

function stutusButtonClose() {
  buttonClose.classList.add("hide");
  buttonWork.classList.remove("hide");
}

function validate() {
  if(input.textContent==="") {
    error.textContent="Для оставления отзывов заполните информацию о себе в профиле";
    error.style="display: block;";
  }
}

function openComment() {
  comment.style=("display: block;");
}

buttonWork.addEventListener('click', stutusButtonWork);
buttonClose.addEventListener('click', stutusButtonClose);
btnSend.addEventListener('click', validate);
btnComment.addEventListener('click', openComment);

