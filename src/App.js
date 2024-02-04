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
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/*<Navbar></Navbar>
      <Hero></Hero>
      <Main></Main>
      <Main1></Main1>
  <Footer></Footer>*/}
  <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
