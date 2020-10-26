import React, { FC, useState } from "react"
import styled from "styled-components"
import Cell from "./Cell"

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  width: 100%;
  height: 100%;
`

type CellValue = "x" | "o" | ""

const Board: FC = () => {
  const [cells] = useState<CellValue[]>(Array(9).fill(""))
  return (
    <BoardWrapper>
      {cells.map((cell, i) => (
        <Cell key={i} />
      ))}
    </BoardWrapper>
  )
}

export default Board
