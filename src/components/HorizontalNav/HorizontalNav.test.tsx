import React from 'react'
import { render } from '@testing-library/react'

import { HorizontalNav } from './HorizontalNav'

const testItems = [
  <a href="#one" className="usa-current" key="one">
    Current page
  </a>,
  <a href="#two" key="two">
    Link one
  </a>,
  <a href="#three" key="three">
    Link two
  </a>,
]

describe('HorizontalNav component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<HorizontalNav items={testItems} />)
    expect(queryByTestId('horizontalnav')).toBeInTheDocument()
  })

  it('renders each item', () => {
    const { queryByText } = render(<HorizontalNav items={testItems} />)
    expect(queryByText('Current page')).toBeInTheDocument()
    expect(queryByText('Link one')).toBeInTheDocument()
    expect(queryByText('Link two')).toBeInTheDocument()
  })

  describe('with a subnav', () => {
    /* TODO */
  })
})
