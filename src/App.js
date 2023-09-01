import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from 'react-bootstrap';
import Navbars from './components/Navbars';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbars/>
      <Hero/>
    </div>
  );
}

export default App;
