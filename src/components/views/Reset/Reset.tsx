import * as React from "react"
import styled from "styled-components"
import { Winner } from "../Game/Board"

// Start styles
const ResetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2em 1em;
  font-size: 2em;
`

const WinnerWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`

const ResetButton = styled.button`
  background: #2c3e50;
  color: #fff;
  font-family: "Varela Round";
  font-size: 1em;
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
// End styles

// Types
type ResetProps = {
  resetGame(): void
  winner: Winner
}

// Component
const Reset: React.FC<ResetProps> = ({ resetGame, winner }) => {
  return (
    <ResetContainer>
      <WinnerWrapper>
        {winner === "tie" ? "It's tie" : `${winner} is winner 🏆`}
      </WinnerWrapper>
      <ResetButton onClick={() => resetGame()}>Start</ResetButton>
    </ResetContainer>
  )
}

export default Reset
