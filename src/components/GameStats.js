import React from "react";
import styled from "styled-components";

const StatsContainer = styled.ul`
  position: absolute;
  width: 22vw;
  background-color: red;
  list-style-type: none;
  color: rgba(255, 255, 255, 0.5);
  right: 0;
  bottom: 0;
  text-align: left;
  
  `;
  // font-size: 70px;

const StatsValue = styled.li`
  font-size: 2.8rem;
  margin-bottom: 0.5em;
  color: rgba(255, 255, 255, 1);

`;


const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;


  return (
    <div>
      <StatsContainer>
        <StatsValue>level</StatsValue>
        <StatsValue>{level}</StatsValue>
        <StatsValue>Lines to Level</StatsValue>
        <StatsValue>{linesToLevel}</StatsValue>
        <StatsValue>Points</StatsValue>
        <StatsValue>{points}</StatsValue>
      </StatsContainer>
    <ul>
      {/* <li>Level</li>
      <li className="value">{level}</li>
      <li>Lines to level</li>
      <li className="value">{linesToLevel}</li>
      <li>Points</li>
      <li className="value">{points}</li> */}
    </ul>
    </div>
  );
};

export default React.memo(GameStats);
