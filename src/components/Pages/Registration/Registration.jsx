import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../Context/CartContext';
import UserContext from '../../../Context/UserContext';
import { getById, sendUser } from '../../../Services/firebase';
import Button from '../../Common/Button/Button';
import FormCreate from '../../Common/Form/FormCreate/FormCreate';
import FormSesion from '../../Common/Form/FormSesion/FormSesion';
import Loading from '../../Common/Loading/Loading';
import Modal from '../../Common/Modal/Modal';

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
    const collec = 'users'

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
        getById(user.mail, collec)
        .then(res => {
            if (res !== undefined) {
                setIsModal({
                    title: "Error email",
                    content: `El email ${user.mail} ya esta utilizado`,
                    isOpen: true
                })
            } else {
                sendUser(user, user.mail);
                setIsModal({
                    title: "Felicitaciones",
                    content: `Su usuario fue crado ${user.name}`,
                    isOpen: true
                })
                userCtx.set(user)
            }
        })
    }
    const traeUser = (user) => {
        getById(user.mail, collec)
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
                <FormCreate functional={cargarUser} modal={setIsModal} />
                <Modal title={isModal.title} content={isModal.content} isOpen={isModal.isOpen} closeModal={closeModal} />
            </div>
            : !loading
                ? <div className='cart'>
                    <div>
                        <h2>Usuario</h2>
                        <h4>Nombre: {user.name}</h4>
                        <h4>Apellido: {user.surname}</h4>
                        <h4>Email: {user.mail}</h4>
                    </div>
                    <div className='flex '>
                        <Link to={link}><Button content={isCart} styles={'button'}/></Link>
                        <Link to='/compras'><Button content='Ver compras' styles={'button'}/></Link>
                        <Button content={'Cerrar sesión'} functional={close} styles={'close'}/>
                    </div>
                </div>
                : <Loading />
    );
};

export default Registration;