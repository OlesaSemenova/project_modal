'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const bthCloseModelWindow = document.querySelector('.close-modal-window');
const bthShowModelWindow = document.querySelectorAll('.show-modal-window');

console.log(bthShowModelWindow);

const showModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const clouseModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < bthShowModelWindow.length; i++) {
  bthShowModelWindow[i].addEventListener('click', showModalWindow);
}

bthCloseModelWindow.addEventListener('click', clouseModalWindow);
overlay.addEventListener('click', clouseModalWindow);
