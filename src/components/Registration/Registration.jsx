import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserById, sendUser } from '../../Services/firebase';
import CartContext from '../../storage/CartContext';
import UserContext from '../../storage/UserContext';
import Button from '../Button/Button';
import FormCreate from '../Form/FormCreate/FormCreate';
import FormSesion from '../Form/FormSesion/FormSesion';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';
import './Registration.css'

const Registration = () => {
    const userCtx = useContext(UserContext)
    const cartCtx = useContext(CartContext)

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [isCart, setIsCart] = useState()
    const [link, setLink] = useState()
    const [isModal, setIsModal] = useState({
        title: "",
        content: "",
        isOpen: false
    });
    const closeModal = () => setIsModal({isOpen: false})

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
                ? setIsModal({
                    title: "Error email",
                    content: `El email ${user.mail} ya esta utilizado`,
                    isOpen: true
                })
                : sendUser(user, user.mail)
        })
    }
    const traeUser = (user) => {
        getUserById(user.mail)
        .then(res => {
            res === undefined
                ? setIsModal({
                    title: "Error email",
                    content: "El email no existe",
                    isOpen: true
                })
                : res.user.password !== user.password
                    ? setIsModal({
                        title: "Error contraseña",
                        content: "La contraseña es incorrecta",
                        isOpen: true
                    })
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
                <Modal title={isModal.title} content={isModal.content} isOpen={isModal.isOpen} closeModal={closeModal} />
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