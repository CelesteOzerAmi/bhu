
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


/* storage + condicionales y eventos formulario registro */

const resetStorage = (contenedorForm) => {
    sessionStorage.setItem("usuario", JSON.stringify(contenedorForm))
}

if (sessionStorage.getItem("usuario")) {
    contenedorForm.innerHTML =  `<section> <h2 class="display-3">usuario ingresado</h2>  <p> nombre: ${nombre.value} email: ${email.value} </p> <p> direccion: ${direccion.value} apartamento: ${apto.value}, ${depto.value}, ${pais.value}</p> </section>`
    contenedorForm = JSON.parse(sessionStorage.getItem("usuario"))
} else {
    resetStorage();
    botonForm.addEventListener("click", (e) => {
        e.preventDefault();
        if (email.value === "" || contrasena.value === "") { alert("error al registrar usuario") }
        else {
            contenedorForm.innerHTML = "";
            let nombUsu = document.createElement("div")
            nombUsu.innerHTML = `<section> <h2 class="display-3">usuario creado exitosamente</h2>  <p> nombre: ${nombre.value} email: ${email.value} </p> <p> direccion: ${direccion.value} apartamento: ${apto.value}, ${depto.value}, ${pais.value}</p> </section>`
            contenedorForm.appendChild(nombUsu)
        }
    })
} 