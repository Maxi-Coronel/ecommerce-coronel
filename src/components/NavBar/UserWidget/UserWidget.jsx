import React from 'react';
import { Link } from 'react-router-dom';

const UserWidget = () => {

    return (
        <Link to={'/registro'} className='widget'>
            <img src="https://lanmo.unam.mx/repositorio/LANMO/rn/hablantes/imagenes/directorio/hablante_blank.png" alt="user widget" />
        </Link>
    );
};

export default UserWidget;