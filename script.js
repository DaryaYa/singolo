const TOP_MENU = document.getElementById('top-menu');
const PLATES = document.getElementById('plates');
const SUBMIT = document.querySelector('.submit-button');
const messageBlock = document.getElementById('message-block');
const message = document.getElementById('message');
let CLOSE_MESSAGE = document.getElementById('close-message');
let form = document.getElementById('data');
let PORTFOLIO_BUTTONS = document.querySelector('.portfolio-buttons');
const verticalPhone = document.querySelector('.vert_phone');
const horizPhone = document.querySelector('.horizontal_phone');
const blue = document.querySelector('.slide-blue');
const burger = document.querySelector('.header__burger');


function onScroll(event) {
    let curPos = window.scrollY;
    let divs = document.querySelectorAll('.block');
    let links = TOP_MENU.querySelectorAll('a');

    divs.forEach((el) => {

        if ((el.offsetTop - 90 <= curPos) && ((el.offsetTop + el.offsetHeight) >= curPos)) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });

}

function shuffle() {
    let first = PLATES.firstChild;
    PLATES.removeChild(PLATES.firstChild);
    PLATES.append(PLATES.firstChild);
    PLATES.append(first);
}

burger.addEventListener('click', (event) => {
    console.log(event.target);
    event.target.classList.add('burger-transform');
    document.querySelector('.logo').classList.add('logo-transform');
    TOP_MENU.style.visibility = 'visible';
    document.querySelector('.menu-bg').classList.remove('hidden');
})

TOP_MENU.addEventListener('click', (event) => {
    const target = event.target;
    TOP_MENU.querySelectorAll('li').forEach(element => element.querySelector('a').classList.remove('active'));
    target.classList.add('active');
});

document.addEventListener('scroll', onScroll);

PORTFOLIO_BUTTONS.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.tagName == 'BUTTON') {
        PORTFOLIO_BUTTONS.querySelectorAll('button').forEach(elem => elem.classList
        .remove('active-white'));
    target.classList.add('active-white');
    shuffle(); 
    }   
})

PLATES.addEventListener('click', (ev) => {

    PLATES.querySelectorAll('.plate').forEach(el => el.querySelector('img').classList
        .remove('active-border'));
    if (ev.target.tagName == 'IMG') {
        ev.target.classList.add('active-border');
    }
});

form.addEventListener('submit', (eve) => {
    eve.preventDefault();

    messageBlock.classList.remove('hidden');
    let subject = document.getElementById('subject').value.toString();
    let description = document.getElementById('description').value.toString();
    // message.append.innerText = `
    //     Письмо отправлено
    //     Тема: ${subject}
    //     Описание: ${description}
    // `;
    // message.innerHTML += '<button id="close-message">OK</button>';

    if (!subject) { message.querySelectorAll('p')[1].innerHTML = '<span id="topic">Without subject</span>' } else {
        document.getElementById('topic').innerText = `Subject: ${subject}`;
    }

    if (!description) { message.querySelectorAll('p')[2].innerHTML = '<span id="about-what">Without description</span>' } else {
        document.getElementById('about-what').innerText = `Description: ${description}`;
    }

    return false;
});

CLOSE_MESSAGE.addEventListener('click', (e) => {
    messageBlock.classList.add('hidden');
    form.reset();
});

verticalPhone.addEventListener('click', () => {
    verticalPhone.querySelector('.black-left')
        .classList.toggle('hidden');
});

horizPhone.addEventListener('click', () => {
    horizPhone.querySelector('.black-right')
        .classList.toggle('hidden');
});

blue.addEventListener('click', () => {
    blue.querySelector('.black-blue')
        .classList.toggle('hidden');
})

//////// carousel 

let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

let el = document.querySelector('.carousel');

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('current', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('current');
        isEnabled = true;
    })
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.left-arr').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
    isBlue();
})


document.querySelector('.right-arr').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
    isBlue();
})

let isBlue = () => {
    if (document.querySelector('.blue').classList.contains('next')) {
        document.querySelector('.main').style.backgroundColor = '#648BF0'
    } else { document.querySelector('.main').style.backgroundColor = '#e36861' }
}