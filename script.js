'use strict';

const TOP_MENU = document.getElementById('top-menu');
const PLATES = document.getElementById('plates');
const SUBMIT = document.querySelector('.submit-button');
const messageBlock = document.getElementById('message-block');
const message = document.getElementById('message');
let CLOSE_MESSAGE = document.getElementById('close-message');

TOP_MENU.addEventListener('click', (event) => {
    const target = event.target;
    TOP_MENU.querySelectorAll('li').forEach(element => element.querySelector('a').classList.remove('active'));   
    target.classList.add('active');   
});

PLATES.addEventListener('click', (ev) => {
    PLATES.querySelectorAll('div').forEach(el => el.querySelector('img').classList.remove('active-border'));
    ev.target.classList.add('active-border');
});

SUBMIT.addEventListener('click', (eve) => {
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('description').value.toString();
    message.append.innerText = `
        Письмо отправлено
        Тема: ${subject}
        Описание: ${description}
    `;
    // message.innerHTML += '<button id="close-message">OK</button>';
    // 
    // document.getElementById('topic').innerText = subject;
    // 
    // document.getElementById('about-what').innerText = description;
    messageBlock.classList.remove('hidden');
    eve.preventDefault();
});

CLOSE_MESSAGE.addEventListener('click', (e) => {
    messageBlock.classList.add('hidden');
});