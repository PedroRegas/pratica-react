import { useState, createContext } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Detalhes from './pages/Detalhes'
import Home from './pages/Home'
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';


export const UserContext = createContext();
export const CardsContext = createContext();

function App() {
  const [username, setUsername] = useState("");
  const [cards, setCards] = useState([]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <CardsContext.Provider value={{ cards, setCards }}>
        <Nav />
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </CardsContext.Provider>
    </UserContext.Provider>
  );
}

export default App
