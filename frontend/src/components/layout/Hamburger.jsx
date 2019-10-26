import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import size from '../../constants/size'

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 100px;
  top: 100px;
  z-index: 3;
  cursor: pointer;

  @media ${size.xs}{
    top: 75px;
    right: 30px;
  }

`
const Line = styled.div`
  width: 15px;
  height: 2px;
  margin-bottom: 2px;
  background-color: ${({ inRange }) => inRange ? 'white' : 'black'};

  @media ${size.xs}{
    width: 20px;
    height: 3px;
    margin-bottom: 3px;
  }
`

export default function Hamburger({ inRange }){
  return (
    <Container>
      <Line inRange={inRange}/>
      <Line inRange={inRange}/>
      <Line inRange={inRange}/>
    </Container>
  )
}

Hamburger.propTypes = {
  inRange: PropTypes.bool.isRequired
}
