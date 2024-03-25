import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
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
const RuleText = styled.div`
  margin-top: 20px; /* Add some space between the button and the text */
  text-align: center;
  font-size: 20px;
  color: #555; /* Adjust color */
`;


const Menu = ({ onClick }) => {

  return(
    <MenuContainer>
      <StartButton onClick={onClick}>
        Play Tetris
      </StartButton>
      <RuleText>
        Some rules about the game:
        <ul>
          If your inputs are not being recorded, please select the input box towards the left of the screen.
          The game is best enjoyed in half screen.
        </ul>
      </RuleText>
    </MenuContainer>
  )
}


export default Menu;