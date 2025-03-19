// smooth scroll starts

let smoothscroll = function () {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

// smooth scroll ends

// pc animations

let pcanimations = function () {

    // page2 achievements torch effect

    let torch = document.querySelector("#achievements-holder")

    torch.addEventListener("mousemove", function (e) {
        gsap.to("#torch", {
            x: e.x,
            y: e.y
        })
    })

    // page2 moving strip 1

    gsap.to("#moving-strip1 h3", {
        x: "-100%",
        scrollTrigger: {
            trigger: "#moving-strip1",
            scroller: "main",
            start: "top 80%",
            end: "top -500%",
            scrub: 1,
            stagger:.5,
            // pin: "#page3",
        }
    })

    // page4

    document.querySelector("#page4").addEventListener("mouseenter", function () {
        document.querySelector("#page4-dashboard video").play();
    })
    document.querySelector("#page4").addEventListener("mouseleave", function () {
        document.querySelector("#page4-dashboard video").pause();
    })

    gsap.from("#page4-dashboard", {
        x: "100%",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "main",
            start: "top 80%",
            end: "top 10%",
            scrub: 2,
        }
    })
    gsap.from("#page4-content", {
        x: "-100%",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "main",
            start: "top 80%",
            end: "top 10%",
            scrub: 2,
        }
    })

    // page5 features

    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#steps-holder",
            scroller: "main",
            start: "top 66%",
            end: "top -84%",
            scrub: 2,
            pin: "#page5",
        }
    })

    tl1.from("#page5 video", {
        opacity: 0
    })
    tl1.to(".step1-bar-fill", {
        width: "100%",
    })
    tl1.from("#page5-banner2", {
        x: -50,
        opacity: 0,
    })
    tl1.to("#page5-filter", {
        x: 360,
    })
    tl1.to("#step2", {
        opacity: "1",
    })
    tl1.to(".step2-bar-fill", {
        width: "100%",
    })
    tl1.from("#page5-banner3", {
        x: -50,
        opacity: 0,
    })
    tl1.to("#page5-filter", {
        x: 720,
    })
    tl1.to("#step3", {
        opacity: "1",
    })
    tl1.to(".step3-bar-fill", {
        width: "100%",
    })

    // page6

    // let tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#products-holder",
    //         scroller: "main",
    //         start: "top 30%",
    //         end: "top -120%",
    //         scrub: 2,
    //         pin: "#page6",
    //     }
    // })

    // tl2.from("#product-strip1", {
    //     x: "40%",
    // })
    // tl2.to(".product-filter1", {
    //     opacity: .3,
    // })
    // tl2.from("#product-torch1", {
    //     opacity: 0,
    // })
    // tl2.to("#product-strip1", {
    //     x: "-25%",
    // })
    // tl2.to("#product-torch1", {
    //     opacity: 0,
    // })
    // tl2.to(".product-filter2", {
    //     opacity: .3,
    // })
    // tl2.from("#product-torch2", {
    //     opacity: 0,
    // })
    // tl2.to("#product-strip1", {
    //     x: "-50%",
    // })
    // tl2.to("#product-torch2", {
    //     opacity: 0,
    // })
    // tl2.to(".product-filter3", {
    //     opacity: .3,
    // })
    // tl2.from("#product-torch3", {
    //     opacity: 0,
    // })

    // product torch effect

    let page61 = document.querySelector("#product1")
    page61.addEventListener("mousemove", function (elem) {
        gsap.to("#product-torch1", {
            x: elem.x,
            y: elem.y,
        })
    })
    let page62 = document.querySelector("#product2")
    page62.addEventListener("mousemove", function (elem2) {
        gsap.to("#product-torch2", {
            x: elem2.x,
            y: elem2.y,
        })
    })
    let page63 = document.querySelector("#product3")
    page63.addEventListener("mousemove", function (elem3) {
        gsap.to("#product-torch3", {
            x: elem3.x,
            y: elem3.y,
        })
    })

    // page8

    // moving strip 2

    gsap.to("#moving-strip2 h3", {
        x: "-100%",
        scrollTrigger: {
            trigger: "#moving-strip2",
            scroller: "main",
            start: "top 60%",
            end: "top -400%",
            scrub: 1,
        }
    })

    gsap.from("#page8 h2", {
        y: 40,
        opacity: 0,
        scrollTrigger: {
            trigger: "#journey-holder",
            scroller: "main",
            start: "top 60%",
            end: "top 10%",
        }
    })

    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#journey-content",
            scroller: "main",
            start: "top 30%",
            end: "top -70%",
            scrub: 2,
            pin: "#page8",
        }
    })

    tl3.from("#journey-bg", {
        opacity: 0,
    })
    tl3.to("#journey-bulb1", {
        marginBottom: "15vh",
    })
    tl3.to("#journey-1", {
        opacity: 1,
    })
    tl3.to("#journey-bulb2", {
        marginBottom: "20vh",
    })
    tl3.to("#journey-2", {
        opacity: 1,
    })
    tl3.to("#journey-bulb3", {
        marginBottom: "30vh",
    })
    tl3.to("#journey-3", {
        opacity: 1,
    })
    tl3.to("#journey-bulb4", {
        marginBottom: "45vh",
    })
    tl3.to("#journey-4", {
        opacity: 1,
    })
    tl3.to("#journey-content h5", {
        opacity: 1,
    })

    // page9

    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page9-button-holder",
            scroller: "main",
            start: "top 75%",
            end: "top 25%",
            scrub: 2,
            pin: "#page9",
        }
    })

    tl4.from("#page9-bg", {
        opacity: 0,
    })
    tl4.from("#page9-logo-holder", {

        scale: 0,
    })
    tl4.from("#page9 h2", {
        opacity: 0,
        y: 20,
    })
    tl4.from("#page9 h4", {
        opacity: 0,
        y: 20,
    })
    tl4.from("#page9-button-holder",{
        stagger:0.5,
        opacity:0,
        y:20
    })

    // page10

    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#faq-list",
            scroller: "main",
            start: "top 60%",
            end: "top 10%"
        }
    })

    tl5.from("#page10 h2", {
        x: 50,
        opacity: 0,
        duration: .1,
    })
    tl5.from(".faq", {
        x: 50,
        opacity: 0,
        duration: .3,
        stagger: .1
    })

    // page 12

    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page12",
            scroller: "main",
            start: "top 40%",
            end: "top 10%"
        }
    })

    tl6.from("#page12 h2", {
        y: 40,
        opacity: 0,
        duration: .3,
    })
    tl6.from("#team", {
        y: 40,
        opacity: 0,
        duration: .7,
    })

    // footer

    let tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: "#footer-main",
            scroller: "main",
            start: "top -60%",
            end: "top -100%",
        }
    })

    tl7.from("#footer-left", {
        y: 40,
        opacity: 0,
        duration: .3,
    })
    tl7.from("#footer-middle h4", {
        y: 40,
        opacity: 0,
        duration: .3,
        stagger: .1
    })
    tl7.from("#footer-right-links h4", {
        y: 40,
        opacity: 0,
        duration: .3,
        stagger: .1
    })
    // main body moves up

    gsap.to("#main-body", {
        y: "-100vh",
        scrollTrigger: {
            trigger: "header",
            scroller: "main",
            start: "top 0%",
            end: "top -100%",
            pin: "header",
            scrub: 2
        }
    })

    document.addEventListener("DOMContentLoaded", function () {
        const videos = document.querySelectorAll(".lazy-video");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    const source = document.createElement("source");

                    source.src = video.getAttribute("data-src");
                    source.type = "video/mp4/webm";
                    video.appendChild(source);

                    video.load(); // Trigger video loading
                    observer.unobserve(video); // Stop observing once loaded
                }
            });
        });

        videos.forEach(video => observer.observe(video));
    });

}

