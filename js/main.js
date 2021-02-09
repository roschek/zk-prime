"use strict";

var toggleMenu = document.querySelector('.toggle__menu');
var menuList = document.querySelector('.menu');
document.addEventListener("DOMContentLoaded", function (event) {
  window.onresize = function () {
    resize_info();
  };
});

function resize_info() {
  if (window.innerWidth < 992) {
    toggleMenu.classList.remove('toggle__menu_open');
    menuList.classList.remove('menu_show');
  } else {
    toggleMenu.classList.add('toggle__menu_open');
  }
}

toggleMenu.addEventListener('click', function (event) {
  toggleMenu.classList.toggle('toggle__menu_open');
  menuList.classList.toggle('menu_show');
  event.preventDefault();
});