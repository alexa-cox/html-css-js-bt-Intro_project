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

// EVENT LISTENERS //
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    // exclamation means NOT //
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (confirm_password.value === '') {
    showError(confirm_password, 'confirm_password is required');
  } else {
    showSuccess(confirm_password);
  }
});
