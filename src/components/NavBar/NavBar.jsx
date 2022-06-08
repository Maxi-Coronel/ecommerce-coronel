import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCollection } from '../../Services/firebase';
import CartWidget from './Widget/CartWidget';
import UserWidget from './Widget/UserWidget';
import Categories from './Categories/Categories';
import './NavBar.css';

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
                <h1>
                    <Link to={'/'}><b>Frontera</b> Living</Link>
                </h1>
                <ul className='nav'>
                    {categories.map((item, index) => <Categories key={index} categories={item}/>)}
                    <li><CartWidget /></li>
                    <li><UserWidget />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default NavBar;