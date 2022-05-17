import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './storage/CartContext';
/* import $ from 'jquery';
import Popper from 'popper.js'; */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAQ0eQ1xpv1N0a6NmI9Fec_hCr5XaXtCRg",
    authDomain: "ecommerce-coronel.firebaseapp.com",
    projectId: "ecommerce-coronel",
    storageBucket: "ecommerce-coronel.appspot.com",
    messagingSenderId: "466681335440",
    appId: "1:466681335440:web:1d739ac26718c16504d215"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </BrowserRouter>
)