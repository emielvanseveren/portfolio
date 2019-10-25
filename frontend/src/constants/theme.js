// shared colors
const highlight = '#f1cbff'
const highlightLightTheme = '#f1cbff'
const white = '#ffffff'
const night = '#282c35'

const lightTheme = {
  highlight:  highlightLightTheme,
  title:      highlightLightTheme,
  text:       night,
  blob:       white
}
const darkTheme = {
  highlight:  highlight,
  title:      white,
  text:       white,
  blob:       night
}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme)
export default theme
