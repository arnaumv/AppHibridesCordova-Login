var users = [
  { username: 'usuario1', password: 'contraseña1' },
  { username: 'usuario2', password: 'contraseña2' },
  { username: 'usuario3', password: 'contraseña3' }
];

function validarCredenciales(username, password) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return true;
    }
  }
  return false;
}

document.getElementById('loginButton').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (validarCredenciales(username, password)) {
    alert('¡Inicio de sesión exitoso!');
    // Aquí podrías redirigir al usuario a otra página, mostrar otro contenido, etc.
  } else {
    alert('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.');
  }
});

document.getElementById('registerButton').addEventListener('click', function() {
  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Verificar si el usuario ya existe
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === newUsername) {
      alert('El usuario ya existe. Por favor, elige otro nombre de usuario.');
      return;
    }
  }

  // Verificar si las contraseñas coinciden
  if (newPassword !== confirmPassword) {
    alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    return;
  }

  // Agregar nuevo usuario
  users.push({ username: newUsername, password: newPassword });
  alert('¡Registro exitoso! Ahora puedes iniciar sesión con tus nuevos datos.');
});