// mobile animations

let mobanimations = function () {

    // moving strips

    // gsap.to("#moving-strip1 h3", {
    //     x: "-100%",
    //     repeat: -1,
    //     yoyo: true,
    // })
    // gsap.to("#moving-strip2 h3", {
    //     x: "-100%",
    //     repeat: -1,
    //     yoyo: true,
    // })

    // navbar for mobile

    let hamMenuOpen = document.querySelector("#mob-nav i")
    hamMenuOpen.addEventListener("click",function(){
        gsap.to("#hamburger-menu",{
            x:"-100%",
            duration:.2,
            ease:"power2.out",
        })
    })
    let hamMenuClose = document.querySelector("#hamburger-menu i")
    hamMenuClose.addEventListener("click",function(){
        gsap.to("#hamburger-menu",{
            x:"100%",
            duration:.2,
            ease:"power2.out",
        })
    })

    // functions call for mobile

    // animations for mobile

    // page5 features for mobile

    document.querySelector("#page4-dashboard video").play();

    let mtl1 = gsap.timeline({
        repeat: -1,
    });

    mtl1.to(".step1-bar-fill", {
        width: "100%",
        duration: 1,
    })
    mtl1.to("#page5-filter", {
        x: 150,
        duration: .5,
    })
    mtl1.from("#page5-banner2", {
        x: -50,
        opacity: 0,
        duration: .5,
    })
    mtl1.to("#step2", {
        opacity: "1",
        duration: 1,
    })
    mtl1.to(".step2-bar-fill", {
        width: "100%",
        duration: 1,
    })
    mtl1.to("#page5-filter", {
        x: 300,
        duration: .5,
    })
    mtl1.from("#page5-banner3", {
        x: -50,
        opacity: 0,
        duration: .5,
    })
    mtl1.to("#step3", {
        opacity: "1",
        duration: 1,
    })
    mtl1.to(".step3-bar-fill", {
        width: "100%",
        duration: 1,
    })
    // return to original for loop
    mtl1.to("#step3", {
        opacity: "0",
        duration: .25,
    })
    mtl1.to("#page5-banner3", {
        opacity: "0",
        duration: .25,
    })
    mtl1.to("#page5-filter", {
        x: 150,
        duration: .25,
    })
    mtl1.to("#step2", {
        opacity: "0",
        duration: .25,
    })
    mtl1.to("#page5-banner2", {
        opacity: "0",
        duration: .25,
    })
    mtl1.to("#page5-filter", {
        x: 0,
        duration: .25,
    })
    mtl1.to(".step1-bar-fill", {
        width: "0%",
        duration: .5,
    })

}

