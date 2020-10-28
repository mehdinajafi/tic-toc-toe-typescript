import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Board, { Winner } from "./views/Game/Board"
import Reset from "./views/Reset/Reset"
import Start from "./views/Start/Start"

// Start styles
const variants = {
  game: {
    opacity: 1,
    scale: 1.1,
    transition: { type: "spring", duration: 0.5 },
  },
  start: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 1 },
  },
  reset: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 1 },
  },
  hidden: { opacity: 0, scale: 0 },
}

const Container = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants,
}))`
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  padding: 0.5em;
`

const AppTitle = styled.div`
  color: #fff;
  font-size: 5em;
  font-weight: 700;
  margin-bottom: 0.5em;
  @media (max-width: 680px) {
    font-size: 4em;
  }
  @media (max-width: 360px) {
    font-size: 3em;
  }
`
// End styles

// Types
type GameState = "start" | "game" | "reset"

// Component
function XOApp() {
  const [gameState, setGameState] = useState<GameState>("start")
  const [winner, setWinner] = useState<Winner>("")
  const onGameStart = () => {
    setGameState("game")
  }

  const onGameEnd = (winner: Winner) => {
    setGameState("reset")
    setWinner(winner)
  }

  const resetGame = () => {
    setGameState("game")
    setWinner("")
  }
  return (
    <React.Fragment>
      <AppTitle>Tic Tac Toe</AppTitle>
      <Container animate={gameState}>
        {
          {
            start: <Start onGameStart={onGameStart} />,
            game: <Board onGameEnd={onGameEnd} winner={winner} />,
            reset: <Reset resetGame={resetGame} winner={winner} />,
          }[gameState]
        }
      </Container>
    </React.Fragment>
  )
}

export default XOApp
