import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCollection } from '../../Services/firebase';
import CartWidget from './CartWidget/CartWidget';
import Categories from './Categories/Categories';
import './NavBar.css';
import UserWidget from './UserWidget/UserWidget';

const NavBar = () => {
    
    const collec = 'categories'
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCollection(collec)
            .then(res => {
                setCategories(res)
            })
            .catch(err => alert(`error en promise`))
      },[]);

    return (
        <header>
            <div className='header'>
                <h1><Link to={'/'}><b>Frontera</b> Living</Link></h1>
                <ul className='nav'>
                    <li className='oculto'>Filtrar
                        <ul>
                            {categories.map((item, index) => <Categories key={index} categories={item}/>)}
                        </ul>
                    </li>
                    <li><CartWidget /></li>
                    <li><UserWidget />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default NavBar;