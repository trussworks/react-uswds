import React from 'react'
import { render } from '@testing-library/react'

import { MegaMenu } from './MegaMenu'

const testItems = [
  [
    <a href="#linkOne" key="one">
      Simple link one
    </a>,
    <a href="#linkTwo" key="two">
      Simple link two
    </a>,
  ],
  [
    <a href="#linkThree" key="three">
      Simple link three
    </a>,
    <a href="#linkFour" key="four">
      Simple link four
    </a>,
  ],
]

describe('MegaMenu component', () => {
  it('renders without errors', () => {
    const { container } = render(<MegaMenu items={testItems} isOpen={true} />)

    expect(container.querySelector('.usa-megamenu')).toBeInTheDocument()
  })

  it('renders custom styles', () => {
    const { container } = render(
      <MegaMenu className="custom-class" items={testItems} isOpen={true} />
    )
    expect(container.querySelector('.usa-megamenu')).toHaveClass('custom-class')
  })

  it('renders all test items when open', () => {
    const { getByText } = render(<MegaMenu items={testItems} isOpen={true} />)
    expect(getByText('Simple link one')).toBeInTheDocument()
    expect(getByText('Simple link two')).toBeInTheDocument()
    expect(getByText('Simple link three')).toBeInTheDocument()
    expect(getByText('Simple link four')).toBeInTheDocument()
  })

  it('hides the submenu when the isOpen is false', () => {
    const { queryByTestId } = render(
      <MegaMenu items={testItems} isOpen={false} />
    )

    expect(queryByTestId('megamenu')).toHaveAttribute('hidden')
  })
})
