// a plain DOM example of creating a  counter widget using the DOM

let counter = 0;

const counterElem = document.querySelector('.counter');
const incrementBtn =  document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');

incrementBtn.addEventListener('click', function() {
    counter++;
    counterElem.innerText = counter;
});

decrementBtn.addEventListener('click', function() {
    counter--;
    counterElem.innerText = counter;
});


