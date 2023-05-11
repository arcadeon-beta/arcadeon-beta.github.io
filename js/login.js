const form = document.getElementById('login-form');
const accessCodeInput = document.getElementById('access-code-input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (accessCodeInput.value === 'fuckschool') {
    localStorage.setItem('access', true);
    alert('Access granted!');
    window.location.href = './home.htm';
  } else {
    alert('Invalid access code!');
  }
  
  form.reset();
});
//yoo ggs if you got this! you deserve arcadeon plus if you get to here