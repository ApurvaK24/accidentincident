import './App.css';
import {usestate} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import Navbar from './Components/Navbar';
//import Hero from './Components/Hero';
//import Main from './Components/Main';
//import Main1 from './Components/Main1';
import Home from './Components/Home';
import About from './Components/About';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Components/style.css'
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import MainD from './MainD';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
     
  <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/dash/*" element={<MainD />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
