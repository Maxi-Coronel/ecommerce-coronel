import React from 'react';
import './Section.css'

const Section = (props) => {

    const {svg, nombre, texto} = props

    return (
        <div className='section'>
            <img src={svg} alt={nombre} className='img'/>
            <h3>{nombre}</h3>
            <p>{texto}</p>
        </div>
    );
};

export default Section;