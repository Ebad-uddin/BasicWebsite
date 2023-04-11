

//navbar
const burger = document.querySelector('.burger-icon')
const header = document.querySelector("header")
const navlist = document.querySelector('.nav-list')
var nav = 0;

burger.addEventListener('click', ()=>{
    if(nav == 0){
        navlist.style.display = "block"
        nav = nav + 1
    }
    else{
        navlist.style.display = "none"
        nav = nav - 1
    }

    header.addEventListener('click', function(){
        navlist.style.display = "none"
    })
})

