import styled from "styled-components";

const DivStyled = styled.div`
  
`

const ButtonComponent = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CloseButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <DivStyled>
      <ButtonComponent>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ButtonComponent>
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt="Not found" />
    </DivStyled>
  )
}
