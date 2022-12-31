import 'swiper/swiper-bundle'
import './swiper'
import '../scss/style.scss'

console.log('Works!')

let upperMenuBtnBurger = document.querySelector('.upper-menu__btn-burger');
let leftMenuBtnBurger = document.querySelector('.left-menu__btn-burger');

let feedbackBtnBurger = document.querySelector('.feedback__btn-burger');
let btnChat = document.querySelectorAll('.btn--chat');
let feedback = document.querySelector('.feedback-body');

let orderCallBtnBurger = document.querySelector('.order-call__btn-burger');
let btnCall = document.querySelectorAll('.btn--call');
let orderCall = document.querySelector('.order-call-body');

let leftMenu = document.querySelector('.body-left-menu');
let lm = document.querySelector('.left-menu');
let body = document.querySelector('.body')

function closePopup(variable, className) {

  document.onclick = function (e) {

    if (variable.style.display !== 'none') {

      if (e.target.className === className) {
        variable.style.display = 'none';
      }
    } else if (leftMenu.style.display === 'none') {
      document.onclick = () => {
      }
    } else closePopup(leftMenu, 'body-left-menu');
  }

}


upperMenuBtnBurger.addEventListener('click', () => {
  leftMenu.style.display = 'block';
  closePopup(leftMenu, 'body-left-menu');
})

leftMenuBtnBurger.addEventListener('click', () => {
  leftMenu.style.display = 'none';
  body.style.overflow = 'unset';
})

for (let i = 0; i < btnChat.length; i++) {
  btnChat[i].addEventListener('click', () => {
    feedback.style.display = 'block';
    body.style.overflow = 'hidden';

    closePopup(feedback, 'feedback-body');
  })
}



feedbackBtnBurger.addEventListener('click', () => {
  feedback.style.display = 'none';
  body.style.overflow = 'unset';
})
for (let i = 0; i < btnChat.length; i++) {
  btnCall[i].addEventListener('click', () => {
    orderCall.style.display = 'block';
    body.style.overflow = 'hidden';
    closePopup(orderCall, 'order-call-body');

  })
}


orderCallBtnBurger.addEventListener('click', () => {
  orderCall.style.display = 'none';
  body.style.overflow = 'unset';
})

window.addEventListener('resize', function () {
  let windowInnerWidth = window.innerWidth;
  if (windowInnerWidth >= 1366 && feedback.style.display === 'none' && orderCall.style.display === 'none') {
    leftMenu.style.display = 'flex';
    body.style.overflow = 'unset';
  } else if (leftMenu.style.display !== 'none') {
    body.style.overflow = 'hidden';
  }
});

