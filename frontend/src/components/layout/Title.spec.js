import React from 'react'
import Title from './Title'

// should add theme provider as this is created in a parent component
describe('<Title/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      <Title/>
    )).toMatchSnapshot()
  })
})
