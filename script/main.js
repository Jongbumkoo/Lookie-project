'use strict'
import '../scss/main.scss'
import VanillaTilt from 'vanilla-tilt';
import throttle from 'lodash.throttle';
import gsap from 'gsap';


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
});


// scroll to -연습 // 

const handler = document.querySelector('#cotact-button')

handler.addEventListener('click',()=>{
    const scrollTo = document.querySelector('.sign-up')
    scrollTo.scrollIntoView({behavior:'smooth'})
})


const handler2 = document.querySelector('.sign-up')
handler2.addEventListener('click',()=>{
    const scrollTo2 = document.querySelector('#cotact-button');
    scrollTo2.scrollIntoView({behavior:'smooth'})
});


//fade-in //

const fadeOutImage = document.querySelector('#fade-out');
const imageHeight = fadeOutImage.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    fadeOutImage.style.opacity= 1 - window.scrollY / imageHeight;  // 0  = 1 - 77 / 77    1 = 1 -77 / 77 
})





// const fadeOutImage = document.querySelector('#fade-out');
// window.addEventListener('scroll', function(){
//     console.log(window.scrolly)
//     if(window.scrollY > 500){
//         gsap.to(fadeOutImage, .6,{
//             opacity:0,
//             display:none
//         })
//     }else{

//     }
// });


