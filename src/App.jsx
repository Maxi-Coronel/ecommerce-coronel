import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer'
import CartContainer from './components/Pages/CartContainer/CartContainer';
import Registration from './components/Pages/Registration/Registration';
import CartFinished from './components/Pages/CartFinished/CartFinished';
import OrdersContainer from './components/Pages/OrdersContainer/OrdersContainer';
import Error from './components/Pages/Error/Error';

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
        <Route path='/compras' element={<OrdersContainer />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;