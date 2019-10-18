import React from 'react'
import styled from 'styled-components'
import burger from '../../images/burger.svg'

const Container = styled.div`
 position: absolute;
 top: 50px;
 right: 50px;
 padding: 5px;
 cursor: pointer;
`
const MenuIcon = styled.img`
  width: 30px;
  height: auto;
`

export default function Menu(){
  return(
    <Container>
      <MenuIcon alt="menu-icon" src={burger} />
    </Container>
  )
}