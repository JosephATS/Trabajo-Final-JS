



function validarRegistroYRedireccionar() {
    var nombres = document.getElementById('nombres').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();


    if (nombres === '' || apellidos === '' || correo === '' || password === '' || confirmPassword === '') {
        alert('Por favor, completa todos los campos.');
        return false; 
    }

    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert('Correo electrónico inválido.');
        return false;
    }

    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return false;
    }


    window.location.href = "index.html";
    return false; 
}