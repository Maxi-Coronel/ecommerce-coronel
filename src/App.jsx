import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Esta va a ser mi tienda'} />
    </div>
  );
};

export default App;