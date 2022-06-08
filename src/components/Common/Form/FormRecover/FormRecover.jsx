import React from 'react';
import { getById } from '../../../../Services/firebase';
import Button from '../../Button/Button';
import Input from '../Input';

const FormRecover = ({ modal }) => {
    const collec = 'users'

    const checkUser = (event) => {
        event.preventDefault()
        const dni = document.querySelector('#recover-dni').value
        const mail = document.querySelector('#recover-mail').value
        const secret = document.querySelector('#recover-secret').value

        getById(mail, collec)
        .then(res => {
            const user = res.user
            if (dni === user.dni && secret === user.secret) {
                modal({
                title: "Recupero exitoso",
                content: `Contraseña: ${user.password}`,
                isOpen: true
            })
            } else {
                modal({
                title: "Hubo un error",
                content: "Los datos no coinciden",
                isOpen: true
            })
            }
        })
    }

    return (
        <form onSubmit={checkUser} className='form'>
            <div>
                <Input name='E-mail:' type='email' id='recover-mail' placeholder='ejemplo@ejemplo.com' />
                <Input name='DNI:' type='number' id='recover-dni' placeholder='36574896' />
                <Input name='Secreto:' type='text' id='recover-secret' placeholder='Recuperar contraseña' />
            </div>
            <div className='flex'>
                <Button content='Recuperar' styles='button' />
            </div>
        </form>
    );
};

export default FormRecover;