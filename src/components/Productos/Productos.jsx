import React from 'react';
import Cards from '../Cards/Cards';
import './Productos.css'

const Productos = () => {
    return (
        <div className='menu'>
            <Cards img={"http://fronteraliving.com/imagenes/productos/gfr-193-277954.jpg"} nombre={"Rinconero Palermo"} precio={"$150000"}/>
            <Cards img={"http://fronteraliving.com/imagenes/productos/gfr-65-673404.jpg"} nombre={"Rinconero Zaro"} precio={"$130000"}/>
            <Cards img={"http://fronteraliving.com/imagenes/productos/gfr-177-527065.jpg"} nombre={"Rinconero Genesis"} precio={"$160000"}/>
            <Cards img={"http://fronteraliving.com/imagenes/productos/gfr-62-199060.jpg"} nombre={"Rinconero Dubai"} precio={"$90000"}/>
        </div>
    );
};

export default Productos;