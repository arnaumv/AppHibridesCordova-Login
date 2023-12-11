var users = [
  { username: 'ieti', password: 'cordova' }
  // Puedes añadir más usuarios aquí si es necesario.
];

document.getElementById('loginButton').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === '' || password === '') {
      alert('Por favor, complete todos los campos.');
      return;
  }

  var user = users.find(function(user) {
      return user.username === username && user.password === password;
  });

  if (user) {
      alert('¡Inicio de sesión exitoso!');
  } else {
      alert('Usuario o contraseña incorrectos.');
  }
});

document.getElementById('registerButton').addEventListener('click', function() {
  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (newUsername === '' || newPassword === '' || confirmPassword === '') {
      alert('Por favor, complete todos los campos.');
      return;
  }

  if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
  }

  var existingUser = users.find(function(user) {
      return user.username === newUsername;
  });

  if (existingUser) {
      alert('El usuario ya existe. Por favor, elige otro nombre de usuario.');
      return;
  }

  users.push({ username: newUsername, password: newPassword });
  alert('¡Registro exitoso! Ahora puedes iniciar sesión con tus nuevos datos.');
});
