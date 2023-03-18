import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div>
      <h2>Lista de personajes:</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
