import React from 'react';
import Cards from './Cards';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import App from "../App";
import CharacterList from '../components/CharacterList';
import Form from '../components/Form';
import SearchBar from '../components/SearchBar';
import Nav from '../components/Nav';


const Rutas = () => {
  return (
    <Routes>
      <Route path="/app" component={App} />
      <Route path="/characterlist" component={CharacterList} />
      <Route path="/form" component={Form} />
      <Route path="/searchbar" component={SearchBar} />
      <Route path="/nav" component={Nav} />
      <Route path="/cards" component={Cards} />
    </Routes>
  );
};

export default Rutas;
