(function () {
  // eslint-disable-next-line no-undef
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  // eslint-disable-next-line no-undef
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    // eslint-disable-next-line no-undef
    const sr = window.sr = ScrollReveal()


    sr.reveal('.hero-title', {
      duration: 1000,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'left',
      interval: 500
    })

    sr.reveal('.hero-paragraph', {
      duration: 1000,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'right',
      interval: 500
    })
    sr.reveal('.newsletter-header', {
      duration: 1000,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'left',
      interval: 500
    })
    sr.reveal('.newsletter-form', {
      duration: 1000,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'left',
      interval: 500
    })

    sr.reveal('.bubble-3, .bubble-4, .bubble-1, .bubble-2', {
      duration: 1000,
      scale: 0.95,
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 150
    })

    sr.reveal('.hero-browser-inner', {
      duration: 900,
      scale: 0.80,
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 150
    })

    // sr.reveal('.feature', {
    //   duration: 600,
    //   distance: '40px',
    //   easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
    //   interval: 100,
    //   origin: 'bottom',
    //   viewFactor: 0.5
    // })
  }
}())

