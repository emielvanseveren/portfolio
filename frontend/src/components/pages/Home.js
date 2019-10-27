import React, { useState } from 'react'
import styled from 'styled-components'

import Blob from '../layout/Blob'
import Title from '../layout/Title'
import Menu from '../layout/Menu'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  overflow-x: hidden;
`

export default function Home(){
  const [inRange, set] = useState(false)
  function changeMenuIconColor(e){
    if (e.clientX > (window.innerWidth / 10 * 9) && e.clientY < 235){
      set(true)
    } else {
      set(false)
    }
  }
  return (
    <Container onMouseMove={changeMenuIconColor}>
      <Blob/>
      <Title/>
      <Menu inRange={inRange}/>
    </Container>
  )
}
