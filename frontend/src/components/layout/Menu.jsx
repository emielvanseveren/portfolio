import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Hamburger from './Hamburger'
import ReactTooltip from 'react-tooltip'
import size from '../../constants/size'

import { toast } from 'react-toastify'
import copy from 'clipboard-copy'

// icons
import links from '../../util/data/menuLinks'

const Nav = styled(animated.nav)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: #ededed;
  overflow: hidden;
`
const Inner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const MenuIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
  transition: background-color .3s ease-in-out;
  &:hover{
    background-color: #cecece;
  }
  img{
    width: 20px;
    height: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    filter: grayscale(100%);
    transition: width 0.1s ease-in-out;

    &:hover{
      width: 22px;
    }
  }
`

const StyledReactTooltip = styled(ReactTooltip)`
  &.type-dark.place-right{
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }
`
export default function Menu({ inRange }){

  const [open, toggle] = useState(false)
  const openConfig = { mass: 1, tensions: 250, friction: 10 }
  const closeConfig = { mass: 1, transion: 170, friction: 26 }
  const props = useSpring({ width: open ? 75 : 0, config: open ? openConfig : closeConfig })

  function copyMail(){
    copy('emielvanseveren@outlook.com')
    toast('E-mailaddress has been copied!')
  }

  return (
    <Fragment>
      <div onClick={() => toggle(!open)}>
        <Hamburger inRange={inRange}/>
      </div>
      <Nav style={props}>
        <Inner>
          {
            links.map(({ link = '', src, desc, copy = false }) => 
              {
                if( copy === false ){
                  return (
                  <Fragment key={link}>
                    <MenuIcon data-tip={desc} href={link} target="_blank">
                    <img src={src}/>
                    </MenuIcon>
                    <StyledReactTooltip effect="solid" place="left" type="dark"/>
                  </Fragment>
                  )
                } else {
                  return (
                    <Fragment key={link}>
                      <MenuIcon data-tip={desc} onClick={copyMail}>
                       <img src={src}/>
                      </MenuIcon>
                      <StyledReactTooltip effect="solid" place="left" type="dark"/>
                    </Fragment>
                 )
                }
              }
           )
          }
        </Inner>
      </Nav>
    </Fragment>
  )
}

Menu.propTypes = {
  inRange: PropTypes.bool.isRequired
}
