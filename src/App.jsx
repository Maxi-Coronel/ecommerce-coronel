import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<CartContainer />}/>
      </Routes>
    </div>
  );
};

export default App;