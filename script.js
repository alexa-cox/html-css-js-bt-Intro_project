// DECLARE VARIABLES //
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

// SHOW INPUT ERROR MESSAGE //
function showError(input, message) {
  const form_control = input.parentElement;
  form_control.className = 'form_control error';
  const small = form_control.querySelector('small');
  small.innerText = message;
}

//SHOW SUCCESS OUTLINE //
function showSuccess(input) {
  const form_control = input.parentElement;
  form_control.className = 'form_control success';
}

//CHECK EMAIL IS VALID //
function isValidEmail(email) {
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // found by googling js email regex //
  return email_regex.test(String(email).toLocaleLowerCase());
}

// CHECK REQUIRED FIELDS //
function checkRequired(input_arr) {
  input_arr.forEach(function (input) {
    if (input.value.trim() === '') {
      // trim gets rid of white space //
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//GET FIELD NAME //
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENT LISTENERS //
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirm_password]);
});
