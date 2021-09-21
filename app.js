let rellax = new Rellax('.rellax');

const img1 = document.getElementsByClassName('animImg1');
new simpleParallax(img1, {
    scale: 1.4,
    delay: 0.5,
    orientation: 'left'
});

const img2 = document.getElementsByClassName('animImg2');
new simpleParallax(img2, {
    scale: 1.8,
    delay: 0.5,
    orientation: 'down'
});

const img3 = document.getElementsByClassName('animImg3');
new simpleParallax(img3, {
    scale: 1.4,
    delay: 0.5,
    orientation: 'up'
});

const img4 = document.getElementsByClassName('animImg4');
new simpleParallax(img4, {
    scale: 1.6,
    delay: 0.5,
    orientation: 'left'
});

const img5 = document.getElementsByClassName('animImg5');
new simpleParallax(img5, {
    scale: 1.4,
    delay: 0.5,
    orientation: 'left'
});

const img6 = document.getElementsByClassName('animImg6');
new simpleParallax(img6, {
    scale: 1.6,
    delay: 0.5,
    orientation: 'right'
});