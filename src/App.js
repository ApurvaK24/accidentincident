import './App.css';
import {usestate} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Main from './Components/Main';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Components/style.css'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Main></Main>
    </div>
  );
}

export default App;
