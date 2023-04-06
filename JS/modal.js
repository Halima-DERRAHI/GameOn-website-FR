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
const inputValid = document.querySelector(".input-valid");
const formData = document.querySelectorAll(".formData");
const confirmMsg = document.querySelector(".message-confirm");

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
  modalbg.style.display = "none";
}

// Close modal with confirm message
function closeConfirmModal() {
  modalbg.style.display = "none";
  confirmMsg.style.display = "none";
  form.style.display = "block";
}

// form submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  validate();
  if ((validateFirstName()) && (validateLastName()) && (validateEmail()) && (validateBirthDay()) && (validateQuantity()) &&( validationLocation()) && (validateCu())) {
    confirmMessage();
    hideAllMsg();
    form.reset();
  }
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
  return false;
}

// First name validation
function validateFirstName () {
  if (!firstName.value.trim()){
      showError(firstName , "Veuillez renseigner un prénom." );
      return false;
      }
    else if (firstName.value.length <= 1) {
      showError(firstName , "Veuillez entrer 2 caractères ou plus pour le champ du prenom." );
      return false;
      }
    else if (!firstName.value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g) ) {
      showError(firstName , "Veuillez entrer un prénom valide.");
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
    else if (lastName.value.length <= 1) {
      showError(lastName , "Veuillez entrer 2 caractères ou plus pour le champ du nom." );
      return false;
      }
    else if (!lastName.value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g)) {
      showError(lastName , "Veuillez entrer un nom valide." );
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

// Limit the age at 12 years
function limitAge(input) {

  const birthday = new Date(input.value);
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear(); 

  if (age < 12) {
    return false;
  }else {
    return true;
  }
}

// Birthday date validation
function validateBirthDay() {

const dateRegex = /^[1-2][0-9][0-9][0-9]\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/;

if (!dateRegex.test(birthdate.value)) {
    showError(birthdate , "Veuillez renseigner une date de naissance valide.");
    return false;
  }
  else if (!limitAge(birthdate)){
    showError(birthdate , "Vous devez avoir plus de 12 ans pour pouvoir faire une réservation.");
    return false;
  }
  else {
    hideError(birthdate);
    return true;
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
  const radioCheck = document.querySelector('input[name = "location"]:checked');
  if (!radioCheck){
    checkboxError(locationChoice , "Veuillez renseigner une localisation.");
    return false;
  }
  else {
    hidecheckboxError(locationChoice);
    return true;
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
  input.className = "text-control";
}

// hide error checkbox function
function hidecheckboxError(input) {
  const formDataInput = input.parentElement;
  const msgError = formDataInput.querySelector("small");
  msgError.innerText = " ";
}

// cofirm message
function confirmMessage() {
  form.style.display = "none"; 
  confirmMsg.innerHTML = "<p>Merci !<br> Votre réservation a été reçue.</p>" + '<button class="btn-submit button" onclick="closeConfirmModal()">Fermer</button>';
  confirmMsg.style.display = "block";
}

// Reset all messages
function hideAllMsg () {
  hideError(firstName); 
  hideError(lastName); 
  hideError(email); 
  hideError(birthdate); 
  hideError(quantity); 
  hidecheckboxError(locationChoice); 
  hidecheckboxError(CU);
}