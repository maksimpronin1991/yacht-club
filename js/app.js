  let modalBtn = document.querySelector('.top__btn');
  let modalWindow = document.querySelector('#contact__form__modal');
  let body = document.querySelector('body');
  let closeBtn = document.querySelector('.close__modal__btn');
  let closeBtn2 = document.querySelector('.close__modal__btn__form');
  let afterOrderBtn = document.querySelector('#contact__form__modal__after');
  let afterOrderBtnForm = document.querySelector('.thanks_btn')
  let modalWindowThanks = document.querySelector('#thanks__modal');
  let modalMask = document.querySelector('.modal');
  let modalDialog = document.querySelector('.modal__dialog');
  let modalDialogForm = document.querySelector('.modal__dialog__form');

/*modal form */


modalBtn.onclick = function(event){
  event.preventDefault()
  body.classList.add('no__scroll')
  modalWindow.classList.add('show');
};


closeBtn.onclick = function(event){
  event.preventDefault()
  body.classList.remove('no__scroll');
  modalWindow.classList.remove('show'); 
  modalWindowThanks.classList.remove('show');

};

closeBtn2.onclick = function(event){
  event.preventDefault()
  body.classList.remove('no__scroll');
  modalWindow.classList.remove('show'); 
};

/*widow thanks after send form */

afterOrderBtn.onclick = function(event){
  event.preventDefault()
  modalWindowThanks.classList.add('show');
  body.classList.add('no__scroll')
 
}
afterOrderBtnForm.onclick = function(event){
  event.preventDefault()
  modalWindowThanks.classList.add('show');
  body.classList.add('no__scroll')
  modalWindow.classList.remove('show'); 
}


/*for mask click */

modalMask.onclick = function(event){
  body.classList.remove('no__scroll');
  modalWindow.classList.remove('show'); 
  modalWindowThanks.classList.remove('show');
}

modalDialog.onclick = function(event){
event.stopPropagation()
}


modalWindow.onclick = function(event){
  body.classList.remove('no__scroll');
  modalWindow.classList.remove('show'); 
  modalWindowThanks.classList.remove('show');
}

modalDialogForm.onclick = function(event){
  event.stopPropagation()
  }


/*slyder for rewiews slick*/


  const workSlider = $('[data-slider="slick"]')
  workSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 
    dots: true,
    arrows: false
  });

  const slickPrev = document.querySelector('.reviews__slide__btn__prev')

  slickPrev.onclick = function(event){
  event.preventDefault();
  workSlider.slick("slickPrev");

}

const slickNext = document.querySelector('.reviews__slide__btn__next')

slickNext.onclick = function(event){
  event.preventDefault();
  workSlider.slick("slickNext");

}

/* galerry */


const sliderGalleryM = $('[data-slider="slickM"]');

if (window.innerWidth <= 565){
  sliderGalleryM.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 
    dots: false,
    arrows: false
  });
}

const slickPrevGal = document.querySelector('.btn__gallery__prev')

slickPrevGal.onclick = function(event){
event.preventDefault();
sliderGalleryM.slick("slickPrev");

}

const slickNextGal = document.querySelector('.btn__gallery__next')

slickNextGal.onclick = function(event){
event.preventDefault();
sliderGalleryM.slick("slickNext");
}




const textBtns = document.querySelectorAll('.gallery__card__btn');
const textTexts =  document.querySelector('.gallery__card__text');

for (let textBtn of textBtns) {
  textBtn.onclick = function() {
    textTexts.classList.toggle('textSee');
  };
}

let burgerBtn = document.querySelector('.burger');
let navMenu = document.querySelector('.in__nav__burger');
let navNumberNone = document.querySelector('.nav__link__none');
let showBurgerCl = document.querySelector('.showBurger');


burgerBtn.onclick = function(event){
  event.preventDefault();
  navMenu.classList.toggle('showBurger');
  navNumberNone.classList.toggle('dispNone');
  let asd = function(){
    navMenu.classList.toggle('open-menu')
  } 
  setTimeout(asd,200)
}

