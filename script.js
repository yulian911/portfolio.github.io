$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer",  "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing3", {
        strings: ["HTML", "&nbsp;&nbsp;CSS", "&nbsp;&nbsp;&nbsp;JS", "SASS",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// //animacja ruchu
// const card = document.querySelector('.card');
// const card1 = document.querySelector('.item1');
// const card2 = document.querySelector('.item2');
// const card3 = document.querySelector('.item3');





// //ruch animacji
// card1.addEventListener('mousemove',(e)=>{
//     console.log(e.pageX,e.pageY);
//     let xAxis=(window.innerWidth/2-e.pageX)/10;
//     let yAxis=(window.innerHeight/2-e.pageY)/10;
//     card1.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    
// });
// //animacja out
// card1.addEventListener('mouseleave',e=>{
// card1.style.transition ='all 0.5s ease';
//     card1.style.transform=`rotateY(0deg) rotateX(0deg)`;
//     title.style.transform='translateZ(0px)';
// })

// // item2
// //animacja in
// card2.addEventListener('mauseenter',e=>{
//     card1.style.transition='none';
//     title.style.transform='translateZ(150px)';
// })

// //ruch animacji
// card2.addEventListener('mousemove',(e)=>{
//     console.log(e.pageX,e.pageY);
//     let xAxis=(window.innerWidth/2-e.pageX)/10;
//     let yAxis=(window.innerHeight/2-e.pageY)/10;
//     card2.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    
// });
// //animacja out
// card2.addEventListener('mouseleave',e=>{
// card2.style.transition ='all 0.5s ease';
//     card2.style.transform=`rotateY(0deg) rotateX(0deg)`;
//     title.style.transform='translateZ(0px)';
// })


// //animacja in
// card1.addEventListener('mauseenter',e=>{
//     card1.style.transition='none';
//     title.style.transform='translateZ(150px)';
// })