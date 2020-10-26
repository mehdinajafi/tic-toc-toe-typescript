import React from "react"
import styled from "styled-components"
import Board from "./views/Game/Board"

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

function XOApp() {
  return (
    <Container>
      <Board />
    </Container>
  )
}

export default XOApp
