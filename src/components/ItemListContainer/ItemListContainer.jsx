import React from 'react';
import Cards from '../Cards/Cards';
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const {greeting} = props

    const productos = [
        {img: "http://fronteraliving.com/imagenes/productos/gfr-193-277954.jpg",
        nombre: "Rinconero Palermo",
        precio:"$150000"},
        {img: "http://fronteraliving.com/imagenes/productos/gfr-65-673404.jpg",
        nombre: "Rinconero Zaro",
        precio: "$130000"},
        {img: "http://fronteraliving.com/imagenes/productos/gfr-177-527065.jpg",
        nombre: "Rinconero Genesis",
        precio: "$160000"},
        {img: "http://fronteraliving.com/imagenes/productos/gfr-62-199060.jpg",
        nombre: "Rinconero Dubai",
        precio: "$90000"}
    ];

    return (
        <>
            <h3>{greeting}</h3>
            <section className='menu'>
                {productos.map((item, index) =>
                    <Cards key={index} producto={item} />)}
            </section>
        </>
    );
};

export default ItemListContainer;