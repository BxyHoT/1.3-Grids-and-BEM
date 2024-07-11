const btn = document.querySelector('.services__read-more');
const items = Array.from(document.querySelectorAll('.services__item'));
let itemsHiden = false;

function responseOnWindowWidth() {
  if (window.innerWidth > 1119) {
    items.forEach((item, index) => {
      if (index > 7) {
        item.style.display = 'none';
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

function readMore() {
  if (itemsHiden) {
    items.forEach((item) => {
      item.style.display = 'flex';
    });
    itemsHiden = false;
    btn.innerHTML = 'Скрыть';
    btn.style.background = '#f8f8f8 url("img/logo/expand180.svg") no-repeat 0 50%';
    btn.style.margin = '46px 0 0 0';
  }
  else {
    responseOnWindowWidth();
    btn.innerHTML = 'Показать всё';
    btn.style.background = '#f8f8f8 url("img/logo/expand.svg") no-repeat 0 50%';
    btn.style.margin = '24px 0 0 0';
  }
};

function onResize() {
  items.forEach((item) => {
    item.style.display = 'flex';
  });
  responseOnWindowWidth();
}

window.addEventListener('resize', onResize);