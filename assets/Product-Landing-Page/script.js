// navlist Toogle
const hamburder = document.querySelector("#hamburger");
const navlist = document.querySelector("#navlist");

hamburder.addEventListener("click",()=>{
    navlist.classList.toggle("navlist-active")
})