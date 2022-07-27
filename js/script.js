const menuIcon = document.getElementById("menu-icon")
const closeIcon = document.getElementById("close")
const links = document.getElementById("links")
menuIcon.addEventListener("click",()=>{
    links.classList.toggle("open")
})
closeIcon.addEventListener("click",()=>{
    links.classList.toggle("open")
})