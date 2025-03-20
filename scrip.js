'use strict';

const body = document.querySelector('body');



function change() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    body.style.backgroundColor="rgb(" + red + ", " + green + ", " + blue +")";
    console.log('welldone')
}