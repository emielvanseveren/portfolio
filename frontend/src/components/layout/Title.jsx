import React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'


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
const Block = styled.div.attrs(({ width }) => ({
  style: {
    width: width + 'px'
  }
}))`
  height: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: black;
  will-change: width;
`

export default function Title(){
  return (
    <Container>
        <Motion
          defaultStyle={{ longWidth: 0, sw: 0 }}
          style={{ longWidth: spring(100), sw: spring(50, { stiffness: 100, damping: 3})}}
        >
          {({ longWidth, sw }) => (
          <Letter>
            <Block width={longWidth}/>
            <Block width={sw}/>
            <Block width={longWidth}/>
          </Letter>
          )}
        </Motion>
      <p>010011101</p>
  </Container>
  )
}