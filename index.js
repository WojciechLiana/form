const nameInput = document.querySelector(".form__input-panel__name-input");
const emailInput = document.querySelector(".form__input-panel__email-input");
const agreementBox = document.querySelector(".form__agreement__box");
const agreementMark = document.querySelector(".form__agreement__mark");
const form = document.querySelector("form");

const inputName = (name) => localStorage.setItem('name', name);

const nameRegex = /^[a-zA-Z ]{2,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValid = (text, regex) => regex.test(text);

const isChckboxChcecked = (checkBox) => checkBox.classList.contains("checked");

const clickAgreement = (e) => {
    e.currentTarget.firstElementChild.classList.toggle("checked");
};

const submitAction = () => {
    inputName(nameInput.value);
    window.location.assign("thanks.html");
};

const incorrectSubmitAction = () => {
    if (!isValid(nameInput.value, nameRegex)) throwError('nieprawidłowe imię');
    if (!isValid(emailInput.value, emailRegex)) throwError('nieprawidłowy email');
    if (!isChckboxChcecked(agreementMark)) throwError("akceptuj zgodę");

    return null;
};

const throwError = (errorMessage) => alert(errorMessage);

const formSubmit = (e) => {
    e.preventDefault();
    isValid(nameInput.value, nameRegex) && isValid(emailInput.value, emailRegex) && isChckboxChcecked(agreementMark) ? submitAction() : incorrectSubmitAction();
};

form.addEventListener('submit', formSubmit);
agreementBox.addEventListener("click", clickAgreement);