import React from 'react'
import styled from 'styled-components'

import Trail from '../layout/Trail'
import Title from '../layout/Title'
import Intro from '../layout/Intro'

const Container = styled.div`
  width: 100%;
`
const Landing = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Home(){
  return (
    <Container>
      {/*absolute containers*/}
      <Trail/>

      <Landing>
        <Title/>
      </Landing>

      <Intro/>
    </Container>
  )
}
