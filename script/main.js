document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        // Prevenir el envío del formulario si hay errores
        let valid = true;
        let errorMessage = '';

        // Validación de Nombre (solo letras y espacios)
        const nombre = document.getElementById('nombre').value;
        const nombreRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;
        if (!nombre || !nombreRegex.test(nombre)) {
            valid = false;
            errorMessage += 'Nombre no válido. Debe contener solo letras y espacios.\n';
        }

        // Validación de Apellido (solo letras y espacios)
        const apellido = document.getElementById('apellido').value;
        const apellidoRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;
        if (!apellido || !apellidoRegex.test(apellido)) {
            valid = false;
            errorMessage += 'Apellido no válido. Debe contener solo letras y espacios.\n';
        }

        // Validación de Dirección (puedes agregar más requisitos según lo que necesites)
        const direccion = document.getElementById('direcionn').value;
        if (!direccion || direccion.length < 5) {
            valid = false;
            errorMessage += 'Dirección no válida. Debe tener al menos 5 caracteres.\n';
        }

        // Validación de Edad (debe ser un número mayor que 0)
        const edad = document.getElementById('edad').value;
        if (isNaN(edad) || edad <= 0) {
            valid = false;
            errorMessage += 'Edad no válida. Debe ser un número mayor que 0.\n';
        }

        // Validación de Correo Electrónico (debe ser Gmail o Hotmail y terminar en .com)
        const email = document.getElementById('email').value;
        const emailRegex = /^[a-zA-Z0-9._-]+@(gmail\.com|hotmail\.com)$/;
        if (email && !emailRegex.test(email)) {
            valid = false;
            errorMessage += 'Correo electrónico debe ser de tipo Gmail o Hotmail y terminar en .com.\n';
        }

        // Validación de Contraseña (mínimo 6 caracteres)
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            valid = false;
            errorMessage += 'La contraseña debe tener al menos 6 caracteres.\n';
        }

        // Si alguna validación falla, muestra los errores y previene el envío del formulario
        if (!valid) {
            e.preventDefault();
            alert(errorMessage);
        }
    });
});
