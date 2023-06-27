/* DOM formulario registro */

let contenedorForm = document.getElementById("contenedorForm");
let nombre = document.getElementById("inputName");
let apellido = document.getElementById("inputName2");
let email = document.getElementById("inputEmail");
let pais = document.getElementById("inputCountry");
let depto = document.getElementById("inputDpto");
let direccion = document.getElementById("inputAddress");
let apto = document.getElementById("inputApto");
let contrasena = document.getElementById("inputPassword");
let botonForm = document.getElementById("registro");


/* storage formulario registro */

const guardarUsuario = () => {
    let usuario = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        pais: pais.value,
        depto: depto.value,
        direccion: direccion.value,
        apto: apto.value
    };

    sessionStorage.setItem("usuario", JSON.stringify(usuario));
};

const mostrarUsuario = () => {
    let usuario = JSON.parse(sessionStorage.getItem("usuario"));
    contenedorForm.innerHTML = `
        <section>
        <h2 class="display-3">Usuario ingresado</h2>
        <p>Nombre: ${usuario.nombre} ${usuario.apellido}</p>
        <p>Email: ${usuario.email}</p>
        <p>Dirección: ${usuario.direccion}, ${usuario.apto}, ${usuario.depto}, ${usuario.pais} </p>
        </section>
    `;
};

/* condicionales y eventos para el registro */

if (sessionStorage.getItem("usuario")) {
    mostrarUsuario();
} else {
    botonForm.addEventListener("click", (e) => {
        e.preventDefault();
        if (email.value === "" || contrasena.value === "" || nombre.value === "") {
            Swal.fire({
                title: 'error :(',
                text: '¡completá todos los campos!',
                icon: 'error'
            });
        } else {
            Swal.fire({
                text: '¡usuario creado exitosamente! :)',
                icon: 'success',
            });
            guardarUsuario();
            mostrarUsuario();
        }
    });
}
