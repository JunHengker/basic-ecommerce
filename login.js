$(document).ready(function () {
  const storedUsername = localStorage.getItem('username');
  if (storedUsername) {
      $('#username').val(storedUsername);
  }

  $('#loginForm').submit(function (e) {
      e.preventDefault();
      const username = $('#username').val();
      localStorage.setItem('username', username);

      alert('Login successful.');
      window.location.href = 'MainPage.html';
  });
});

