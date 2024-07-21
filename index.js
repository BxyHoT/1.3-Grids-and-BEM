const btnShowAll1 = document.querySelector('.cards-brends__read-more');
const items = Array.from(document.querySelectorAll('.cards-brends__item'));
let itemsHiden = false;

btnShowAll1.addEventListener('click', showAll);

function responseOnWindowWidth() {
  if ((window.innerWidth >= 1016 && window.innerWidth <= 1120) || 1350 <= window.innerWidth) {
    items.forEach((item, index) => {
      if (index > 7) {
        item.style.display = 'none';
        if (window.innerWidth < 1350) {
          document.querySelector('.cards__container').style.maxWidth = '1016px';
          document.querySelectorAll('.cards__container')[1].style.maxWidth = '1016px';
        }
      }
    })
  }
  else {
    items.forEach((item, index) => {
      if (index > 5) {
        item.style.display = 'none';
      }
    })
  }
  itemsHiden = true;
};
responseOnWindowWidth();

function showAll() {
  if (itemsHiden) {
    items.forEach((item) => {
      item.style.display = 'flex';
    });
    itemsHiden = false;
    btnShowAll1.innerText = 'Скрыть';
    btnShowAll1.style.background = 'url("img/logo/expand180.svg") no-repeat 0 50%';
    btnShowAll1.style.margin = '46px 0 0 0';
  }
  else {
    responseOnWindowWidth();
    btnShowAll1.innerText = 'Показать всё';
    btnShowAll1.style.background = 'url("img/logo/expand.svg") no-repeat 0 50%';
    btnShowAll1.style.margin = '24px 0 0 0';
  }
};

function onResize() {
  if (window.innerWidth < 1350) {
    document.querySelector('.cards__container').style.maxWidth = '768px';
    document.querySelectorAll('.cards__container')[1].style.maxWidth = '768px';
  } else {
    document.querySelector('.cards__container').style.maxWidth = '1120px';
    document.querySelectorAll('.cards__container')[1].style.maxWidth = '1120px';
  }
  items.forEach((item) => {
    item.style.display = 'flex';
  });
  responseOnWindowWidth();
  items2.forEach((item) => {
    item.style.display = 'flex';
  });
  responseOnWindowWidth2();
}

const burgerMenu = document.querySelector('.burger-menu');

window.addEventListener('resize', onResize);

const btnShowAll2 = document.querySelector('.cards-tech__read-more');
const items2 = Array.from(document.querySelectorAll('.cards-tech__item'));
let itemsHiden2 = false;

function responseOnWindowWidth2() {
  if ((window.innerWidth >= 1016 && window.innerWidth <= 1120) || 1350 <= window.innerWidth) {
    items2.forEach((item, index) => {
      if (index > 3) {
        item.style.display = 'none';
      }
    })
  }
  else {
    items2.forEach((item, index) => {
      if (index > 2) {
        item.style.display = 'none';
      }
    })
  }
  itemsHiden2 = true;
};
responseOnWindowWidth2();

btnShowAll2.addEventListener('click', showAll2);

function showAll2() {
  if (itemsHiden2) {
    items2.forEach((item) => {
      item.style.display = 'flex';
    });
    itemsHiden2 = false;
    btnShowAll2.innerText = 'Скрыть';
    btnShowAll2.style.background = 'url("img/logo/expand180.svg") no-repeat 0 50%';
    btnShowAll2.style.margin = '46px 0 0 0';
  }
  else {
    responseOnWindowWidth2();
    btnShowAll2.innerText = 'Показать всё';
    btnShowAll2.style.background = 'url("img/logo/expand.svg") no-repeat 0 50%';
    btnShowAll2.style.margin = '24px 0 0 0';
  }
};



const btnReadMore = document.querySelector('.main__read-more');
const menuOpenBtn = document.querySelector('.menu__burgermenu');
const menuCloseBtn = document.querySelector('.burger-menu__back');
const menuCloseBlur = document.querySelector('.blur');


btnReadMore.addEventListener('click', readMore);
menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);
menuCloseBlur.addEventListener('click', closeMenu);



function readMore() {
  const mainTextItem2 = document.querySelectorAll('.main__text-item')[0];
  const mainTextItem3 = document.querySelectorAll('.main__text-item')[1];
  const mainTextItem4 = document.querySelectorAll('.main__text-item')[2];
  if (mainTextItem4.classList.contains('hidden')) {
    mainTextItem4.classList.toggle('hidden');
    btnReadMore.innerText = 'Скрыть';
    btnReadMore.style.background = 'url("img/logo/expand180.svg") no-repeat 0 50%';
    btnReadMore.style.margin = '46px 0 16px 16px';
    mainTextItem2.style.display = 'inline';
    mainTextItem3.style.display = 'inline';
  } else {
    mainTextItem4.classList.toggle('hidden');
    btnReadMore.innerText = 'Читать далее';
    btnReadMore.style.background = 'url("img/logo/expand.svg") no-repeat 0 50%';
    btnReadMore.style.margin = '16px';
    mainTextItem2.style.display = 'inline-block';
    if (window.innerWidth < 768) {
      mainTextItem3.style.display = 'none';
    } else mainTextItem3.style.display = 'inline-block';
  }
};


function openMenu() {
  document.querySelector('.burger-menu__body').style.boxShadow = '16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02)';
  document.querySelector('.burger-menu').style.left = '0';
  setTimeout(() => { menuCloseBlur.style.display = 'block'; }, 500);
};

function closeMenu() {
  menuCloseBlur.style.display = 'none';
  if (window.innerWidth > 1120) {
    document.querySelector('.burger-menu').style.left = '-320px';
  } else document.querySelector('.burger-menu').style.left = '-360px';
  document.querySelector('.burger-menu__body').style.boxShadow = 'none';
};

function offSwiper() {
  if (window.innerWidth > 768 && window.innerWidth > window.innerHeight) {
    const swipers = document.querySelectorAll('.swiper-contsiner');
    swipers.forEach((item) => {
      item.setAttribute('init', 'false');
    })
  }
};

offSwiper();

const message = document.querySelector('.menu__ic-chat');
const message2 = document.querySelectorAll('.menu__ic-chat')[1];
const modalChat = document.querySelector('.modal-feedback');
const modalChatOff = document.querySelector('.modal-feedback__back');
const blurModal = document.querySelector('.blur_modal');

message.addEventListener('click', openModalChat);
message2.addEventListener('click', openModalChat);
modalChatOff.addEventListener('click', offModalChat);
blurModal.addEventListener('click', offModalChat);
blurModal.addEventListener('click', offModalTell);

function openModalChat() {
  modalChat.style.boxShadow = '16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02)';
  modalChat.style.right = '0px';
  setTimeout(() => { blurModal.style.display = 'block' }, 300);
};

function offModalChat() {
  modalChat.style.right = '-100vw';
  blurModal.style.display = 'none';
};

const tell = document.querySelector('.menu__ic-tell');
const tell2 = document.querySelectorAll('.menu__ic-tell')[1];
const modalTell = document.querySelector('.modal-tell');
const modalTellOff = document.querySelector('.modal-tell__back');

tell.addEventListener('click', openModalTell);
tell2.addEventListener('click', openModalTell);
modalTellOff.addEventListener('click', offModalTell);

function openModalTell() {
  modalTell.style.boxShadow = '16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02)';
  modalTell.style.right = '0px';
  setTimeout(() => { blurModal.style.display = 'block' }, 300);
};

function offModalTell() {
  modalTell.style.right = '-100vw';
  blurModal.style.display = 'none';
};