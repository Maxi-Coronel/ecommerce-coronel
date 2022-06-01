import './App.css'
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';
import CartFinished from './components/CartContainer/CartFinished';
import Orders from './components/OrdersContainer/OrdersContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/registro' element={<Registration />}/>
        <Route path='/cart' element={<CartContainer />}/>
        <Route path='/finalizada' element={<CartFinished />}/>
        <Route path='/compras' element={<Orders />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;