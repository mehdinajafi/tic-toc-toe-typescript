import React, { useState } from "react"
import styled from "styled-components"
import Board from "./views/Game/Board"
import Reset from "./views/Reset/Reset"
import Start from "./views/Start/Start"

const Container = styled.div`
  width: 500px;
  height: 500px;
  padding: 1em;
  background: #fff;
  border-radius: 1em;
  @media (max-width: 680px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 360px) {
    width: 200px;
    height: 200px;
  }
`

type GameState = "start" | "game" | "reset"

function XOApp() {
  const [gameState, setGameState] = useState<GameState>("game")
  return (
    <Container>
      {{ start: <Start />, game: <Board />, reset: <Reset /> }[gameState]}
    </Container>
  )
}

export default XOApp
