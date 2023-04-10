const start=()=>{

    const menu = document.querySelector(".menu")
    const menu__links=document.querySelector(".menuLinks")

    //SELECTING menu items
    const links__menu = document.querySelectorAll(".menuItem")

    links__menu.forEach(link=> link.addEventListener("click", e=>{
        menu__links.classList.toggle("hamburgerActive")
    }))
    menu.addEventListener("click", e=>{
        menu__links.classList.toggle("hamburgerActive")
    })
}

window.onload=()=>start();