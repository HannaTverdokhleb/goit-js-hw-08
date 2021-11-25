const form = document.querySelector('.feedback-form');
const fields = {};
const throttle = require('lodash.throttle');

const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea');

form.addEventListener('input', throttle(updateValue, 500));
form.addEventListener('submit', removeValues);

document.addEventListener('DOMContentLoaded', () => {
  let fields = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (fields) {
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
  let fields = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(fields);
  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
}
