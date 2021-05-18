import VanillaTilt from 'vanilla-tilt';


const cliked = document.querySelector('.items')
const CreatPadding = document.querySelector(".mian-image")
cliked.addEventListener("mouseenter",function(){
    CreatPadding.classList.add("padding")
})
cliked.addEventListener("mouseleave",function(){
    CreatPadding.classList.remove("padding")
})


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