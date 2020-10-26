import * as React from "react"
import styled from "styled-components"

const CellWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6em;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  @media (max-width: 680px) {
    font-size: 4em;
  }
  @media (max-width: 360px) {
    font-size: 3em;
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    border-top: none;
  }
  &:nth-child(1),
  &:nth-child(4),
  &:nth-child(7) {
    border-left: none;
  }
  &:nth-child(3),
  &:nth-child(6),
  &:nth-child(9) {
    border-right: none;
  }
  &:nth-child(7),
  &:nth-child(8),
  &:nth-child(9) {
    border-bottom: none;
  }
  cursor: pointer;
`

export type CellValue = "x" | "o" | ""

type CellProps = {
  value: CellValue
  toggleCell(cellIndex: number): void
  cellIndex: number
}

const Cell: React.FC<CellProps> = ({ value, toggleCell, cellIndex }) => {
  return (
    <CellWrapper onClick={() => toggleCell(cellIndex)}>{value}</CellWrapper>
  )
}

export default Cell
