import './App.css';
import { Header } from './components/Header';
import iccon from './components/images/iccon.jpg';
function App() {
  return (
    <div className="App">
    <Header />
    <img src={iccon} alt="Icon" />
    </div>
  );
}

export default App;