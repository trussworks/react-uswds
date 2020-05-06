import React from 'react'
import { render } from '@testing-library/react'

import { PrimaryNav } from './PrimaryNav'

const testItems = [
  <a className="usa-current" href="#linkOne" key="one">
    <span>Simple link one</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link two</span>
  </a>,
]

describe('Title component', () => {
  it('renders without errors', () => {
    const { queryByRole } = render(<PrimaryNav items={testItems} />)
    expect(queryByRole('navigation')).toBeInTheDocument()
  })

  it('renders items', () => {
    const { getByText } = render(<PrimaryNav items={testItems} />)

    expect(getByText('Simple link one')).toBeInTheDocument()
    expect(getByText('Simple link two')).toBeInTheDocument()
  })

  it('renders nav button', () => {
    const { getByTestId } = render(<PrimaryNav items={testItems} />)
    expect(getByTestId('navButton')).toBeInTheDocument()
  })

  it('renders the is-visible class when mobileExpanded is true', () => {
    const { container } = render(
      <PrimaryNav items={testItems} mobileExpanded={true} />
    )
    expect(container.querySelector('.is-visible')).toBeInTheDocument()
  })

  it('renders childern', () => {
    const { getByText } = render(
      <PrimaryNav items={testItems}>
        <span>Test Text</span>
      </PrimaryNav>
    )

    expect(getByText('Test Text')).toBeInTheDocument()
  })
})
