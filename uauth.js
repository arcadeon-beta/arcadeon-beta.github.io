const authenticated = localStorage.getItem('access');
if (authenticated) {
  window.location.href = './home.htm';
}
