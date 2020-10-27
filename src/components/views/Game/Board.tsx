import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"
import Cell, { CellValue } from "./Cell"

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
  width: 100%;
  height: 100%;
`

// prettier-ignore
const winningConditions = [
  [0,1,2], [3,4,5], [6,7,8], // Horizontal
  [0,3,6], [1,4,7], [2,5,8], // Vertical
  [0,4,8], [2,4,6] // Diagonal
]

export type Winner = CellValue | "tie"
type BoardProps = { onGameEnd(winner: Winner): void }

const Board: FC<BoardProps> = ({ onGameEnd }) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(""))
  const [turn, setTurn] = useState<CellValue>("x")

  useEffect(() => {
    for (let i = 0; i < winningConditions.length; i++) {
      let [a, b, c] = winningConditions[i]

      if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
        onGameEnd(cells[a])
      }
    }
    if (cells.filter((cell) => cell).length === 9) {
      onGameEnd("tie")
    }
  }, [turn, cells, onGameEnd])

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
