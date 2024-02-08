let event1 = document.querySelector('a:nth-of-type(1)'),
event2 = document.querySelector('a:nth-of-type(2)'),
event3 = document.querySelector('a:nth-of-type(3)'),
event4 = document.querySelector('a:nth-of-type(4)'),
event5 = document.querySelector('a:nth-of-type(5)'),
event6 = document.querySelector('a:nth-of-type(6)'),
event7 = document.querySelector('a:nth-of-type(7)'),
event8 = document.querySelector('a:nth-of-type(8)'),
event9 = document.querySelector('a:nth-of-type(9)'),
event10 = document.querySelector('a:nth-of-type(10)'),
event11 = document.querySelector('a:nth-of-type(11)'),
event12 = document.querySelector('a:nth-of-type(12)'),
event13 = document.querySelector('a:nth-of-type(13)'),
event14 = document.querySelector('a:nth-of-type(14)'),
event15 = document.querySelector('a:nth-of-type(15)'),
event16 = document.querySelector('a:nth-of-type(16)'),
event17 = document.querySelector('a:nth-of-type(17)'),
event18 = document.querySelector('a:nth-of-type(18)'),
event19 = document.querySelector('a:nth-of-type(19)'),
event20 = document.querySelector('a:nth-of-type(20)');

// event 1
event1.addEventListener('click', rotate);

function rotate() {
  event1.classList.toggle('rotate');
}

// event 2
event2.addEventListener('mousedown', fill);
event2.addEventListener('mouseup', empty);

function fill() {
  event2.style.backgroundPosition="bottom";
}
function empty() {
  event2.style.backgroundPosition="top";
}

// event 3 & 4
event3.addEventListener('mouseenter', disappear1);

function disappear1() {
  event3.classList.toggle('disappear')
  event4.classList.remove('disappear')
}

event4.addEventListener('mouseleave', disappear2);

function disappear2() {
  event4.classList.toggle('disappear')
  event3.classList.remove('disappear')
}

// event 5
document.addEventListener('DOMContentLoaded', loaded);

function loaded() {
  event5.classList.remove('loading')
}

// event 6 & 7
// window.addEventListener("keydown", checkKeyPressed);

// function checkKeyPressed(e) {
//   if (e.keyCode == "49") {
//       console.log("You pressed 'key 1'.");
//   } else if (e.keyCode == "50") {
//     console.log("You pressed 'key 2'.");
//   }
// }

window.addEventListener('keydown', vanish1);
window.addEventListener('keyup', vanish2);

function vanish1(e) {
  if (e.keyCode == "49") {
    event6.classList.toggle('vanish')
  }
}

function vanish2(e) {
  if (e.keyCode == "50") {
    event7.classList.toggle('vanish')
  }
}


// event 12
event12.addEventListener('click', jumpHandler)
event12.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  event12.classList.toggle('jump')
}



