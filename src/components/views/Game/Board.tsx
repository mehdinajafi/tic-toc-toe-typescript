import React, { FC, useState } from "react"
import styled from "styled-components"
import Cell, { CellValue } from "./Cell"

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
  width: 100%;
  height: 100%;
`

const Board: FC = () => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(""))
  const [turn, setTurn] = useState<CellValue>("x")

  const toggleCell = (cellIndex: number) => {
    if (cells[cellIndex] === "") {
      setTurn((turn) => (turn === "x" ? "o" : "x"))
      setCells((cells) =>
        cells.map((cell, i) => (i === cellIndex ? turn : cell))
      )
    }
  }
  return (
    <BoardWrapper>
      {cells.map((cell: CellValue, cellIndex: number) => (
        <Cell
          key={cellIndex}
          value={cell}
          cellIndex={cellIndex}
          toggleCell={toggleCell}
        />
      ))}
    </BoardWrapper>
  )
}

export default Board
