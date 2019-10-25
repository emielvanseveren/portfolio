import React from 'react'
import Trail from './Trail'

// should add theme provider as this is created in a parent component
describe('<Title/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      <Trail/>
    )).toMatchSnapshot()
  })
})
