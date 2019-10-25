import React from 'react'
import Blob from './Blob'

// should add theme provider as this is created in a parent component
describe('<Title/>', () => {
  it('Snapshot', () => {
    expect(mountWithRouterAndTheme(
      <Blob/>
    )).toMatchSnapshot()
  })
})
