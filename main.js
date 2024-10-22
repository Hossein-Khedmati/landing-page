const menuButton=document.querySelector(".ham-logo")
const hamberguer=document.querySelector(".menu-buttons")
const hamIcon=document.querySelector(".ham-icon")
const crossIcon=document.querySelector(".cross-icon")
function showMenu() {
   if (hamberguer.classList.contains("show-position")) {
    hamberguer.classList.remove("show-position")
    crossIcon.classList.remove("show-icon")
    hamIcon.classList.remove("none-icon")
   } else {
    hamberguer.classList.add("show-position")
    crossIcon.classList.add("show-icon")
    hamIcon.classList.add("none-icon")
   }
}
menuButton.addEventListener("click" , showMenu)

///////////// swiper codes
var swiper = new Swiper(".mySwiper", {
   effect: "cards",
   grabCursor: true,
 });