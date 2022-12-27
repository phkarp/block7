import Swiper from "swiper/swiper-bundle";

let btnShowAll = document.querySelector('.repair-block__btn-show-more');
let linkContainerBrands = document.querySelector('.repair-block__brands')
let windowInnerWidth;
let swiperBrand = document.querySelector('.swiper')

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight;
}

function btnHidden() {
    if (!isOverflown(linkContainerBrands) && (linkContainerBrands.clientHeight < 250)) {
        if (!btnShowAll.classList.contains('repair-block__btn-show-more--hidden')) {
            btnShowAll.classList.add('repair-block__btn-show-more--hidden');
        }
    } else {
        if (btnShowAll.classList.contains('repair-block__btn-show-more--hidden')) {
            btnShowAll.classList.remove('repair-block__btn-show-more--hidden');
        }
    }
}

btnShowAll.addEventListener('click', function () {
    if (linkContainerBrands.classList.contains('repair-block__brands--show')) {
        linkContainerBrands.classList.remove('repair-block__brands--show');
        btnShowAll.classList.toggle('repair-block__btn-show-more--up');
        btnShowAll.textContent = 'Показать все';
    } else {
        linkContainerBrands.classList.add('repair-block__brands--show');
        btnShowAll.classList.toggle('repair-block__btn-show-more--up');
        btnShowAll.textContent = 'Cкрыть';
    }
})

window.addEventListener('resize', function () {
    btnHidden();
    windowInnerWidth = window.innerWidth;
    if (windowInnerWidth < 768) {
        swiperBrand.style.display = 'block';
        // console.log(windowInnerWidth);
    } else {
        swiperBrand.style.display = 'none';
        // console.log(windowInnerWidth);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    btnHidden();
    windowInnerWidth = window.innerWidth;
    if (windowInnerWidth >= 320 && windowInnerWidth < 768) {
        swiperBrand.style.display = 'block';
    } else {
        swiperBrand.style.display = 'none';
    }
})

if (windowInnerWidth >= 320 && windowInnerWidth < 768) {
    swiperBrand.style.display = 'none';
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    slidesPerView: 1.1,
    spaceBetween: 5,
});

const swiper2 = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  slidesPerView: 1.1,
  spaceBetween: 5,
});

