import React from 'react'
import styled from 'styled-components'
import Menu from '../layout/Menu'
import Title from '../layout/Title'

const Container = styled.div`
  width: 100%;
  background-color: #ededed;
`
const Landing = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Home(){
  return (
    <Container>
      <Landing>
        <Menu />
        <Title/>
      </Landing>
    </Container>
  )
}
