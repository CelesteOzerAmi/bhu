
/* constructor */
class Libro {
    constructor(id, titulo, autor, editorial, año) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.año = año;
    }
}

/* objetos */
const libro1 = new Libro(1, "Los miserables", "Victor Hugo", "A. Lacroix, Verboeckhoven & Ce., Bruselas, Bélgica.", 1862)
const libro2 = new Libro(2, "El segundo sexo", "Simone de Beauvior", "Gallimard, Francia.", 1949)
const libro3 = new Libro(3, "Crítica de la razón pura", "Immanuel Kant", "desconocida, Prusia.", 1781)
const libro4 = new Libro(4, "Sobre las revoluciones de las orbes celestes", "Nicolas Copérnico", "desconocida", 1543)

/* array de objetos*/
const libros = [libro1, libro2, libro3, libro4]

/* array carrito */
let carrito = [];

/* DOM tarjeta 1  */

const btn1 = document.getElementById("boton1")

/* evento tarjeta 1 */

btn1.addEventListener("click", () => {
    if (carrito.find(({ id }) => id == libro1.id)) { } else {
        carrito.push(libro1);
        crearColeccion();
    }
})

/* DOM tarjeta 2 */

const btn2 = document.getElementById("boton2")

/* evento tarjeta 2 */

btn2.addEventListener("click", () => {
    if (carrito.find(({ id }) => id == libro2.id)) { } else {
        carrito.push(libro2);
        crearColeccion();
    }
})

/* DOM tarjeta 3 */

const btn3 = document.getElementById("boton3")

/* evento tarjeta 3 */

btn3.addEventListener("click", () => {
    if (carrito.find(({ id }) => id == libro3.id)) { } else {
        carrito.push(libro3);
        crearColeccion();
    }
})

/* DOM tarjeta 4 */

const btn4 = document.getElementById("boton4")

/* evento tarjeta 4 */

btn4.addEventListener("click", () => {
    if (carrito.find(({ id }) => id == libro4.id)) {
    } else {
        carrito.push(libro4);
        crearColeccion();
    }
})

/* DOM carrito */

let coleccion = document.getElementById("coleccion")

/* storage carrito ERROR 

const setStorage = (coleccion) => {
    sessionStorage.setItem("coleccion", JSON.stringify(coleccion))
}

if (sessionStorage.getItem("coleccion")) {
    coleccion = JSON.parse(sessionStorage.getItem("coleccion"))
    crearColeccion()
} else { setStorage() }*/

/* funcion para añadir producto al carrito */


function crearColeccion() {
    editarTex()
    coleccion.innerHTML = "";
    coleccion.classList.add("card-group");
    carrito.forEach((libro) => {
        let carritocontainer = document.createElement("div");
        carritocontainer.classList.add("card");
        carritocontainer.innerHTML = `<section id="section"> <h3> "${libro.titulo}", por ${libro.autor}.</h3> <p>editorial: ${libro.editorial}</p> <small>año de publicación: ${libro.año}</small> <a class="btn btn-dark" onClick="eliminarDeColeccion(${libro.id})">quitar de la colección</a></section>`
        coleccion.appendChild(carritocontainer)
        /*setStorage()*/
    })
}

/* función para editar texto en botones de tarjetas */

function editarTex() {
    if (carrito.find(({ id }) => id === libro1.id)) {
        btn1.innerHTML = "libro en mi colección"
    } else {
        btn1.innerHTML = "añadir a mi colección"
    }
    if (carrito.find(({ id }) => id === libro2.id)) {
        btn2.innerHTML = "libro en mi colección"
    } else {
        btn2.innerHTML = "añadir a mi colección"
    }
    if (carrito.find(({ id }) => id === libro3.id)) {
        btn3.innerHTML = "libro en mi colección"
    } else {
        btn3.innerHTML = "añadir a mi colección"
    }
    if (carrito.find(({ id }) => id === libro4.id)) {
        btn4.innerHTML = "libro en mi colección"
    } else {
        btn4.innerHTML = "añadir a mi colección"
    }
}

/* funcion para eliminar producto del carrito */

function eliminarDeColeccion(id) {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1)
        ;
    if (carrito.length < 1) {
        coleccion.innerHTML = "<h4>sin libros en esta colección :(</h4>"
    } else {
        crearColeccion()
    }
    editarTex()/*
    setStorage()*/
}

