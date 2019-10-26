import React from 'react'
import styled from 'styled-components'
import size from '../../constants/size'

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
    text-align: right;
    display: block;
    font-size: 1rem;
    color: ${({ theme }) => theme.blob};
    font-weight: 600;
  }
  @media ${size.lg}{
    h1{
      font-size: 6rem;
    }
  }
  @media ${size.md}{
    span{
      text-align: center;
    }
  }
  @media ${size.xs}{
    h1{
      font-size: 4rem;
    }
  }
`

export default function Title(){
  return (
    <Container>
      <h1>Emiel Van Severen
        <span>-Developer</span>
      </h1>
    </Container>
  )
}
