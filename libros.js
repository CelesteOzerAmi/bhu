
/* array carrito */

let carrito = [];

/* DOM libros */

const libreria = document.getElementById("contenedorProd")

/* función para mostrar objetos de json + agregar objetos al carrito */

const getBooks = async () => {
    const response = await fetch("../data.json")
    const data = await response.json()
    data.forEach((libro) => {
        const div = document.createElement("div")
        div.innerHTML =
            `<div class="card" id="card1" style="width: 18rem">
        <img= ${libro.imagen} class="card-img-top ">
        <div class="card-body">
            <h5 class="card-title">${libro.titulo}</h5>
            <p class="card-text">libro escrito por ${libro.autor}, publicado en ${libro.año}.</p>
            <a href="#end" class="btn btn-primary" id="btn${libro.id}">añadir a mi colección</a>
        </div>
    </div>`
        libreria.append(div)
        let btn = document.getElementById(`btn${libro.id}`)
        btn.addEventListener("click", () => {
            if (carrito.find(({ id }) => id == libro.id)) { } else {
                carrito.push(libro);
                crearColeccion();
                btn.innerHTML = "añadido a mi colección"
                Swal.fire({
                    title: 'libro agregado exitosamente! :)',
                    icon: 'success'
                })
            }
        })
    })
}
getBooks()

/* DOM carrito */

let coleccion = document.getElementById("coleccion")

/* storage carrito ERROR */

const setStorage = () => {
    sessionStorage.setItem("coleccion", JSON.stringify(coleccion))
}

const getStorage = () => {
    JSON.parse(sessionStorage.getItem("coleccion"))
}

if (sessionStorage.getItem("coleccion")) {
    getStorage();
    crearColeccion()
} else { setStorage() }

/* funcion para añadir producto al carrito */

function crearColeccion() {
    coleccion.innerHTML = "";
    coleccion.classList.add("card-group");
    carrito.forEach((libro) => {
        let carritocontainer = document.createElement("div");
        carritocontainer.classList.add("card");
        carritocontainer.innerHTML = `<section id="section"> <h3> "${libro.titulo}", por ${libro.autor}.</h3> <p>editorial: ${libro.editorial}</p> <small>año de publicación: ${libro.año}</small> <a class="btn btn-dark" onClick="eliminarDeColeccion(${libro.id})">quitar de la colección</a></section>`
        coleccion.appendChild(carritocontainer)
    })
    setStorage()
}

/* funcion para eliminar producto del carrito */

function eliminarDeColeccion(id) {
    const producto = carrito.find((producto) => producto.id === id);
    let btn = document.getElementById(`btn${producto.id}`);
    carrito.splice(carrito.indexOf(producto), 1);
    Swal.fire({
        title: 'libro eliminado de la colección :(',
        icon: 'warning'
    });
    (carrito.length < 1) ?
        coleccion.innerHTML = "<h4>sin libros en esta colección :(</h4>"
        : crearColeccion()
    if (carrito.find(({ id }) => id === producto.id)) {
        btn.innerHTML = "libro en mi colección"
    } else {
        btn.innerHTML = "añadir a mi colección"
    }
    /*setStorage()*/
}

