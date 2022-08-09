"use strict"
// слайдер

const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

let i = 0;

const removeActive = i => {
    dots[i].classList.remove('active');
    slides[i].classList.remove('active');
}

const addActive = i => {
    slides[i].classList.add('active');
    dots[i].classList.add('active');
}

dots.forEach((item, index) => {
    item.addEventListener(('click'), () => {
        removeActive(i);
        i = index;

        addActive(i);

    });
});


// форма


const form = document.getElementById('#form');

form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

}


const formValidate = (form) => {
    let error = 0;
    let formReq = document.querySelectorAll('.req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
    }
}

function inputAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}


function inputRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');

}