// ------------------------------------->> common area starts

// common functions

// page2 mouse hover number-grow effect
let hoverGrow = function () {
    var grow = document.querySelector("#page2");

    var counters = [
        { element: document.querySelector("#achievement-box1 h5"), target: 26, speed: 200 },
        { element: document.querySelector("#achievement-box2 h5"), target: 101, speed: 50 },
        { element: document.querySelector("#achievement-box3 h5"), target: 1001, speed: 5 },
        { element: document.querySelector("#achievement-box4 h5"), target: 101, speed: 50 }
    ];

    function animateCounter(counter, start, end, speed) {
        if (start < end) {
            counter.element.innerHTML = start;
            setTimeout(() => animateCounter(counter, start + 1, end, speed), speed);
        }
    }

    grow.addEventListener("mouseenter", function () {
        counters.forEach(counter => {
            counter.element.innerHTML = "0"; // Reset to 0 before animation
            animateCounter(counter, 0, counter.target, counter.speed);
        });
    });

    grow.addEventListener("mouseleave", function () {
        counters.forEach(counter => {
            counter.element.innerHTML = counter.target; // Instantly set to max value
        });
    });
};

hoverGrow();


// feature videos hover pause effect
var featureVid = function () {

    var F1 = document.querySelector("#feature1")
    var F1vid = document.querySelector("#feature1 video")
    var F2 = document.querySelector("#feature2")
    var F2vid = document.querySelector("#feature2 video")
    var F3 = document.querySelector("#feature3")
    var F3vid = document.querySelector("#feature3 video")
    var F4 = document.querySelector("#feature4")
    var F4vid = document.querySelector("#feature4 video")
    var F5 = document.querySelector("#feature5")
    var F5vid = document.querySelector("#feature5 video")
    var F6 = document.querySelector("#feature6")
    var F6vid = document.querySelector("#feature6 video")

    F1.addEventListener("mouseenter", function () {
        F1vid.pause();
    })
    F1.addEventListener("mouseleave", function () {
        F1vid.play();
    })
    F2.addEventListener("mouseenter", function () {
        F2vid.pause();
    })
    F2.addEventListener("mouseleave", function () {
        F2vid.play();
    })
    F3.addEventListener("mouseenter", function () {
        F3vid.pause();
    })
    F3.addEventListener("mouseleave", function () {
        F3vid.play();
    })
    F4.addEventListener("mouseenter", function () {
        F4vid.pause();
    })
    F4.addEventListener("mouseleave", function () {
        F4vid.play();
    })
    F5.addEventListener("mouseenter", function () {
        F5vid.pause();
    })
    F5.addEventListener("mouseleave", function () {
        F5vid.play();
    })
    F6.addEventListener("mouseenter", function () {
        F6vid.pause();
    })
    F6.addEventListener("mouseleave", function () {
        F6vid.play();
    })
}

