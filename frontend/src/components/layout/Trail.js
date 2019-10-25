import React, { useState } from 'react'
import styled from 'styled-components'
import { useTrail, animated } from 'react-spring'
import colors from '../../constants/colors'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Bubbles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: url('#bubble');
  overflow: hidden;
  z-index: -1;

  & > div {
    position: absolute;
    will-change: transform;
    box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.5);
    background: ${({ c1, c2 }) => `linear-gradient(${c1},${c2})`};
    opacity: 0.9;
  }
  div:nth-child(1){
    width: 125px;
    height: 125px;
  }
  div:nth-child(2){
    width: 250px;
    border-radius: 50% 40% 50% 35%;
    height: 250px;
  }
  div:nth-child(3){
    width: 150px;
    height: 150px;
  }
  div::after{
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.white };
    opacity: 0.8;
  }

  div:nth-child(2)::after {
    top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
  }
  div:nth-child(3)::after {
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
  }

`

const startPostion = { x: (window.innerWidth / 2), y: (window.innerHeight / 2) }
const fast = { tension: 1200, friction: 40 }
const slow = { mass: 1, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Trail(){
  function setColors(){
    const colorset = colors[(Math.floor(Math.random() * 8) + 0)]
    return { c1: colorset[0], c2: colorset[1] }
  }
  const [bg, setBg] = useState(setColors)
  const [trail, set] = useTrail(3, () => ({ xy: [startPostion.x, startPostion.y], config: i => (i === 0 ? fast : slow) }))

  return (
    <Container onClick={() => setBg(setColors())} onMouseMove={e => set({ xy: [e.clientX, e.clientY] })} >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="bubble">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="35"/>
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"/>
        </filter>
      </svg>
      <Bubbles c1={bg.c1} c2={bg.c2}>
        {trail.map(({ xy }, index) => (
          <animated.div key={xy[0 + index]} style={{ transform: xy.interpolate(trans) }}/>
        ))}
      </Bubbles>
    </Container>
  )
}
