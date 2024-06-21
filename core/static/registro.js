document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrar").addEventListener("click", function(event) {
        event.preventDefault(); // evita que el formulario se envíe

        var nombre = document.getElementById("nombreInput").value;
        var correo = document.getElementById("correoInput").value;
        var contrasena = document.getElementById("contrasenaInput").value;
        var confirmarContrasena = document.getElementById("confirmarContrasenaInput").value;

        // mensajes de error si hay campos vacíos
        if (nombre === "") {
            document.getElementById("mensajeNombre").textContent = "Campo obligatorio";
        } else {
            document.getElementById("mensajeNombre").textContent = "";
        }

        if (correo === "") {
            document.getElementById("mensajeCorreo").textContent = "Campo obligatorio";
        } else if (!correo.endsWith("@gmail.com")) {
            document.getElementById("mensajeCorreo").textContent = "El correo debe ser de Gmail";
        } else {
            document.getElementById("mensajeCorreo").textContent = "";
        }

        if (contrasena === "") {
            document.getElementById("mensajeContrasena").textContent = "Campo obligatorio";
        } else {
            document.getElementById("mensajeContrasena").textContent = "";
        }

        if (confirmarContrasena === "") {
            document.getElementById("mensajeConfirmarContrasena").textContent = "Campo obligatorio";
        } else {
            document.getElementById("mensajeConfirmarContrasena").textContent = "";
        }

        // verifica que las contraseñas coincidan
        if (contrasena !== confirmarContrasena || contrasena === "" || confirmarContrasena === "") {
            document.getElementById("mensajeContrasena").textContent = "Las contraseñas no coinciden";
            document.getElementById("mensajeConfirmarContrasena").textContent = "Las contraseñas no coinciden";
            return; // si las contraseñas no coinciden o están vacías
        }

        // si todo está bien, muestra un mensaje de registro exitoso
        alert("Registro exitoso!");
    });
});


const mostrarContrasenasBtn = document.getElementById('mostrarContrasenas');
        const contrasenaInput = document.getElementById('contrasenaInput');
        const confirmarContrasenaInput = document.getElementById('confirmarContrasenaInput');

        let contrasenasMostradas = false;

        mostrarContrasenasBtn.addEventListener('click', (event) => {
            event.preventDefault(); // evita que la wea se envie y borre las contras

            contrasenasMostradas = !contrasenasMostradas;

            if (contrasenasMostradas) {
                contrasenaInput.type = 'text';
                confirmarContrasenaInput.type = 'text';
                mostrarContrasenasBtn.textContent = 'Ocultar Contraseñas';
            } else {
                contrasenaInput.type = 'password';
                confirmarContrasenaInput.type = 'password';
                mostrarContrasenasBtn.textContent = 'Mostrar Contraseñas';
            }
        });

        document.addEventListener("DOMContentLoaded", function() { //weas que el pablo pidió 
            const nombreInput = document.getElementById("nombreInput");
            const mensajeNombre = document.getElementById("mensajeNombre");
            const correoInput = document.getElementById("correoInput");
            const mensajeCorreo = document.getElementById("mensajeCorreo");
            const contrasenaInput = document.getElementById("contrasenaInput");
            const mensajeContrasena = document.getElementById("mensajeContrasena");
            const confirmarContrasenaInput = document.getElementById("confirmarContrasenaInput");
            const mensajeConfirmarContrasena = document.getElementById("mensajeConfirmarContrasena");

            
            nombreInput.addEventListener("input", function() {
                const nombre = nombreInput.value.trim();
                if (/^[A-Za-z\s]+$/.test(nombre)) {
                    // solo pa letras
                    mensajeNombre.textContent = "";
                } else {
                    mensajeNombre.textContent = "El nombre y apellido solo pueden contener letras y espacios.";
                }

                
            });

            correoInput.addEventListener("input", function() {
                const correo = correoInput.value.trim();
                if (correo.includes("@gmail.com")) {
                    // verificando que esté el "@gmail.com"
                    mensajeCorreo.textContent = "";
                } else {
                    mensajeCorreo.textContent = "El campo debe de contener '@gmail.com'.";
                }
                
            });

            contrasenaInput.addEventListener("input", function() {
                const contrasena = contrasenaInput.value.trim();
                if (contrasena.length > 0) {
                    mensajeContrasena.textContent = ""; // ver si hay alguna wea escrita
                } else {
                    mensajeContrasena.textContent = "Por favor ingresar una contraseña";
                }
            }); 

            confirmarContrasenaInput.addEventListener("input", function() {
                const contrasenaConfirmar = confirmarContrasenaInput.value.trim();
                if (contrasenaConfirmar.length > 0) {
                    mensajeConfirmarContrasena.textContent = ""; // ver si hay alguna wea escrita tmb
                } else {
                    mensajeConfirmarContrasena.textContent = "Por favor confirma la contraseña";
                }
            }); 
        });