// accordians open close effect
var accordians = function () {

    var i = document.querySelectorAll("#q1 i");
    var i2 = document.querySelectorAll("#q2 i");
    var i3 = document.querySelectorAll("#q3 i");
    var i4 = document.querySelectorAll("#q4 i");
    var i5 = document.querySelectorAll("#q5 i");
    var i6 = document.querySelectorAll("#q6 i");
    var i7 = document.querySelectorAll("#q7 i");
    var i8 = document.querySelectorAll("#q8 i");
    var i9 = document.querySelectorAll("#q9 i");

    i.forEach(function (item) {
        item.addEventListener("click", function () {
            if (item.classList.contains("ri-add-line")) {
                item.classList.remove("ri-add-line");
                item.classList.add("ri-subtract-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a1 h4", {
                    fontSize: "1.4vmax",
                    duration: .3,
                })
            } else {
                item.classList.remove("ri-subtract-line");
                item.classList.add("ri-add-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a1 h4", {
                    fontSize: "0vw",
                    duration: .3,
                })
            }
        });
    })
    i2.forEach(function (item2) {
        item2.addEventListener("click", function () {
            if (item2.classList.contains("ri-add-line")) {
                item2.classList.remove("ri-add-line");
                item2.classList.add("ri-subtract-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a2 h4", {
                    fontSize: "1.4vmax",
                    duration: .3,
                })
            } else {
                item2.classList.remove("ri-subtract-line");
                item2.classList.add("ri-add-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a2 h4", {
                    fontSize: "0vw",
                    duration: .3,
                })
            }
        });
    })
    i3.forEach(function (item3) {
        item3.addEventListener("click", function () {
            if (item3.classList.contains("ri-add-line")) {
                item3.classList.remove("ri-add-line");
                item3.classList.add("ri-subtract-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a3 h4", {
                    fontSize: "1.4vmax",
                    duration: .3,
                })
            } else {
                item3.classList.remove("ri-subtract-line");
                item3.classList.add("ri-add-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a3 h4", {
                    fontSize: "0vw",
                    duration: .3,
                })
            }
        });
    })
    i4.forEach(function (item4) {
        item4.addEventListener("click", function () {
            if (item4.classList.contains("ri-add-line")) {
                item4.classList.remove("ri-add-line");
                item4.classList.add("ri-subtract-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a4 h4", {
                    fontSize: "1.4vmax",
                    duration: .3,
                })
            } else {
                item4.classList.remove("ri-subtract-line");
                item4.classList.add("ri-add-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a4 h4", {
                    fontSize: "0vw",
                    duration: .3,
                })
            }
        });
    })
    i5.forEach(function (item5) {
        item5.addEventListener("click", function () {
            if (item5.classList.contains("ri-add-line")) {
                item5.classList.remove("ri-add-line");
                item5.classList.add("ri-subtract-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a5 h4", {
                    fontSize: "1.4vmax",
                    duration: .3,
                })
            } else {
                item5.classList.remove("ri-subtract-line");
                item5.classList.add("ri-add-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a5 h4", {
                    fontSize: "0vw",
                    duration: .3,
                })
            }
        });
    })
    i6.forEach(function (item6) {
        item6.addEventListener("click", function () {
            if (item6.classList.contains("ri-add-line")) {
                item6.classList.remove("ri-add-line");
                item6.classList.add("ri-subtract-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a6 h4", {
                    fontSize: "1.4vmax",
                    duration: .3,
                })
            } else {
                item6.classList.remove("ri-subtract-line");
                item6.classList.add("ri-add-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a6 h4", {
                    fontSize: "0vw",
                    duration: .3,
                })
            }
        });
    })
    i7.forEach(function (item7) {
        item7.addEventListener("click", function () {
            if (item7.classList.contains("ri-add-line")) {
                item7.classList.remove("ri-add-line");
                item7.classList.add("ri-subtract-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a7 h4", {
                    fontSize: "1.4vmax",
                    duration: .3,
                })
            } else {
                item7.classList.remove("ri-subtract-line");
                item7.classList.add("ri-add-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a7 h4", {
                    fontSize: "0vw",
                    duration: .3,
                })
            }
        });
    })
    i8.forEach(function (item8) {
        item8.addEventListener("click", function () {
            if (item8.classList.contains("ri-add-line")) {
                item8.classList.remove("ri-add-line");
                item8.classList.add("ri-subtract-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a8 h4", {
                    fontSize: "1.4vmax",
                    duration: .3,
                })
            } else {
                item8.classList.remove("ri-subtract-line");
                item8.classList.add("ri-add-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a8 h4", {
                    fontSize: "0vw",
                    duration: .3,
                })
            }
        });
    })
    i9.forEach(function (item9) {
        item9.addEventListener("click", function () {
            if (item9.classList.contains("ri-add-line")) {
                item9.classList.remove("ri-add-line");
                item9.classList.add("ri-subtract-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a9 h4", {
                    fontSize: "1.4vmax",
                    duration: .3,
                })
            } else {
                item9.classList.remove("ri-subtract-line");
                item9.classList.add("ri-add-line");
                gsap.to(".faq", {
                    gap: "1vw",
                })
                gsap.to("#a9 h4", {
                    fontSize: "0vw",
                    duration: .3,
                })
            }
        });
    })
}

