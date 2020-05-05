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
    const { queryByText } = render(<MegaMenu items={testItems} isOpen={true} />)

    expect(queryByText('Simple link one')).toBeInTheDocument()
  })
})
