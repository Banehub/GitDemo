import './style.css'

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Here you would typically make an API call to your backend
  console.log('Login attempt:', { email, password });
  
  // For demo purposes, just show an alert
  alert('Login attempt registered!\nEmail: ' + email);
}); 