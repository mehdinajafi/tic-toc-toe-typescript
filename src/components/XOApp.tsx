import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Board, { Winner } from "./views/Game/Board"
import Reset from "./views/Reset/Reset"
import Start from "./views/Start/Start"

// Start styles
const variants = {
  game: {
    background: "#fff",
    opacity: 1,
    scale: 1,
    width: "500px",
    height: "500px",
    transition: { type: "spring", duration: 0.8 },
  },
  start: {
    background: "transparent",
    opacity: 1,
    scale: 1,
    width: "200px",
    height: "100px",
    transition: { type: "spring", duration: 0.8 },
  },
  hidden: { opacity: 0, scale: 0.8 },
}

const Container = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  padding: 1em;
`

const AppTitle = styled.div`
  color: #fff;
  font-size: 5em;
  font-weight: 700;
  @media (max-width: 680px) {
    font-size: 4em;
  }
  @media (max-width: 360px) {
    font-size: 3em;
  }
`
// End styles

// types
type GameState = "start" | "game" | "reset"

//component
function XOApp() {
  const [gameState, setGameState] = useState<GameState>("start")
  const [, setWinner] = useState<Winner>("")
  const onGameStart = () => {
    setGameState("game")
  }

  const onGameEnd = (winner: Winner) => {
    setGameState("reset")
    setWinner(winner)
  }
  return (
    <React.Fragment>
      <AppTitle>Tic Tac Toe</AppTitle>
      <Container animate={gameState}>
        {
          {
            start: <Start onGameStart={onGameStart} />,
            game: <Board onGameEnd={onGameEnd} />,
            reset: <Reset />,
          }[gameState]
        }
      </Container>
    </React.Fragment>
  )
}

export default XOApp
