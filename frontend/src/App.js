import React from 'react'
import { Helmet } from 'react-helmet'
import Routing from './components/Routing'
import { ThemeProvider } from './hooks/themeContext'
import Style from './constants/globalStyle'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App(){
  const toastConfig = {
      autoClose:       5000,
      position:        'bottom-left',
      pauseOnHover:    true,
      hideProgressBar: true,
      draggable:       false
    }

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
      <ToastContainer {...toastConfig }/>
      <Style/>
      <Routing/>
    </ThemeProvider>
  )
}
