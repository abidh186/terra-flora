import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Plant store coming soon . . .</p>
      </header>
    </div>
  );
}

export default App;
