
const menuBTN = document.getElementById('menu');
const menuDropDown = document.querySelector(".adaptive-nav");
const body = document.querySelector("body");

menuBTN.addEventListener('click', () =>{
    menu.classList.toggle('open');
    menuDropDown.style.left = (menuDropDown.style.left == '0px') ? '-999px' : '0px';
    body.style.overflowY = (body.style.overflowY == 'hidden') ? 'auto' : 'hidden';
});