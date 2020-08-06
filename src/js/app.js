const div = document.getElementById('div');
const btn = document.getElementById('btn');
const heart = document.createElement('img');
heart.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/master/anim/pic/heart.png';
heart.classList.add('heart');
div.appendChild(heart);

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const mas = ['heart-animation', 'heart-animation2', 'heart-animation3', 'heart-animation4'];
btn.addEventListener('click', () => {
  heart.classList.add(mas[randomInteger(0, mas.length - 1)]);
  heart.classList.remove(mas[randomInteger(0, mas.length - 1)]);
});
