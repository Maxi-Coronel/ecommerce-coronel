import React from 'react';
import './Section.css'

const Section = (props) => {
    return (
        <div className='section'>
            <img src={props.svg} alt={props.nombre} className='img'/>
            <h3>{props.nombre}</h3>
            <p>{props.texto}</p>
        </div>
    );
};

export default Section;