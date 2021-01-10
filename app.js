document.addEventListener('DOMContentLoaded', () => {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "200%"
    }
  });

  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i], {pushFollowers: false})
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }
})

window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: 'https://www.olsen.dev/360',
    width: '100%',
    height: '600px',
    is_stereo: false,
  });
}

setTimeout(() => {
  AOS.init({
    offset: 300,
    duration: 700,
    easing: 'ease-in-out-quart',
    delay: 100,
  })
}, 100)
