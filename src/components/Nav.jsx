import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

const Navigation = ({ onSearch }) => {
  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  };

  console.log(example); // Example usage of the variable

  return (
    <nav style={{ backgroundColor: '#222', color: '#fff', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0 }}>React - Rick and Morty</h1>
        <SearchBar onSearch={onSearch} style={{ marginLeft: '10px' }} />
      </div>
      <div>
        <Link to="/app">App</Link>
        <Link to="/characterlist">CharacterList</Link>
        <Link to="/form">Form</Link>
        <Link to="/searchbar">SearchBar</Link>
        <Link to="/nav">Nav</Link>
        <Link to="/cards">Cards</Link>
      </div>
    </nav>
  );
};

export default Navigation;
