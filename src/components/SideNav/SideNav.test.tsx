import React from 'react'
import { render } from '@testing-library/react'

import { SideNav } from './SideNav'

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

const testSubItems = [
  <a href="#one" className="usa-current" key="one">
    Child link
  </a>,
  <a href="#two" key="two">
    Child link
  </a>,
  <a href="#three" key="three">
    Child link
  </a>,
]

const testItemsWithSubnav = [
  <a href="#two" key="two">
    Parent link
  </a>,
  <>
    <a href="#one" className="usa-current" key="one">
      Current page
    </a>
    <SideNav items={testSubItems} />
  </>,
  <a href="#three" key="three">
    Parent link
  </a>,
]

describe('SideNav component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<SideNav items={testItems} />)
    expect(queryByTestId('sidenav')).toBeInTheDocument()
  })

  it('renders each item', () => {
    const { queryByText } = render(<SideNav items={testItems} />)
    expect(queryByText('Current page')).toBeInTheDocument()
    expect(queryByText('Link one')).toBeInTheDocument()
    expect(queryByText('Link two')).toBeInTheDocument()
  })

  describe('with a subnav', () => {
    it('renders without errors', () => {
      const { queryAllByTestId } = render(
        <SideNav items={testItemsWithSubnav} />
      )
      expect(queryAllByTestId('sidenav')).toHaveLength(2)
    })

    it('renders each item', () => {
      const { queryAllByText } = render(<SideNav items={testItemsWithSubnav} />)
      expect(queryAllByText('Parent link')).toHaveLength(2)
      expect(queryAllByText('Current page')).toHaveLength(1)
      expect(queryAllByText('Child link')).toHaveLength(3)
    })
  })
})
