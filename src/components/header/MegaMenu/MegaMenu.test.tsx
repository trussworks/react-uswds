import React from 'react'
import { render } from '@testing-library/react'

import { MegaMenu } from './MegaMenu'

const testItems = [
  [
    <a href="#linkOne" key="one">
      Simple link
    </a>,
    <a href="#linkTwo" key="two">
      Simple link
    </a>,
  ],
  [
    <a href="#linkThree" key="three">
      Simple link Two
    </a>,
    <a href="#linkFour" key="four">
      Simple link Two
    </a>,
  ],
]

describe('MegaMenu component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(<MegaMenu items={testItems} isOpen={true} />)

    expect(queryByText('Nav Label')).toBeInTheDocument()
  })
})
