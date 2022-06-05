import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { UserContextProvider } from './Context/UserContext';

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <Router>
            <CartContextProvider>
            <UserContextProvider>
                <App />
            </UserContextProvider>
            </CartContextProvider>
        </Router>
    </React.StrictMode>
);