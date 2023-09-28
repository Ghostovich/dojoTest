let headerScriptForm = document.querySelector('.header__script__form');
let openPopupButtons = document.querySelectorAll('.header__form__button');
let closePopupButton = document.querySelector('.header__script__form__button');
let closeMain = document.querySelector('.header__form');



openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    headerScriptForm.classList.add('active');
    closeMain.classList.add('active');
  })
});

closePopupButton.addEventListener('click', () => {
  headerScriptForm.classList.remove('active');
  closeMain.classList.remove('active');
});



let stayClientScriptForm = document.querySelector('.stay__client__script__form');
let openStayClientPopupButtons = document.querySelectorAll('.stay__client__form__button');
let closeStayClientPopupButton = document.querySelector('.stay__client__script__form__button');
let closeStayClientMain = document.querySelector('.stay__client__form');



openStayClientPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    stayClientScriptForm.classList.add('active');
    closeStayClientMain.classList.add('active');
  })
});

closeStayClientPopupButton.addEventListener('click', () => {
  stayClientScriptForm.classList.remove('active');
  closeStayClientMain.classList.remove('active');
});