import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../Services/firebase';
import CartWidget from './CartWidget/CartWidget';
import Categories from './Categories/Categories';
import './NavBar.css';

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories()
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
                    <li className='oculto'>Modulaciónes
                        <ul>
                            {categories.map((item, index) => <Categories key={index} categories={item}/>)}
                        </ul>
                    </li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </header>
    );
};

export default NavBar;