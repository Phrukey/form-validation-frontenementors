
const inputGroup = document.querySelector('.input-group');
const firstName = document.getElementById('first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
  e.preventDefault();
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let  emailValue =  email.value.trim();
    let passwordValue = password.value.trim();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (firstNameValue === '') {
      errorMsg(firstName, 'First name can not be blank');
      console.log("Enter");
     
    }
    if (lastNameValue === '') {
      errorMsg(lastName, 'Last name can not be blank');
    }
    if (emailValue === '') {
      errorMsg(email, 'Email can not be blank');
    } else if(!isEmail(email)) {
      
      errorMsg(email, 'Looks like this is not an email');
    }
    if (passwordValue === '') {
      errorMsg(password, 'Email can not be blank');
    }
});

function errorMsg(input, msg) {
  input.nextElementSibling.nextElementSibling.innerText = msg;

  input.parentElement.className = 'input-group error';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}