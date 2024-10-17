
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import Choices from "choices.js";

import IMask from 'imask'

// Слайдера банера на странице авторизации
if (document.querySelector('[data-slider="auth-banner"]')) {
  const diarySlider = new Swiper('[data-slider="auth-banner"]', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}


// Фунция для модальных окон
const modalBtns = document.querySelectorAll('[data-modal-target]')
const body = document.querySelector('body');

if(modalBtns.length > 0) {

  const modalCloseBtn = document.querySelectorAll('[data-modal-close]');

  // Открытие модального окна
  function openModal(el) {
    el.classList.add('is-open');
    body.classList.add('no-scroll');
  }
  
  // Закрытие модального окна
  function closeModal(el) {
    el.classList.remove('is-open');
    body.classList.remove('no-scroll');
  }

  document.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.classList.contains('modal__overlay')) {
      const closestModal = e.target.closest('[data-modal]');
      closeModal(closestModal);
    }
  })

  modalBtns.forEach((btn) => {
    const modal = document.getElementById(`${btn.dataset.modalTarget}`);
    console.log(modal)
    btn.addEventListener('click', () => {
      openModal(modal);
    });
  });

  modalCloseBtn.forEach((btn) => {
    const modal = btn.closest('[data-modal]');
    btn.addEventListener('click', () => {
      closeModal(modal);
    });
  });
} 


//Функция для показа пароля
const passwordBlocks = document.querySelectorAll('[data-password="block"]');

if(passwordBlocks.length > 0) {

  passwordBlocks.forEach((block) => {
    console.log(block)
    const passwordToggle = block.querySelector('[data-password="toggle"]');
    const passwordInput = block.querySelector('[data-password="input"]');
    console.log(block, passwordToggle, passwordInput)

    const passwordInputType = passwordInput.getAttribute('type');

    passwordToggle.addEventListener('click', () => {
      if (!passwordToggle.classList.contains('is-active')) {
        passwordInput.setAttribute('type', 'text');
        passwordToggle.classList.add('is-active');
      } else {
        passwordInput.setAttribute('type', 'password');
        passwordToggle.classList.remove('is-active');
      }
    })
  })
}

const selects = document.querySelectorAll('select');

if(selects.length > 0) {
  selects.forEach((select) => {
    const choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
    });
  })

}