let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#telepherique",
        // start: "top center",
        // end: "bottom 100px",
        // scrub: 3,
        markers: true,
        
        toggleActions: "restart pause reverse pause"
    },
});

tl.to("#telepherique", {
    ease: "back.out(1.2)",
    x: 300,
    y: - 400,
    duration: 5
});
