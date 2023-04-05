import React, { useState, useEffect } from 'react'; 
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import Cards from "./components/Cards";
import SearchBar from './components/SearchBar';
import CharacterList from './components/CharacterList';
import Form from './components/Form';
import Navigation from './components/Nav';
import './index.css';
import './App.css';

const PersonajesApp = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = 'ejemplo@gmail.com';
  const password = '123456';

  /* const handleSearch = (character) => {
    
    const newCharacters = [...characters, character];
    setCharacters(newCharacters);
  }; */
  const onSearch = (characterID) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((response) => response.json())
       
      .then((data) => setCharacters([...characters, data]))
      .catch((error) => console.log(error));
  };

  const login = (userData) => {
    
    if (userData.username === username && userData.password === password) {
      setAccess(true);
    }
  };

  useEffect(() => {
    if (access) {
      navigate('/home');
    }else{
      navigate("/")
    }
  }, [access, navigate]);

  return (
    <div className="App">
      
      <h1>Personajes de Rick y Morty</h1>
      {access ? <Navigation onSearch={onSearch}/> : null }
      <Routes>
        <Route path="/" element={<Form login={login} />}/>
        <Route path="/home" element={<Cards characters={characters} />} />
        <Route path="/characterlist" element={<CharacterList />} />
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/Link" element={<Link />} />
      </Routes>
      
    </div>
  );
};

export default PersonajesApp;
