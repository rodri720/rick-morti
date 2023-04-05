import React from "react";
import styled from "styled-components"


const SearchInput = styled.input``;

const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  background-color: #0077cc;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
`;

function SearchBarComponent({ onSearch }) {
  const [character, setCharacter] = React.useState("");

  const handleInputChange = (event) => {
    setCharacter(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(character);
    setCharacter("");
  };

  return (
    <DivStyled>
      <SearchInput
        value={character}
        onChange={handleInputChange}
        placeholder="Buscar personaje"
      />
      <CloseButton onClick={handleSearch}>Agregar</CloseButton>
    </DivStyled>
  );
}

export default SearchBarComponent;
