const Products = [
    {id: "001",
    img: "https://cdn.shopify.com/s/files/1/0049/0330/5265/products/CaptureOneSession6418_800x.jpg?v=1593293476",
    nombre: "Sofa Bock",
    precio:250000,
    descripcion: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    medida: "2.20 x 0.95 mts",
    stock: 5,
    quantity: 0},
    {id: "002",
    img: "http://fronteraliving.com/imagenes/productos/gfr-65-673404.jpg",
    nombre: "Rinconero Zaro",
    precio: 130000,
    descripcion: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    medida: "2.20 x 0.95 mts",
    stock: 7,
    quantity: 0},
    {id: "003",
    img: "http://fronteraliving.com/imagenes/productos/gfr-177-527065.jpg",
    nombre: "Rinconero Genesis",
    precio: 160000,
    descripcion: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    medida: "2.20 x 0.95 mts",
    stock: 8,
    quantity: 0},
    {id: "004",
    img: "http://fronteraliving.com/imagenes/productos/gfr-62-199060.jpg",
    nombre: "Rinconero Dubai",
    precio: 90000,
    descripcion: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    medida: "2.20 x 0.95 mts",
    stock: 3,
    quantity: 0}
];

const getData = new Promise((resolve) => {
    setTimeout(() => {
        resolve(Products)
    }, 2000)
});

export default getData