// start page nav animation

var firstTL = gsap.timeline();

firstTL.from("#menu-items",{
    y:-50,
    opacity:0,
    duration:.3,
    delay:3.5
})
firstTL.from("#menu-items h5",{
    x:225,
    duration:.3,
})
firstTL.from("#menu-items",{
    width:0
})
firstTL.from("#menu-items h4",{
    y:-50,
    stagger:.2,
    scrub:2,
})

gsap.from("#sign-up",{
    y:-50,
    duration:.3,
    delay:3.8,
    opacity:0,
})
gsap.from("#logo",{
    y:-50,
    duration:.3,
    delay:3.8,
    opacity:0,
})

// stock strips 

gsap.to(".stock-strip1", {
    x: "-100%",
    duration: 25,
    ease: "none",
    repeat: -1
})
gsap.from(".stock-strip2", {
    x: "-100%",
    duration: 25,
    ease: "none",
    repeat: -1
})

// moving strip mobile

gsap.to(".mob-moving-strip1 h2",{
    x:"-100%",
    duration:20,
    repeat:-1,
    ease:"none"
})
gsap.from(".mob-moving-strip2 h2",{
    x:"-100%",
    duration:20,
    repeat:-1,
    ease:"none"
})

// steps mobile

var mobTL = gsap.timeline({
    repeat:-1,
    ease:"none",
}) 

