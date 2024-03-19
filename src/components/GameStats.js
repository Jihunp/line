import React from "react";
import styled from "styled-components";

const StatsContainer = styled.ul`
  position: absolute;
  top: 70%; /* Adjust as needed */
  transform: translateY(-50%);
  left: calc(75%);
  text-align: left;
  list-style-type: none;
  color: black;
  font-size: 40px;
  `;

const StatsValue = styled.li`
  font-size: 2.8rem;
  margin-bottom: 0.5em;
  color: black;
  `;


const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;


  return (
    <div>
      <StatsContainer>
        <li>Level</li>
        <StatsValue>{level}</StatsValue>
        <li>Lines to Level</li>
        <StatsValue>{linesToLevel}</StatsValue>
        <li>Points</li>
        <StatsValue>{points}</StatsValue>
      </StatsContainer>
    </div>
  );
};

export default React.memo(GameStats);
