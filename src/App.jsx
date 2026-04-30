import { useState, createContext } from 'react'
import './App.css'
import Nav from './components/Nav'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Detalhes from './pages/Detalhes'
import Home from './pages/Home'
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';


export const UserContext = createContext();

function App() {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/detalhes" element={<Detalhes />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Container>
    </UserContext.Provider>
  );
}

export default App
