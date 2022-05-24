import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Error.css'

const Error = () => {
    return (
    <div>
        <div className='error404'>
            <img src="https://www.nicepng.com/png/full/355-3552101_imgenes-de-intensamente-disney-monday-meme.png" alt="Error 404" />
            <div className='error-title'>
                <h2>OOOPS!!! <br/> La pagina no se a encontrado</h2>
                <h3>Tal vez te interese alguno de estos productos</h3>
            </div>
        </div>
        <ItemListContainer />
    </div>
    );
};

export default Error;