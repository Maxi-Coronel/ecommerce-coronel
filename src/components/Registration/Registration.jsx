import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserById, sendUser } from '../../Services/firebase';
import CartContext from '../../storage/CartContext';
import UserContext from '../../storage/UserContext';
import Button from '../Button/Button';
import FormCreate from '../Form/FormCreate/FormCreate';
import FormSesion from '../Form/FormSesion/FormSesion';
import Loading from '../Loading/Loading';
import './Registration.css'

const Registration = () => {
    const userCtx = useContext(UserContext)
    const cartCtx = useContext(CartContext)

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [isCart, setIsCart] = useState()
    const [link, setLink] = useState()

    useEffect(() => {
        setUser(userCtx.user)
        setLoading(false)
    },[userCtx.user])

    useEffect(() => {
        if (cartCtx.products.length === 0) {
            setIsCart('Home')
            setLink('/')
        } else {
            setIsCart('Ir al carrito')
            setLink('/cart')
        }
    },[cartCtx.products])

    const cargarUser = (user) => {
        getUserById(user.mail)
        .then(res => {
            res !== undefined
                ? alert(`El email ${user.mail} ya esta utilizado`)
                : sendUser(user, user.mail)
        })
    }
    const traeUser = (user) => {
        getUserById(user.mail)
        .then(res => {
            console.log(res.user);
            res === undefined
                ? alert('error en email')
                : res.user.password !== user.password
                    ? alert('error contraseña')
                    : userCtx.set(res.user)
        })
    }
    const close = () => {
        userCtx.close()
    }
    return (
        Object.keys(userCtx.user).length === 0
            ? <div className='cart'>
                <FormSesion functional={traeUser} />
                <FormCreate functional={cargarUser} />
            </div>
            : !loading
                ? <div className='cart'>
                    <div>
                        <h2>Usuario:</h2>
                        <h4>Nombre: {user.name}</h4>
                        <h4>Apellido: {user.surname}</h4>
                        <h4>Email: {user.mail}</h4>
                    </div>
                    <div className='flex'>
                        <Button content={<Link to={link} className='button-link'>{isCart}</Link>} styles={'button'}/>
                        <Button content={'Cerrar sesión'} functional={close} styles={'close'}/>
                    </div>
                </div>
                : <Loading />
    );
};

export default Registration;