document.addEventListener("DOMContentLoaded", async function () {
    const $submit = document.getElementById("submit");
    const $username = document.getElementById("username");
    const $password = document.getElementById("password");
    const $visible = document.getElementById("visible");
    const errorUser = document.querySelector(".errorUser");
    const errorPasst = document.querySelector(".errorPasst");
    errorUser.style.display = "none";
    errorPasst.style.display = "none";



    // Evento que se activa cuando se cambia el estado del checkbox "visible"
    $visible.addEventListener("change", function () {
        $password.type = $visible.checked ? "text" : "password";
    });

    // Evento que se activa cuando se hace clic en el botón de submit
    $submit.addEventListener("click", async function (e) {
        e.preventDefault();
        errorUser.style.display = "none";
        errorPasst.style.display = "none";
        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/users");
            const lista_usuarios = await response.json();
            for (let i = 0; i < lista_usuarios.length; i++) {
                let usuario = lista_usuarios[i];

                if ($username.value === usuario.email && $password.value === usuario.password) {
                    window.open("https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr", "_self");
                    return;
                }
                else {
           

                    if ($username.value !== usuario.email) {
                        errorUser.style.display = "block";
                        $username.value = "";
                        return;

                    }
                    if ($password.value !== usuario.password) {
                        errorPasst.style.display = "block";
                        $password.value = ""

                        return;

                    }
                    if ($username.value === "") {
                        e.addEventListener();
                        return;
                    }
                    if ($password.value === "") {
                        e.addEventListener();
                        return;
                    }
                   
                }




                // Si el usuario no se encuentra en la lista de usuarios de la API, mostramos el error
            }


        }
        catch  {
            console.error("Error al obtener los usuarios de la API:", error);
        }
    });
});