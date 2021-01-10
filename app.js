window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
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
