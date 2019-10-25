import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 100px;
  top: 100px;
  cursor: pointer;
`
const Line = styled.div`
  width: 15px;
  height: 2px;
  margin-bottom: 2px;
  background-color: ${({ inRange }) => inRange? 'white' : 'black'};
`

export default function Hamburger({inRange}){
  return(
    <Container>
      <Line inRange={inRange}/>
      <Line inRange={inRange}/>
      <Line inRange={inRange}/>
    </Container>
  )
}