const TOP_MENU = document.getElementById('top-menu');
const PLATES = document.getElementById('plates');
const SUBMIT = document.querySelector('.submit-button');
const messageBlock = document.getElementById('message-block');
const message = document.getElementById('message');
let CLOSE_MESSAGE = document.getElementById('close-message');
let form = document.getElementById('data');
let PARTFOLIO_BUTTONS = document.querySelector('.portfolio-buttons');
const verticalPhone = document.querySelector('.vert_phone');
const horizPhone = document.querySelector('.horizontal_phone');

function shuffle() {
    PLATES.removeChild(PLATES.firstChild);
    PLATES.appendChild(PLATES.firstChild);
}

TOP_MENU.addEventListener('click', (event) => {
    const target = event.target;
    TOP_MENU.querySelectorAll('li').forEach(element => element.querySelector('a').classList.remove('active'));
    target.classList.add('active');
});

PARTFOLIO_BUTTONS.addEventListener('click', (e) => {
    const target = e.target;
    PARTFOLIO_BUTTONS.querySelectorAll('button').forEach(elem => elem.classList
        .remove('active-white'));
    target.classList.add('active-white');
    shuffle();
})

PLATES.addEventListener('click', (ev) => {

    PLATES.querySelectorAll('.plate').forEach(el => el.querySelector('img').classList
        .remove('active-border'));
    if (ev.target.tagName == 'IMG') {
        ev.target.classList.add('active-border');
    }
});

form.addEventListener('submit', (eve) => {

    messageBlock.classList.remove('hidden');
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('description').value.toString();
    // message.append.innerText = `
    //     Письмо отправлено
    //     Тема: ${subject}
    //     Описание: ${description}
    // `;
    // message.innerHTML += '<button id="close-message">OK</button>';

    document.getElementById('topic').innerText = subject;

    document.getElementById('about-what').innerText = description;

    eve.preventDefault();
    form.reset();
    return false;
});

CLOSE_MESSAGE.addEventListener('click', (e) => {
    messageBlock.classList.add('hidden');
});

verticalPhone.addEventListener('click', () => {
    verticalPhone.querySelector('.black-left')
        .classList.toggle('hidden');
});

horizPhone.addEventListener('click', () => {
    horizPhone.querySelector('.black-right')
        .classList.toggle('hidden');
});