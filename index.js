const toggle = document.getElementById("toggle")
const nav = document.getElementById('nav')
const ul = document.querySelector("nav.active ul")
toggle.addEventListener('click',()=>{
    nav.classList.toggle('active');
})