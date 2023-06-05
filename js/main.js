let productos = [
    {
        id: 0,
        nombre: "Naranja",
        precio: 250,
        stock: 87,
    },
    {
        id: 1,
        nombre: "Banana",
        precio: 500,
        stock: 45,
    },
    {
        id: 2,
        nombre: "Manzana",
        precio: 600,
        stock: 125,
    },
    {
        id: 3,
        nombre: "Pera",
        precio: 500,
        stock: 75,
    },
    {
        id: 4,
        nombre: "Limon",
        precio: 700,
        stock: 45,
    },
    {
        id: 5,
        nombre: "Sandia",
        precio: 800,
        stock: 88,
    },
    {
        id: 6,
        nombre: "Melon",
        precio: 300,
        stock: 65,
    },
    {
        id: 7,
        nombre: "Uva",
        precio: 700,
        stock: 44,
    },
    {
        id: 8,
        nombre: "Cereza",
        precio: 400,
        stock: 125,
    },
    {
        id: 9,
        nombre: "Piña",
        precio: 750,
        stock: 62,
    }

]


let mensajeIntroduccion = "PRODUCTOS EN VENTA\nUsa el buscador para encontrar una fruta\n\n"
let productosMapeados = productos.map(producto => 
        `${producto.id}) ${producto.nombre}\n`
        )
let lista = prompt(mensajeIntroduccion + productosMapeados).toLowerCase()
let encontrarProducto = productos.find(producto => producto.nombre.toLowerCase() === lista);
let encontrarProductoPerfil = productos.find(producto => producto.id === lista);
let resultado
let continuar = true



function catalogo() {
    if (lista == ""){
        lista;
        } else {
            resultado = prompt("Resultados de " + "`" +  lista +  "`" + ". Escribe su ID para ver el perfil." + "\n\n" + encontrarProducto.id + ") " + encontrarProducto.nombre);
        }
}

function perfil() {
    if (resultado == encontrarProducto.id.toString()){
        alert("Perfil de " + "`" + encontrarProducto.nombre + "`\n\n" + 
        "ID: " + encontrarProducto.id + "\n" +
        "NOMBRE: " + encontrarProducto.nombre + "\n" +
        "PRECIO: " + encontrarProducto.precio + " $ / kilo" + "\n" +
        "STOCK: " + encontrarProducto.stock + " unidades" );
    } else {
        alert("¡No se encontró el ID!")
        catalogo();
    }
}


while (continuar){
catalogo();
perfil();
continuar = confirm("¿Desea volver al catalogo?");
lista = prompt(mensajeIntroduccion + productosMapeados).toLowerCase()
encontrarProducto = productos.find(producto => producto.nombre.toLowerCase() === lista);
encontrarProductoPerfil = productos.find(producto => producto.id === lista);
}