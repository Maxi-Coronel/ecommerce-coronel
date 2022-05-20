import { dataToFirebase } from "./firebase";

const Products = [{
    id: "001",
    pictureUrl: "http://fronteraliving.com/imagenes/productos/gfr-140-701048.jpg",
    title: "Sofa Verona",
    price:250000,
    description: "Sofá Verona con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    measure: "2.20 x 0.95 mts",
    category: "sofa",
    stock: 5,
},{
    id: "002",
    pictureUrl: "http://fronteraliving.com/imagenes/productos/gfr-65-673404.jpg",
    title: "Rinconero Zaro",
    price: 130000,
    description: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    measure: "3.10 x 2.05 mts",
    category: "rinconero",
    stock: 7,
},{
    id: "003",
    pictureUrl: "http://fronteraliving.com/imagenes/productos/gfr-177-527065.jpg",
    title: "Rinconero Genesis",
    price: 160000,
    description: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    measure: "4.43 x 2.47 mts",
    category: "rinconero",
    stock: 8,
},{
    id: "004",
    pictureUrl: "http://fronteraliving.com/imagenes/productos/gfr-62-199060.jpg",
    title: "Rinconero Dubai",
    price: 90000,
    description: "Sofá BOCK con apoya cabeza reclinable en 6 posiciones, estructura y patas en hierro negro, asiento de placa soft alta densidad y 95cm de profundidad.",
    measure: "2.20 x 0.95 mts",
    category: "rinconero",
    stock: 3,
}];

const getData = new Promise((resolve) => {
        resolve(Products)
});

//para cargar datos solo llame a la función uploadToFirebase() en su app
export const uploadToFirebase = () => {
  getData.then(res => {
    dataToFirebase(res)
  })
}