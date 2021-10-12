
const open = document.querySelector(".cta");
open.addEventListener('click' , expand);

function expand() {
    document.querySelector(".hamburger-menu").style.display = "block";
}

const close = document.querySelector(".close");
close.addEventListener('click' , closetab);

function closetab() {
    document.querySelector(".hamburger-menu").style.display = "none";
}
