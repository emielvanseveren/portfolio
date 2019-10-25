import React from 'react'
import Hamburger from './Hamburger'

// should add theme provider as this is created in a parent component
describe('<Hamburger/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      createComponent()
    )).toMatchSnapshot()
  })
})

function createComponent(props){
  const defaultprops = { inRange: false }
  return <Hamburger {...defaultprops} {...props}/>
}
