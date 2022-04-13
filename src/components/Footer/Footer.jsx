import React from 'react';
import './Footer.css'
import Section from './Section/Section';

const Footer = () => {
    return (
            <div className='footer'>
                <Section svg={"https://blog.openpay.mx/wp-content/uploads/2019/06/img_headerTARJETAS@2x.png"} nombre={"Pagá con tarjeta"} texto={"Con Mercado Pago, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!"}/>
                <Section svg={"https://th.bing.com/th/id/R.209caee4f5e60cb397375a1c5601a443?rik=l%2fBck7bZOcRb2w&riu=http%3a%2f%2fwww.clubsydflandria.com.ar%2fwp-content%2fuploads%2f2018%2f01%2fenvio-express.png&ehk=K%2fdB4b4kOZXUS%2btZpKI0oTn8vM3kQrwixOG5CP2F0Vw%3d&risl=&pid=ImgRaw&r=0"} nombre={"Envío rápido y seguro"} texto={"Elegí Mercado Envíos y seguí tu compra hasta que la recibas. Todos tus paquetes estarán protegidos."}/>
                <Section svg={"https://th.bing.com/th/id/OIP.X8oowvTLoYKC5ZOSsPuzNwAAAA?pid=ImgDet&rs=1"} nombre={"Compra Protegida"} texto={"Te acompañamos hasta que recibas lo que compraste. Y si no es lo que esperabas, te devolvemos el dinero."}/>
            </div>
    );
};

export default Footer;