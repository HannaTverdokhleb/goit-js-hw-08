const form = document.querySelector('.feedback-form');
const fields = {};
const throttle = require('lodash.throttle');

const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea');

form.addEventListener('input', throttle(updateValue, 500));
form.addEventListener('submit', removeValues);

document.addEventListener('DOMContentLoaded', () => {
  let fields = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (fields)  {
    email.value = fields.email;
    message.value = fields.message;
  } else {
    email.value = '';
    message.value = '';
  }
});

function updateValue(e) {
  fields.email = email.value;
  fields.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(fields));
}

function removeValues(event) {
  event.preventDefault();
  if (!ValidateEmail(email) || email.value.length === 0) {
    email.classList.add('error');
    return;
  }
  if (message.value.length === 0) {
    message.classList.add('error');
    return;
  }
  let fields = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(fields);
  email.classList.remove('error');
  message.classList.remove('error');
  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
}

function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    return true;

  } else {

    return false;

  }

}