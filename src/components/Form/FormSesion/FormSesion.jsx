import React from 'react';
import Button from '../../Button/Button';
import Input from '../Input';

const FormSesion = ({ functional }) => {

    const dates = (event) => {
        event.preventDefault()
        const mail = document.querySelector('#mailSesion').value
        const password = document.querySelector('#passwordSesion').value
        
        const user = {
            mail: mail,
            password: password,
        }
        functional(user)
    }
    
    return (
        <form onSubmit={dates} className='form'>
            <div>
                <Input name='E-mail:' type='email' id='mailSesion' placeholder='ejemplo@ejemplo.com' />
                <Input name='Contraseña:' type='password' id='passwordSesion' placeholder='contraseña' />
            </div>
            <Button content='Iniciar sesión' styles='button' />
        </form>
    );
};

export default FormSesion;