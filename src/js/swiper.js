import Swiper from "swiper/swiper-bundle";

let btnShowAllRepairBlock = document.querySelector('.repair-block__btn-show-more');
let btnShowAllRepairTechnic = document.querySelector('.repair-technic__btn-show-more');

let repairBlockBrands = document.querySelector('.repair-block__brands');
let repairTechnicBrands = document.querySelector('.repair-technic__brands');

let windowInnerWidth;
let swiperBrand = document.querySelectorAll('.swiper');

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight;
}

function btnHidden() {
    if (!isOverflown(repairBlockBrands) && (repairBlockBrands.clientHeight < 250)) {
        if (!btnShowAllRepairBlock.classList.contains('repair-block__btn-show-more--hidden')) {
            btnShowAllRepairBlock.classList.add('repair-block__btn-show-more--hidden');
        }

    } else {
        if (btnShowAllRepairBlock.classList.contains('repair-block__btn-show-more--hidden')) {
            btnShowAllRepairBlock.classList.remove('repair-block__btn-show-more--hidden');
        }
    }

  if (!isOverflown(repairTechnicBrands) && (repairTechnicBrands.clientHeight < 250)) {
    if (!btnShowAllRepairTechnic.classList.contains('repair-technic__btn-show-more--hidden')) {
      btnShowAllRepairTechnic.classList.add('repair-technic__btn-show-more--hidden');
    }

  } else {
    if (btnShowAllRepairTechnic.classList.contains('repair-technic__btn-show-more--hidden')) {
      btnShowAllRepairTechnic.classList.remove('repair-technic__btn-show-more--hidden');
    }
  }
}

btnShowAllRepairBlock.addEventListener('click', function () {
    if (repairBlockBrands.classList.contains('repair-block__brands--show')) {
        repairBlockBrands.classList.remove('repair-block__brands--show');
        btnShowAllRepairBlock.classList.toggle('repair-block__btn-show-more--up');
        btnShowAllRepairBlock.textContent = 'Показать все';
    } else {
        repairBlockBrands.classList.add('repair-block__brands--show');
        btnShowAllRepairBlock.classList.toggle('repair-block__btn-show-more--up');
        btnShowAllRepairBlock.textContent = 'Cкрыть';
    }
})

btnShowAllRepairTechnic.addEventListener('click', function () {
  if (repairTechnicBrands.classList.contains('repair-technic__brands--show')) {
    repairTechnicBrands.classList.remove('repair-technic__brands--show');
    btnShowAllRepairTechnic.classList.toggle('repair-technic__btn-show-more--up');
    btnShowAllRepairTechnic.textContent = 'Показать все';
  } else {
    repairTechnicBrands.classList.add('repair-technic__brands--show');
    btnShowAllRepairTechnic.classList.toggle('repair-technic__btn-show-more--up');
    btnShowAllRepairTechnic.textContent = 'Cкрыть';
  }
})

window.addEventListener('resize', function () {
    btnHidden();
    windowInnerWidth = window.innerWidth;
    if (windowInnerWidth < 768) {
        for (let i = 0; i < swiperBrand.length; i++) {
          swiperBrand[i].style.display = 'block';
        }
        // console.log(windowInnerWidth);
    } else {
      for (let i = 0; i < swiperBrand.length; i++) {
        swiperBrand[i].style.display = 'none';
      }
        // console.log(windowInnerWidth);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    btnHidden();
    windowInnerWidth = window.innerWidth;
    if (windowInnerWidth >= 320 && windowInnerWidth < 768) {
      for (let i = 0; i < swiperBrand.length; i++) {
        swiperBrand[i].style.display = 'block';
      }
    } else {
      for (let i = 0; i < swiperBrand.length; i++) {
        swiperBrand[i].style.display = 'none';
      }
    }
})

if (windowInnerWidth >= 320 && windowInnerWidth < 768) {
  for (let i = 0; i < swiperBrand.length; i++) {
    swiperBrand[i].style.display = 'none';
  }
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
});

console.log(swiper);
