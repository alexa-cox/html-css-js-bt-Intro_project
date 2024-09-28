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
function checkEmail(input) {
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // found by googling js email regex //
  if (!email_regex.test(input.value.trim())) {
    showError(input, 'Email is not valid');
  } else {
    showSuccess(input);
  }
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

//CHECK INPUT LENGTH //
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//CHECK PASSWORDS MATCH //
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  } else {
    showSuccess(input);
  }
}

//GET FIELD NAME //
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENT LISTENERS //
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirm_password]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, confirm_password);
});
