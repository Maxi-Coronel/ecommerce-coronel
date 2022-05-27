import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './storage/CartContext';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { UserContextProvider } from './storage/UserContext';

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CartContextProvider>
            <UserContextProvider>
                <App />
            </UserContextProvider>
            </CartContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);