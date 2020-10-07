const userName = localStorage.getItem("name");
const thanksNameField = document.querySelector(".thanks__header__name");

const setName = (name) => {
    thanksNameField.innerHTML = name.toUpperCase();
};

setName(`${userName}!`);