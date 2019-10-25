import React from 'react'
import Menu from './Menu'

// should add theme provider as this is created in a parent component
describe('<Menu/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      createComponent()
    )).toMatchSnapshot()
  })
})

function createComponent(props){
  const defaultprops = { inRange: true }
  return <Menu {...defaultprops} {...props}/>
}
