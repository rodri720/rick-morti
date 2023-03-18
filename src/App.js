import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from "./components/Cards";
import SearchBar from './components/SearchBar';
import CharacterList from './components/CharacterList';
import Form from './components/Form';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '123456';

  const handleSearch = (character) => {
    const newCharacters = [...characters, character];
    setCharacters(newCharacters);
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access, navigate]);

  return (
    <div className='App'>
      <h1>Personajes de Rick y Morty</h1>
      <SearchBar onSearch={handleSearch} />
      <hr />
      <div>
        <Cards characters={characters} />
      </div>
      <CharacterList characters={characters} />
      <Form login={login} />
    </div>
  );
};

export default App;
