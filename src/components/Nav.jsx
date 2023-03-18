
import SearchBar from './SearchBar.jsx';

function Nav({setCharacters}) {
const example = {
name: 'Morty Smith',
species: 'Human',
gender: 'Male',
image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};

const onSearch = (characterID) => {
//Aquí debemos hacer el llamado a la API para obtener los datos del personaje con ID characterID.
//Una vez obtenidos los datos, los agregamos al estado characters usando setCharacters.
//Por ahora, agregamos el personaje de ejemplo
setCharacters([example]);
};

return (
<nav style={{ backgroundColor: '#222', color: '#fff', padding: '10px' }}>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
<h1 style={{ margin: 0 }}>React - Rick and Morty</h1>
<SearchBar onSearch={onSearch} style={{ marginLeft: '10px' }} />
</div>
</nav>
);
}

export default Nav;