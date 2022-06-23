import './App.css';

//Importar React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

//IMPORTANDO VISTAS
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
import CharacterDetail from './Views/CharacterDetail/CharacterDetail';

//IMPORTANDO COMPONENTES
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <Router> 
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path='/Detail/:id' element={<CharacterDetail />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
