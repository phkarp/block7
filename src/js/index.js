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

let beforeFeedback = document.querySelector('.feedback');

let leftMenu = document.querySelector('.body-left-menu');
let body = document.querySelector('.body')


document.onclick = function (e) {
  console.log(1);
  if (feedback.style.display !== 'none') {
    console.log(2);
    if (e.target.className === 'feedback-body') {
      feedback.style.display = 'none';
      console.log(3);
    }
  }

  if (orderCall.style.display !== 'none') {
    console.log(4);
    if (e.target.className === 'order-call-body') {
      orderCall.style.display = 'none';
      console.log(5);
    }
  }

}


upperMenuBtnBurger.addEventListener('click', () => {
  leftMenu.style.display = 'block';
})

leftMenuBtnBurger.addEventListener('click', () => {
  leftMenu.style.display = 'none';
  body.style.overflow = 'unset';
})
for (let i = 0; i < btnChat.length; i++) {
  btnChat[i].addEventListener('click', () => {
    feedback.style.display = 'block';
    body.style.overflow = 'hidden';
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

