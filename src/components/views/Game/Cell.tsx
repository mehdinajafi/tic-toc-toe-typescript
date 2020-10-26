import * as React from "react"
import styled from "styled-components"

const CellWrapper = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
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

const Cell = () => {
  return <CellWrapper></CellWrapper>
}

export default Cell
