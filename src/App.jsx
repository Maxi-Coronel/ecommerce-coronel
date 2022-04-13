import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {

  function handleClick() {
    console.log(`click`);
  }
  return (
    <div className="App">
      <NavBar />
      <p>My app</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;