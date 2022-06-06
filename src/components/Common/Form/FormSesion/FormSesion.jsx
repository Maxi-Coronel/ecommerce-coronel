import React from 'react';
import Button from '../../Button/Button';
import FormRecover from '../FormRecover/FormRecover';
import Input from '../Input';

const FormSesion = ({ functional, modal }) => {

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

    const recover = (event) => {
        event.preventDefault()
        modal({
            title: "Conteste las preguntas",
            content: <FormRecover modal={modal} />,
            isOpen: true
        })
    }
    
    return (
        <>
            <form onSubmit={dates} className='form'>
                <div>
                    <Input name='E-mail:' type='email' id='mailSesion' placeholder='ejemplo@ejemplo.com' />
                    <Input name='Contraseña:' type='password' id='passwordSesion' placeholder='contraseña' />
                </div>
                <div className='form-button'>
                    <Button content='Iniciar sesión' styles='button' />
                    <Button content='Recupera contraseña' styles='button' functional={recover}/>
                </div>
            </form>
        </>
        
    );
};

export default FormSesion;