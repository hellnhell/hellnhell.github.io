let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .fromTo(".gallery-1", { opacity: 0 }, { opacity: 1, duration: 1 })
    .fromTo(".gallery-2", { opacity: 0 }, { opacity: 1, duration: 1 })
    .fromTo(".gallery-3", { opacity: 0 }, { opacity: 1, duration: 1 })
    .fromTo(".gallery-4", { opacity: 0 }, { opacity: 1, duration: 1 })

    // .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: ".photo-content",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  // .setPin(".photo")
  .addTo(controller);