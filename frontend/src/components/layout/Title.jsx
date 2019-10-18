import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p{
    font-size: 80%;
    letter-spacing: 3px;
  }
`
const Letter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const Long = styled.div`
  width: 100px;
  height: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: black;
`
const Short = styled(Long)`
  width: 50px;
  height: 25px;
  background-color: black;
`


export default function Title(){
  return (
    <Container>
      <Letter>
        <Long/>
        <Short/>
        <Long/>
      </Letter>
      <p>010011101</p>
  </Container>
  )
}