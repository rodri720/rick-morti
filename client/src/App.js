import React, { useState, useEffect } from 'react'; 
import { useNavigate, Link, Route } from 'react-router-dom';
import axios from 'axios';
import Cards from "./components/Cards";
import SearchBar from './components/SearchBar';
import CharacterList from './components/CharacterList';
import Form from './components/Form';
import Navigation from './components/Nav';
import './index.css';
import './App.css';


function PersonajesApp() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
 // const username = 'ejemplo@gmail.com';
  //const password = '123456';

  /*const onSearch = (characterID) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((response) => response.json())
      .then((data) => setCharacters([...characters, data]))
      .catch((error) => console.log(error));
  };*/
  const onSearch = async (id) => {
    try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const char = characters.find((char) => char.id === id);
    if (id){
      if (char) { return alert('El personaje ya existe'); }
      setCharacters([...characters, data]);
    }    
  }  
      catch (error) {
      alert (error.message);
  }
}
  /*function login(userData) {
    const { username, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${username}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
  }*/
const login = async (userData) => {
  const { username, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  try {
    const { data } = await axios(URL + `?email=${username}&password=${password}`);
    const { access } = data;
    setAccess(access);
    access && navigate('/home');
  } catch (error) {
    alert(error.message);
  }
};
  useEffect(() => {
    if (access) {
      navigate('/home');
    } else {
      navigate("/");
    }
  }, [access, navigate]);

  return (
    <div className="App">
      <h1>Personajes de Rick y Morty</h1>
      {access && <Navigation onSearch={onSearch} />}
      <router>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} />} />
        <Route path="/characterlist" element={<CharacterList />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/link" element={<Link to="/" />} />
      </router>
    </div>
  );
}
    
export default PersonajesApp;
