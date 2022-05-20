import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './storage/CartContext';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);