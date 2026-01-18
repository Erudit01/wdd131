const title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components';

// Method 1: document.querySelector('#topics').style.color = 'red';

// Method 2: let topics = document.querySelector('#topics');

// topics.style.color = 'red';

// Method 3: document.getElementById('topics').style.color = 'purple';

let list = document.querySelector('.list');

list.style.border = '3px solid black';

let para = document.querySelector('p');

// para.style.backgroundcolor = 'lightblue';

para.classList.add('background');

// document.querySelector('body').classList.add('background');

const image = document.querySelector('img');

image.setAttribute('src', 'images/web.png');


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})