import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Productos from './components/Productos/Productos';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Productos />
      <Footer />
    </div>
  );
};

export default App;