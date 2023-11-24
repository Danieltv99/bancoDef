document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        function generarNumeroCuenta() {
            let numero = '';
            for (let i = 0; i < 20; i++) {
              numero += Math.floor(Math.random() * 10); // Genera un dígito aleatorio del 0 al 9 y lo agrega al número
            }
            return numero;
          }
          
        let numCuenta = generarNumeroCuenta();
        console.log(generarNumeroCuenta);
        var name = document.getElementById("name").value;
        var lastName = document.getElementById("last_name").value;
        var idNumber = document.getElementById("number").value;
        var regUsername = document.getElementById("username").value;
        var regPassword = document.getElementById("password").value;
        var tipocuenta = document.getElementById("tipocuenta").value;
        var claveRetCuenta = document.getElementById("claveretcuenta").value;

        var nombreCompleto = name + ' ' + lastName;
        // Crear un objeto con la información del usuario
        var newCliente = {
            cedulacliente: idNumber,
            nomcliente: nombreCompleto,
            direccliente: direccliente,
        };
        var newUser = {
            numcuenta: numCuenta,
            saldocuenta: '0',
            tipocuenta: tipocuenta,
            usercuenta: regUsername,
            contrcuenta:regPassword,
            limretcuenta: '6000',
            claveretcuenta: claveRetCuenta,
        }

        // Aquí podrías realizar alguna operación con el objeto del nuevo usuario
        // Por ejemplo, enviarlo a una base de datos o mostrarlo en la consola
        console.log("Nuevo cliente registrado:", newCliente);
        console.log("Nuevo usuario registrado:", newUser);


        alert("¡Registro exitoso! Ahora puedes iniciar sesión con tus credenciales.");
        window.location.href = "login.html"; // Redirigir al formulario de inicio de sesión
    });
});