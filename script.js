'use strict';

const TOP_MENU = document.getElementById('top-menu');
const PLATES = document.getElementById('plates');
const SUBMIT = document.querySelector('.submit-button');
const messageBlock = document.getElementById('message-block');
const message = document.getElementById('message');
const CLOSE_MESSAGE = document.getElementById('close-message');

TOP_MENU.addEventListener('click', (event) => {
    const target = event.target;
    TOP_MENU.querySelectorAll('li').forEach(element => element.classList.remove('active'));   
    target.closest('li').classList.add('active');   
});

PLATES.addEventListener('click', (ev) => {
    PLATES.querySelectorAll('div').forEach(el => el.querySelector('img').classList.remove('active-border'));
    ev.target.classList.add('active-border');
});

SUBMIT.addEventListener('click', (eve) => {
    eve.preventDefault();
    
});

CLOSE_MESSAGE.addEventListener('click', (e) => {
    e.target.closest('div').closest('div').style.display = 'none';
})