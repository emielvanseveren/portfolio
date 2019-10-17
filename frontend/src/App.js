import React from 'react'
import { Helmet } from 'react-helmet'
import Routing from './components/Routing'
import { ThemeProvider } from './hooks/themeContext'
import Style from './constants/globalStyle'

export default function App(){
  return (
    <ThemeProvider>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Portfolio</title>
        <link href="https://emielvanseveren.be"rel="canonical"/>
        <meta content="Personal porfoliop - Emiel Van Severen" name="description"/>
        <meta content="Emiel Van Severen, Emiel, Van Severen, portfolio" name="keywords"/>
        <meta content="true" name="HandHeldFriendly"/>
        <meta content="#f1cbff" name="theme-color"/>
      </Helmet>
      <Style/>
      <Routing/>
    </ThemeProvider>
  )
}
