import * as React from "react"
import styled from "styled-components"

// Styles
const StartButton = styled.button`
  background: #fff;
  color: #2c3e50;
  font-family: "Varela Round";
  font-size: 2em;
  width: 100%;
  height: 100%;
  padding: 0.5em;
  border: none;
  border-radius: 0.2em;
  transition: transform 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`

// Types
type StartProps = {
  onGameStart(): void
}

// Component
const Start: React.FC<StartProps> = ({ onGameStart }) => {
  return <StartButton onClick={() => onGameStart()}>Start</StartButton>
}

export default Start
