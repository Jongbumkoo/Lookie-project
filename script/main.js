'use strict'
import '../scss/main.scss'
import VanillaTilt from 'vanilla-tilt';
import throttle from 'lodash.throttle';


// sub-menu UX// 
VanillaTilt.init(document.querySelector(".inner_box_1" ), {
    max: 18,
    speed: 200,
    
});


VanillaTilt.init(document.querySelector(".inner_box_2" ), {
    max: 18,
    speed: 200,
    
});

VanillaTilt.init(document.querySelector(".inner_box_3" ), {
    max: 18,
    speed: 200,
    
});


// scroll event control nav-bar //

const navBar = document.querySelector('#nav-bar')
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener("scroll", throttle(function (){

    if(window.scrollY >navBarHeight){
        navBar.classList.add("newNavbar-position")
    }else{
        navBar.classList.remove("newNavbar-position")
    }
},50));


// make margin-top for main-image 
const cliked = document.querySelector('.items')
const CreatPadding = document.querySelector(".mian-image")
cliked.addEventListener("mouseenter",function(){
    CreatPadding.classList.add("padding")
})
cliked.addEventListener("mouseleave",function(){
    CreatPadding.classList.remove("padding")
})


