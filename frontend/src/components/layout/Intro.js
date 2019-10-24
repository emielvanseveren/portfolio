import React from 'react'
import styled from 'styled-components'

// srcs


const Container = styled.div`
  height: 300px;
  padding: 100px 50px;
  background-color: #fafafa;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Inner = styled.div`
  width: 50%;
  margin: 0 auto;
  h2{
    margin-bottom: 15px;
  }
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin-left: 5px;
    margin-right: 5px;
    color: ${({theme}) => theme.text};
    text-decoration-style: underline;
    text-decoration-color: ${({theme}) => theme.text};
  }
`

const icons = [
  { link: 'https://blog.emielvanseveren.be/',  text: "blog"},
  { link: 'https://github.com/emielvanseveren/', text: "github" },
  { link: 'https://linkedin.com/in/emielvanseveren/', text: "linkedin"}
]

export default function Intro(){
  return (
    <Container>
      <Inner>
        <h2>Portfolio</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <IconContainer>
          {
            icons.map(({link, text}, index) => <a href={link}>{text}</a>)
          }
        </IconContainer>
      </Inner>
    </Container>
  )
}
