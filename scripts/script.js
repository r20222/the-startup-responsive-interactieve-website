// Design history section voor desktop

const cursor = document.querySelector('.cursor');
const designHistory = document.querySelector('.design-history');

designHistory.addEventListener('mousemove', e=> {
console.log(e);
cursor.setAttribute('style', 'top: '+(e.pageY - 30.5)+"px; left: "+(e.pageX - 29)+"px;")
})

// https://www.youtube.com/watch?v=rfpRZ2t_BrQ
// 10:14

// design history voor mobile first

designHistory.addEventListener('click', gradient);

function gradient(){
  designHistory.classList.toggle('cool-gradient');
}


// skateboard dog eye section

document.querySelector('body').addEventListener('mousemove', eyeball);


function eyeball(){
  var eye = document.querySelector('.eye');
  
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1) - 270;
    eye.style.transform = "rotate("+ rot +"deg)";
}

// skateboard dog animation

const clickDog = document.querySelector('.body')
const completeDog = document.querySelector('.dog')
const ear = document.querySelector('.ear')

clickDog.addEventListener('click', skate)
clickDog.addEventListener('animationend', skate)
clickDog.addEventListener('transitionend', skate)
ear.addEventListener('animationend', skate)
ear.addEventListener('transitionend', skate)

function skate() {
  completeDog.classList.toggle('skating')
  ear.classList.toggle('ear-animation')
}



// join us now!!! letter party

const allLetters = document.querySelectorAll('.letter-party h3');

allLetters.forEach(function(letter) {
  letter.addEventListener('click', ()=> {
    letter.classList.toggle('move-letter');
  });
});

allLetters.forEach(function(letter) {
  letter.addEventListener('animationend', again)
});

function again(letter){
  letter.classList.toggle('move-letter');
}


// application skateboard

const appBoard = document.querySelector('.join-us-first')
const board = document.querySelector('.board')
appBoard.addEventListener('click', roll)
appBoard.addEventListener('animationend', roll)

function roll(){
  // board.classList.toggle('flip-over-board');
  appBoard.classList.toggle('roll-board');
}