mobTL.from("#mob-banner1",{
    x:"-100%",
    duration:.3,
    opacity:0,
})
mobTL.from("#mob-step1",{
    opacity:0.2,
    duration:.2,
})
mobTL.to("#mob-banner1",{
    x:"100%",
    delay:1.5,
    duration:.3,
    opacity:0,
})
mobTL.from("#mob-banner2",{
    x:"-100%",
    duration:.3,
    opacity:0,
})
mobTL.from("#mob-step2",{
    opacity:0.2,
    duration:.2,
})
mobTL.to("#mob-banner2",{
    x:"100%",
    delay:1.5,
    duration:.3,
    opacity:0,
})
mobTL.from("#mob-banner3",{
    x:"-100%",
    duration:.3,
    opacity:0,
})
mobTL.from("#mob-step3",{
    opacity:0.2,
    duration:.2,
})
mobTL.to("#mob-banner3",{
    x:"100%",
    delay:1.5,
    duration:.3,
    opacity:0,
})
mobTL.to("#mob-step3",{
    opacity:0.2,
    duration:.2,
})
mobTL.to("#mob-step2",{
    opacity:0.2,
    duration:.2,
})
mobTL.to("#mob-step1",{
    opacity:0.2,
    duration:.2,
})

// scroll mobile

gsap.from("#mob-scroll-up p",{
    y:-10,
    repeat:-1,
    yoyo:true,
    duration:.8,
    ease:"power2.out"
})
gsap.from("#mob-scroll-up i",{
    y:-10,
    repeat:-1,
    yoyo:true,
    duration:.8,
    ease:"power1.out"
})

gsap.from("#mob-page6-scroll-holder h6",{
    x:-5,
    repeat:-1,
    yoyo:true,
    duration:.8,
    ease:"power2.out"
})
gsap.from("#mob-page6-scroll-holder i",{
    x:-5,
    repeat:-1,
    yoyo:true,
    duration:.8,
    ease:"power1.out"
})

// review strips

gsap.to(".review-strip1", {
    x: () => `-${100 + 6}vw`,
    duration: 15,
    yoyo:true,
    repeat: -1
})
gsap.from(".review-strip2", {
    x: () => `-${100 + 6}vw`,
    duration: 15,
    yoyo:true,
    repeat: -1
})

// ------------------------------------->> common area end
gsap.registerPlugin(ScrollTrigger);

const productStrip = document.querySelector(".product-strip");
const products = document.querySelectorAll(".product");

let currentIndex = 0;

// Function to move carousel
function moveCarousel(index) {
    gsap.to(productStrip, {
        x: -index * 100 + '%',  // Moves each product to the left
        duration: 1,
        ease: "power2.inOut"
    });
}

// Next Button
document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < products.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Loop back to the first product
    }
    moveCarousel(currentIndex);
});

// Previous Button
document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = products.length - 1;  // Loop back to the last product
    }
    moveCarousel(currentIndex);
});

// Auto-scroll every 5 seconds
 // Auto-scroll interval (5 seconds)


// for pc

if (window.innerWidth < 750) {
    smoothscroll();
    mobanimations();
}
else {
    smoothscroll();
    pcanimations();
}

hoverGrow();
featureVid();
accordians();