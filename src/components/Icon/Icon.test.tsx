import React from 'react'
import { render } from '@testing-library/react'

import { Icon } from './Icon'

describe('Icon component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Icon name="icon-dot-gov" size={8} />)
    expect(queryByTestId('iconComponent')).toBeInTheDocument()
  })
})
