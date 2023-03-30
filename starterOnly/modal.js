// Barre de navigation
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.getElementById("reserve");
const closeModalBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
// Form elements
const firstName = document.getElementById ("first");
const lastName = document.getElementById ("last");
const email = document.getElementById ("email");
const birthdate = document.getElementById ("birthdate");
const quantity = document.getElementById ("quantity");
const locationChoice = document.getElementById("location6");
const CU = document.getElementById("checkbox1");

  
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  window.scroll(0, 0);
}

// close modal form
function closeModal () {
  form.reset();
  modalbg.style.display = "none";
}

// form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //e.validate();

})

// validation form

function validate() {
  validateFirstName();
  validateLastName();
  validateEmail();
  validateBirthDay();
  validateQuantity();
  validationLocation();
  validateCu();
}

// First name validation
function validateFirstName () {
  if (!firstName.value.trim()){
      showError(firstName , "Veuillez renseigner un prénom." );
      return false;
      }
    else if (firstName.length <= 1) {
      showError(firstName , "Veuillez entrer 2 caractères ou plus pour le champ du prenom." );
      return false;
      }
    else if (firstName.value.match(/^ *$/) ) {
      showError(firstName , "Veuillez entrer un prénom valide." );
      return false;
      }
     else {
      hideError (firstName);
      return true;
     } 
}

// Last name validation
function validateLastName () {
  if (!lastName.value.trim()){
      showError(lastName , "Veuillez renseigner un nom." );
      return false;
      }
    else if (lastName.length <= 1) {
      showError(lastName , "Veuillez entrer 2 caractères ou plus pour le champ du nom." );
      return false;
      }
    else if (lastName.value.match(/^ *$/) ) {
      showError(lastName , "Veuillez entrer un prénom valide." );
      return false;
      }
     else {
      hideError (lastName);
      return true;
     } 
}

// email validation
function validateEmail() {
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  if (!email.value.trim()) {
    showError(email , "Veuillez renseigner un E-mail.");
    return false;
  }
  else if (!email.value.match(emailRegex)) {
    showError(email , "Veuillez renseigner un E-mail valide.");
    return false;
  }
  else {
    hideError(email);
    return true;
  }
}
// Birthday date validation
function validateBirthDay() {
  if (birthdate != null) {
    hideError(birthdate);
    return true;
  }
  else {
    showError(birthdate , "Veuillez renseigner une date de naissance valide.");
    return false;
  }
}

// Quantity validation
function validateQuantity() {
  if (!quantity.value) {
    showError(quantity , "Veuillez renseigner a combien de tournois GameOn avez-vous déjà participé.");
    return false;
  } else {
    hideError(quantity);
    return true;
  }
}

// Location validation
function validationLocation(){
  let radioCheck = document.querySelector('input[name = "location"]:checked');
  if (radioCheck != null){
    hidecheckboxError(locationChoice);
    return true;
  }
  else {
    checkboxError(locationChoice , "Veuillez renseigner une localisation.");
    return false;
  }
}
// CU validations
function validateCu() {
if (CU.checked) {
    hidecheckboxError(CU);
    return true;
  }
  else {
    checkboxError(CU , "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation.");
    return false;
  }
}

// error message function
function showError(input , message) {
  const formDataInput = input.parentElement;
  const msgError = formDataInput.querySelector("small");
  msgError.innerText = message;
  input.className = "text-control input-error";
}

// error checkbox function
function checkboxError(input , message) {
  const formDataInput = input.parentElement;
  const msgError = formDataInput.querySelector("small");
  msgError.innerText = message;
}

// hide error message function
function hideError(input) {
  const formDataInput = input.parentElement;
  const msgError = formDataInput.querySelector("small");
  msgError.innerText = " ";
  input.className = "text-control input-valid";
}

// hide error checkbox function
function hidecheckboxError(input) {
  const formDataInput = input.parentElement;
  const msgError = formDataInput.querySelector("small");
  msgError.innerText = " ";
}