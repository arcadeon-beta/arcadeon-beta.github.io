const authenticated = localStorage.getItem('access');
if (!authenticated) {
  window.location.href = '/access_denied.html';
}
