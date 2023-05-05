const btnTrigger =document.querySelector(".burgertrigger");
const btn = document.querySelector(".burgermenu");
const list = document.querySelector("ul");
const signin = document.querySelector("button.signin");btnTrigger.addEventListener("click",()=> {
    btn.classList.toggle('active');
    list.classList.toggle('active');
    signin.classList.toggle('active');
})
