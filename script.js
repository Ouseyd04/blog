let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let buttonRegister = document.querySelector('#register--action');

buttonRegister.addEventListener('click', () => {
  if (firstname.value == "") {
    document.querySelector('.error--firstname').innerText = "Veuillez renseigner votre prénom !";
  } else {
    document.querySelector('.error--firstname').innerText = "";
  }
  if (lastname.value == "") {
    document.querySelector('.error--lastname').innerText = "Veuillez renseigner votre nom !";
  } else {
    document.querySelector('.error--lastname').innerText = "";
  }

  let emailExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value == "") {
    document.querySelector('.error--email').innerText = "Veuillez renseigner votre email !";
  } else if (!emailExpression.test(email.value)) {
    document.querySelector('.error--email').innerText = "Veuillez renseigner un email valide !";
  } else {
    document.querySelector('.error--email').innerText = "";
  }

  let passwordExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
  if (password.value == "") {
    document.querySelector('.error--password').innerText = "Veuillez renseigner votre mot de passe !";
  } else if (!passwordExpression.test(password.value)) {
    document.querySelector('.error--password').innerText = "Le mot de passe doit contenir 8 caractères dont une lettre minuscule et majuscule, un chiffre et un caractère spécial";
  } else {
    document.querySelector('.error--password').innerText = "";
  }
});

let showPasswordButton = document.querySelector('#show--password');
let toggleShow = true
showPasswordButton.addEventListener('click', () => {
  if (toggleShow) {
    password.setAttribute('type', 'text')
    toggleShow = false
  } else {
    password.setAttribute('type', 'password')
    toggleShow = true
  }
})