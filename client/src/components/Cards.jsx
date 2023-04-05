import styled from "styled-components";
import React from "react";



const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
`;

const CloseButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Card = ({ name, species, gender, image, onClose }) => {
  return (
    <CardContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt="Not found" />
    </CardContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Cards({ characters }) {
  return (
    <CardsContainer>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </CardsContainer>
  );
}
