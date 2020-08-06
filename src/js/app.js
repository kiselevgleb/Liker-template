const note = document.getElementById('note');
const div = document.getElementById('div');
const btn = document.getElementById('btn');

const heart = document.createElement('img');
heart.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/master/anim/pic/heart.png';
heart.classList.add('heart');
div.appendChild(heart);

let mas = ['heart-animation', 'heart-animation2', 'heart-animation3', 'heart-animation4'];
btn.addEventListener('click', () => {
  console.log(randomInteger(0, mas.length - 1));
  heart.classList.add(mas[randomInteger(0, mas.length - 1)]);
  heart.classList.remove(mas[randomInteger(0, mas.length - 1)]);
});

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
