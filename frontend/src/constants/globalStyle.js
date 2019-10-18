import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

/* jaapok */
import enhance from '../fonts/enhance.woff'
import subtract from '../fonts/subtract.woff'

const Style = createGlobalStyle`
  *::selection{
    background-color: black;
    color: white;
  }
  @font-face {
    font-family: 'enhance';
    src: url('${enhance}') format('woff');
  }
  @font-face {
    font-family: 'subtract';
    src: url('${subtract}') format('woff');
  }

  body{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    transition: 0.4s background-color;
    background-color: ${({ theme }) => theme.background};
  }

  h1,h2,h3,h4,h5,h6,p,a,button,label,input,div,textarea{
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    transition: 0.4s color;
    color: ${({ theme }) => theme.text};
  }
  h2,h3,h4,h5,h6,p,button,label,input,div,textarea{
    font-family: 'Poppins', sans-serif;
  }

  h1{
    font-family: 'subtract', sans-serif;
    span{
      font-family: 'jaapoksubtract', sans-serif;
    }
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }
  p{
    font-size: 1rem;
  }
  input{
     display: block;
  }
  button, button:active, button:focus button::-moz-focus-inner, a,
  input[type="reset"]::-moz-focus-inner,
  input[type="button"]::-moz-focus-inner,
  input[type="submit"]::-moz-focus-inner {
  border: none;
  outline: none;
  border-style: none;
  }
`

export function CosmosGlobalStyle({ children }){
  return (
    <Fragment>
      <Style/>
      { children }
    </Fragment>
  )
}
CosmosGlobalStyle.propTypes = {
  children: PropTypes.node
}

export default Style
