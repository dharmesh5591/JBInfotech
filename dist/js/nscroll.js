const items = document.querySelectorAll('.pr-cat')

items.forEach((el) => {
  const image = el.querySelector('img')
  
  el.addEventListener('mouseenter', (e) => {
    gsap.to(image, { autoAlpha: 1 })
  })
  
   el.addEventListener('mouseleave', (e) => {
    gsap.to(image, { autoAlpha: 0 })
  })
  
//  el.addEventListener('mousemove', (e) => {
//    gsap.set(image, { x: e.offsetX - 0 })
//  })
})



const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
})

gsap.registerPlugin(ScrollTrigger)


scroller.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(
    '.o-scroll', {
        scrollTop(value) {
            return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
            return {
                left: 0, top: 0, 
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }
)
$(document).ready(function(){
var targetWidth = 1199;

 if ( $(window).width() >= targetWidth) {     
      ScrollTrigger.create({
       trigger: '.top-wrap',
       scroller: '.o-scroll',
       start: 'top+=10% 10%',
       end: 'bottom-=4% 0%',
       pin: true,
    })

    /* for arch reveal*/
    ScrollTrigger.create({
        trigger: '.arch-reveal',
        scroller: '.o-scroll',
       start: 'top+=10% 10%',
       end: 'bottom-=4% 0%',
      /* animation: gsap.from('.bg-poster', {clipPath: 'inset(50% 50% round 25% 25% 0 0)'}),*/
        animation: gsap.to('.arch-reveal', {clipPath: 'inset(-28% -18% round 50em 50em 4em 4em)'}),
        scrub: 0,
         markers: false
    })
     
     
     /*for header sticky*/
    ScrollTrigger.create({
      trigger: ".first-section",
      scroller: '.o-scroll',    
      markers: false,
      start: 'top+=40% 40%',
       end: 'bottom-=10% 10%',
        onLeave: () => $("header").addClass('sticky'),
         onEnterBack: () => $("header").removeClass('sticky'),
    });

     ScrollTrigger.create({
       trigger: '#fixed-ele',
       scroller: '.o-scroll',
       start: 'top+=10% 10%',
       end: 'bottom-=24% 0%',
       pin: true,
    })

 }
 else {
  //Add your javascript for screens smaller than 768 here
 } 
});


ScrollTrigger.create({
      trigger: "#product",
      scroller: '.o-scroll',    
      markers: false,
      start: 'top+=30% 30%',
       end: 'bottom-=10% 10%',
        onLeave: () => $(".main-filter").addClass('hide'),
         onEnterBack: () => $(".main-filter").removeClass('hide'),
    });

ScrollTrigger.create({
      trigger: "#more-product",
      scroller: '.o-scroll',    
      markers: false,
      start: 'top+=100% 100%',
       end: 'bottom-=130% 130%',
        onLeave: () => $(".add-to-cart").addClass('hide'),
         onEnterBack: () => $(".add-to-cart").removeClass('hide'),
    });
/*
ScrollTrigger.create({
      trigger: "#more-product",
      scroller: '.o-scroll',    
      markers: true,
      start: 'top+=100% 100%',
       end: 'bottom-=10% 10%',
        onLeave: () => $(".add-to-cart").addClass('hide'),
         onEnterBack: () => $(".add-to-cart").removeClass('hide'),
    });
*/


//ScrollTrigger.create({
//      trigger: "#product",
//      scroller: '.o-scroll',    
//      markers: true,
//      start: 'top+=60% 60%',
//       end: 'bottom-=10% 10%',
//        onLeave: () => $("header").removeClass('sticky'),
//         onEnterBack: () => $("header").addClass('sticky'),
//    });


ScrollTrigger.create({
    trigger: '.arch-round',
    scroller: '.o-scroll',
   start: 'top+=10% 10%',
   end: 'bottom-=4% 0%',
    animation: gsap.from('.arch-round', {borderRadius: '50% 50% 0% 0%'}),
    animation: gsap.to('.arch-round', {borderRadius: '0% 0% 0% 0%'}),
    scrub: 0,
     markers: false
})


$(window).scroll(function() {
    
     if ( $(window).width() <= 1198) {   
           if($(window).scrollTop() > 100) {
                $("header").addClass('sticky');
           }

            else{
              $("header").removeClass('sticky');
            }
     }
});


/*const design = document.getElementById("design");
const helper = document.getElementById("helper");
const carousel = document.getElementById("carousel");

gsap.to(carousel, {
  x: () => -(carousel.offsetWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: intro,
    start: "bottom top",
    invalidateOnRefresh: true,
    markers: true,
    scrub: 1,
    end: () => "+=" + (carousel.offsetWidth - innerWidth)
  }
})*/


ScrollTrigger.addEventListener('refresh', () => scroller.update())


ScrollTrigger.refresh()