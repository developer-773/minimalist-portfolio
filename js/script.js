
const navbar = document.querySelector(".header__hamburger");
var nav = document.getElementById("nav");
var head = document.querySelector(".header");
var list = document.querySelector(".sitenav");
var lnks = nav.getElementsByClassName("sitenav__link")[0];
navbar.addEventListener("click" , function(){
  head.classList.toggle("sitenav-on");
  document.body.classList.toggle("overflow")
});


