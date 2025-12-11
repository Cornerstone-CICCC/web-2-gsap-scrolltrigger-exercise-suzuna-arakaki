gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

const lineOneTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: true,
  }
})

lineOneTimeline.from(".line-one span:first-child", { y: "-100vh", opacity: 0, duration: 1 })
  .from(".line-one span:nth-child(2)", { y: "-100vh", opacity: 0, duration: 1 })
  .from(".line-one span:nth-child(3)", { y: "-100vh", opacity: 0, duration: 1 })
  .from(".line-one span:nth-child(4)", { y: "-100vh", opacity: 0, duration: 1 })
  .from(".line-one span:nth-child(5)", { y: "-100vh", opacity: 0, duration: 1 })
  .from(".line-one span:nth-child(6)", { y: "-100vh", opacity: 0, duration: 1 })
  .to(".line-one", { backgroundColor: "yellow", duration: 1 })
  .from(".sun", { x: "100vw", duration: 1 })
  .to(".line-one", { backgroundColor: "white", duration: 1 })
  .to(".line-one span", { x: "100vw", duration: 1 }, "<")
  .to(".sun", { x: "-100vw", duration: 1 }, "<")



const lineTwoTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "top top",
    end: "bottom center",
    pin: true,
    scrub: true,
  }
})

lineTwoTimeline.from(".line-two span", {
  scale: 50,
  opacity: 0,
  duration: 1,
})



const lineThreeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: true,
  }
})

lineThreeTimeline.from(".line-three span:first-child", { y: "-100vh", opacity: 0, duration: 1 })
  .from(".line-three span:nth-child(2)", { y: "-100vh", opacity: 0, duration: 1 })
  .from(".line-three span:nth-child(3)", { y: "-100vh", opacity: 0, duration: 1 })
  .from(".line-three span:nth-child(4)", { y: "-100vh", opacity: 0, duration: 1 })
  .to(".line-three", { backgroundPositionX: "0%", color: "white", duration: 1 })
  .from(".moon", { x: "100vw", duration: 1 })