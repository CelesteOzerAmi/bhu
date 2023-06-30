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
        <p class="display-4">usuario ingresado</p>
        <h4 class= "fw-light">nombre: ${usuario.nombre} ${usuario.apellido}</h4>
        <h4 class="fw-light">email: ${usuario.email}</h4>
        <h4 class="fw-light">dirección: ${usuario.direccion}, ${usuario.apto}, ${usuario.depto}, ${usuario.pais} </h4>
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
