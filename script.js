function loader(){
  var a = 0
  setInterval(function(){
    if(a<100){
      document.querySelector("#loader h1").innerHTML = a + "%"
      a++;
    } else{
      a = 100
      document.querySelector("#loader h1").innerHTML = a + "%"
    }
  },25)
}

function loco(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

loco();

function swiper(){
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  spaceBetween: 32,
  slidesPerview: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}


swiper();


var tl = gsap.timeline()

tl
.to("#loader h1 ",{
  duration: 1,
  delay: 1,
  onStart: loader(),
  pin: true
})
.to("#loader",{
  duration: 1,
  delay: 1.5,
  top: "-100vh",
})
.from("#nav img , #nav-part2 a , .nav-icons",{
  opacity: 0,
  y: -50,
  scrub: 2,
  stagger: .1,
  pin: true
})

.from("#page-part1",{
  opacity: 0,
  y: 100
})

.from(".page2-up h2",{
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: .3,
  scrollTrigger: {
    trigger: ".page2-up h2",
    scroller: "#main",
    start: "top 98%",
    stagger: .2
  }
})
.from(".page2-container",{
  opacity: 0,
  x:20,
  scrollTrigger: {
    trigger: ".page2-container",
    scroller: "#main",
    start: "top 88%"
  }
})

.from("#page3 h1",{
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: .3,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "#main",
    start: "top 98%",
    stagger: .2
  }
})


.from(".new-item",{
  opacity: 0,
  x:20,
  stagger: .3,
  scrub: true,
  scrollTrigger: {
    trigger: ".new-item",
    scroller: "#main",
    start: "top 70%",
  }
})

.from("#page5 h1",{
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: .3,
  scrollTrigger: {
    trigger: "#page5 h1",
    scroller: "#main",
    start: "top 85%",
    stagger: .2,
  }
})
.from(".images",{
  opacity: 0,
  x:20,
  stagger: .3,
  scrub: true,
  scrollTrigger: {
    trigger: ".images",
    scroller: "#main",
    start: "top 70%",
  }
})


.from(".store-visit h3",{
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: .3,
  scrollTrigger: {
    trigger: ".store-visit h3",
    scroller: "#main",
    start: "top 85%",
    stagger: .2,
  }
})

.from(".swiper-wrapper",{
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: .3,
  scrollTrigger: {
    trigger: ".swiper-wrapper",
    scroller: "#main",
    start: "top 75%",
    stagger: .2,
  }
})

.from("#footer-part1",{
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: .3,
  scrollTrigger: {
    trigger: "#footer-part1",
    scroller: "#main",
    start: "top 75%",
    stagger: .2,
  }
})
.from("#footer-part2",{
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: .3,
  scrollTrigger: {
    trigger: "#footer-part2",
    scroller: "#main",
    start: "top 74%",
    stagger: .2,
  }
})
.from("#footer-part3",{
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: .3,
  scrollTrigger: {
    trigger: "#footer-part3",
    scroller: "#main",
    start: "top 95%",
    stagger: .2,
  }
})