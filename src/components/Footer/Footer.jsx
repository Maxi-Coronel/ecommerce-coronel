import React from 'react';
import Button from '../Common/Button/Button';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <h4>FRONTERA LIVING</h4>
                <p>Showroom: 25 de Mayo 1541, San Francisco</p>
                <p>Lunes a Viernes: 08hs a 18hs</p>
                <p>Telefono: 3564-699955</p>
                <p>Mail: maxicoronel1992@gmail.com</p>
            </div>
            <div>
                <h4>NEWSLETTER</h4>
                <p>¡Suscribite y recibí todas las ofertas y novedades!</p>
                <form action="" className='footer-form'>
                    <input type="email" placeholder='Ingresá tu mail'/>
                    <Button content={'SUBSCRIBASE'} styles={'button'} />
                </form>
            </div>
        </footer>
    );
};

export default Footer;