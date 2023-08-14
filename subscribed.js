document.addEventListener('DOMContentLoaded', function() {
    const userMail = document.getElementById('user-mail');
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    if (email) {
      userMail.textContent = `${email}`
    } else {
      userMail.textContent = 'Email not available';
    }
  });