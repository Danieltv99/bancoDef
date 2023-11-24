document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        var username = document.getElementById("usercuenta").value;
        var password = document.getElementById("contrcuenta").value;

        // Supongamos que aquí tienes los datos del usuario registrado
        var regUsername = "usercuenta";
        var regPassword = "contrcuenta";

        // Verificar si los datos ingresados coinciden con los datos registrados
        if (username === regUsername && password === regPassword) {
            alert("¡Inicio de sesión exitoso!");
            window.location.href = "miCuenta.html"; // Redirigir a la página de la cuenta
        } else {
            alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        }
    });
});
