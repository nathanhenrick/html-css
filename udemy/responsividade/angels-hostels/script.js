window.sr = ScrollReveal({ reset: true });

sr.reveal('.start-scroll', {
    duration: 2000,
    distance: '90px',
    scale: 0.8,
})
sr.reveal ('.scroll-btn', {
    duration: 2000,
    distance: '100px',
    scale: 0.8,
    delay: 500
})
sr.reveal('.services', {
    duration: 1000,
    distance: '100px'
});
sr.reveal('.image', {
    duration: 2000,
    distance: '-90px',
    scale: 0.8,
    rotate: {x: 0,y: 50,z: 0}
});
sr.reveal('.title-image', {
    duration: 2000,
    distance: '-30px',
    scale: 0.8,
})
sr.reveal('.prg-image', {
    duration: 1000,
    distance: '-90px',
    scale: 0.8,
})