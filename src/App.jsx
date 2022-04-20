import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <ItemListContainer greeting={'Esta va a ser mi tienda'} />
      <Footer />
    </div>
  );
};

export default App;