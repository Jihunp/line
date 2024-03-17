import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  z-index: 100;
`;

const StartButton = styled.button`
  padding: 40px 80px;
  font-size: 60px;
  font-weight: bold;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;


const Menu = ({ onClick }) => {

  return(
    <MenuContainer>
      <StartButton onClick={onClick}>
        Play Tetris
      </StartButton>
    </MenuContainer>
  )
}


export default Menu;