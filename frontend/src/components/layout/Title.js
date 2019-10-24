import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  flex-direction: column;

  h1{
    font-size: 8rem;
    text-align: center;
    color: ${({ theme }) => theme.blob};
  }
  span{
    text-align: center;
    display: block;
    font-size: 4rem;
    color: ${({ theme }) => theme.blob};
    margin-top: -80px;
    font-weight: 600;
  }
`

export default function Title(){
  return (
    <Container>
      <h1>Emiel Van Severen</h1>
    </Container>
  )
}
