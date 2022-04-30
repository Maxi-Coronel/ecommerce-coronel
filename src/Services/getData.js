const Products = [{
    id: "001",
    pictureUrl: "https://cdn.shopify.com/s/files/1/0049/0330/5265/products/CaptureOneSession6418_800x.jpg?v=1593293476",
    title: "Sofa Bock",
    price:250000,
    description: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    measure: "2.20 x 0.95 mts",
    category: "sofa",
    stock: 5,
    quantity: 0
},{
    id: "002",
    pictureUrl: "http://fronteraliving.com/imagenes/productos/gfr-65-673404.jpg",
    title: "Rinconero Zaro",
    category: "rinconero",
    price: 130000,
    description: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    measure: "2.20 x 0.95 mts",
    stock: 7,
    quantity: 0
},{
    id: "003",
    pictureUrl: "http://fronteraliving.com/imagenes/productos/gfr-177-527065.jpg",
    title: "Rinconero Genesis",
    price: 160000,
    description: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    measure: "2.20 x 0.95 mts",
    category: "rinconero",
    stock: 8,
    quantity: 0
},{
    id: "004",
    pictureUrl: "http://fronteraliving.com/imagenes/productos/gfr-62-199060.jpg",
    title: "Rinconero Dubai",
    price: 90000,
    description: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    measure: "2.20 x 0.95 mts",
    category: "rinconero",
    stock: 3,
    quantity: 0
}];

const getData = new Promise((resolve) => {
        resolve(Products)
});

export default getData