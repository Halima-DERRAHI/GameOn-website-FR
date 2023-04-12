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
const confirmMsg = document.querySelector(".message-confirm");

// Form elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
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
function closeModal() {
  modalbg.style.display = "none";
}

// Close modal with confirm message
function closeConfirmModal() {
  // Change the elements display
  modalbg.style.display = "none";
  confirmMsg.style.display = "none";
  form.style.display = "block";
}

// form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validate();
  if (
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validateBirthDay() &&
    validateQuantity() &&
    validationLocation() &&
    validateCu()
  ) {
    confirmMessage();
    hideAllMsg();
    form.reset();
  }
});

// Validation on event
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
birthdate.addEventListener("input", validateBirthDay);
quantity.addEventListener("input", validateQuantity);

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
function validateFirstName() {
  // Check whitespaces
  if (!firstName.value.trim()) {
    checkMsg(firstName, "Veuillez renseigner un prénom.", "input-error");
    return false;
  }
  // Check string length
  else if (firstName.value.length < 2) {
    checkMsg(
      firstName,
      "Veuillez entrer 2 caractères ou plus pour le champ du prenom.",
      "input-error"
    );
    return false;
  }
  // Check if the string is valid
  else if (!firstName.value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g)) {
    checkMsg(firstName, "Veuillez entrer un prénom valide.", "input-error");
    return false;
  }
  // Valid string
  else {
    checkMsg(firstName, "", "input-valid");
    return true;
  }
}

// Last name validation
function validateLastName() {
  // Check whitespaces
  if (!lastName.value.trim()) {
    checkMsg(lastName, "Veuillez renseigner un nom.", "input-error");
    return false;
  }
  // Check string length
  else if (lastName.value.length < 2) {
    checkMsg(
      lastName,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
      "input-error"
    );
    return false;
  }
  // Check if the string is valid
  else if (!lastName.value.match(/^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g)) {
    checkMsg(lastName, "Veuillez entrer un nom valide.", "input-error");
    return false;
  }
  // Valid string
  else {
    checkMsg(lastName, "", "input-valid");
    return true;
  }
}

// email validation
function validateEmail() {
  const emailRegex =
    /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  // Check whitespaces
  if (!email.value.trim()) {
    checkMsg(email, "Veuillez renseigner un E-mail.", "input-error");
    return false;
  }
  // Check if the string is valid
  else if (!email.value.match(emailRegex)) {
    checkMsg(email, "Veuillez renseigner un E-mail valide.", "input-error");
    return false;
  }
  // Valid string
  else {
    checkMsg(email, "", "input-valid");
    return true;
  }
}

// Limit the age at 12 years
function limitAge(input) {
  const birthday = new Date(input.value);
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();

  if (age < 18 || age > 99) {
    return false;
  } else {
    return true;
  }
}

// Birthday date validation
function validateBirthDay() {
  const dateRegex =
    /^[1-2][0-9][0-9][0-9]\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/;
  // Check if the value is valid
  if (!dateRegex.test(birthdate.value)) {
    checkMsg(
      birthdate,
      "Veuillez renseigner une date de naissance valide.",
      "input-error"
    );
    return false;
  }
  // Check the age group
  else if (!limitAge(birthdate)) {
    checkMsg(
      birthdate,
      "Vous devez avoir entre 18 et 99 ans pour pouvoir faire une réservation.",
      "input-error"
    );
    return false;
  }
  // Valid value
  else {
    checkMsg(birthdate, "", "input-valid");
    return true;
  }
}

// Quantity validation
function validateQuantity() {
  const quantityRegex = /^[0-9]{1,2}$/;

  if (!quantity.value) {
    checkMsg(
      quantity,
      "Veuillez renseigner a combien de tournois GameOn avez-vous déjà participé.",
      "input-error"
    );
    return false;
  }
  // Check string length
  else if (quantity.value.length > 2) {
    checkMsg(
      quantity,
      "Veuillez renseigner un nombre à deux chiffres maximum.",
      "input-error"
    );
    return false;
  }
  // Check if the value is valid
  else if (!quantityRegex.test(quantity.value)) {
    checkMsg(quantity, "Veuillez renseigner un nombre valide.", "input-error");
    return false;
  }
  // Valid value
  else {
    checkMsg(quantity, "", "input-valid");
    return true;
  }
}

// Location validation
function validationLocation() {
  const radioCheck = document.querySelector('input[name = "location"]:checked');

  if (!radioCheck) {
    checkboxMsg(locationChoice, "Veuillez renseigner une localisation.");
    return false;
  }
  // Valid value
  else {
    checkboxMsg(locationChoice, " ");
    return true;
  }
}

// CU validations
function validateCu() {
  if (CU.checked) {
    checkboxMsg(CU, " ");
    return true;
  }
  // Not checked
  else {
    checkboxMsg(
      CU,
      "Vous devez vérifier que vous acceptez les termes et conditions d'utilisation."
    );
    return false;
  }
}

// Verification message
function checkMsg(input, message, classChoice) {
  const formDataInput = input.parentElement;
  const fieldMsg = formDataInput.querySelector("small");

  fieldMsg.innerText = message;
  input.className = "text-control " + classChoice;
}

// Verification checkbox
function checkboxMsg(input, message) {
  const formDataInput = input.parentElement;
  const fieldMsg = formDataInput.querySelector("small");

  fieldMsg.innerText = message;
}

// cofirm message
function confirmMessage() {
  form.style.display = "none";
  confirmMsg.innerHTML =
    "<p>Merci pour <br>votre inscription.</p>" +
    '<button class="btn-submit button" onclick="closeConfirmModal()">Fermer</button>';
  confirmMsg.style.display = "block";
}

// Remove all messages
function hideAllMsg() {
  checkMsg(firstName, "", "");
  checkMsg(lastName, "", "");
  checkMsg(email, "", "");
  checkMsg(birthdate, "", "");
  checkMsg(quantity, "", "");
  checkboxMsg(locationChoice, "");
  checkboxMsg(CU, "");
}
