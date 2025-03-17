var t = gsap.timeline();

const loadingText = document.getElementById('loading-text');
const texts = ["अल्फ़ाबोट्स", "বর্ণমালা", "ಆಲ್ಫಾಬಾಟ್‌ಗಳು", "આલ્ફાબોટ્સ", "AlphaBots"]; // preset texts
let textIndex = 0;
let iterationCount = 0;
const maxIterations = 15; // Stop after 20 iterations

function changeText() {
    loadingText.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length; // loop back to the start after the last text
    iterationCount++;

    // Stop after 20 iterations
    if (iterationCount >= maxIterations) {
        clearInterval(interval);
    }
}

// Set interval to change the text every 500ms
const interval = setInterval(changeText, 120);

t.from("#loading-text",{
    opacity:0,
    duration:.3,
    delay:.3
})


t.from("#loader-loading",{
    opacity:0,
    duration:.3,
})



t.to("#loader",{
    scrub:1,
    y:"-100vh",
    delay:2.2,
})



t.to("#loader",{
    display:"none"
})

var t2 = gsap.timeline();

t2.to(".load",{
    height:"2vh",
    duration:.3,
    stagger:.1
})
t2.to(".load",{
    height:"0vh",
    duration:.3,
    stagger:.1
})
t2.to(".load",{
    height:"2vh",
    duration:.3,
    stagger:.1
})
t2.to(".load",{
    height:"0vh",
    duration:.3,
    stagger:.1
})
t2.to(".load",{
    height:"2vh",
    duration:.3,
    stagger:.1
})
t2.to(".load",{
    height:"0vh",
    duration:.3,
    stagger:.1
})


// cursor animation

var body = document.querySelector("body");
body.addEventListener("mousemove",function(cursor){
    gsap.to("#cursor",{
        x:cursor.pageX,
        y:cursor.pageY,
        ease:"power3.out",
    })
})