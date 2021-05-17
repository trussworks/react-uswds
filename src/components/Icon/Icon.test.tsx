import React from 'react'
import { render } from '@testing-library/react'

import { Icon } from './Icon'

describe('Icon component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Icon name="add" />)

    expect(queryByTestId('iconComponent')).toBeInTheDocument()
  })

  it('accepts a className', () => {
    const { queryByRole } = render(
      <Icon name="localLaundryService" className="custom-class" />
    )

    expect(queryByRole('img')).toHaveClass('custom-class')
  })

  it('accepts an aria-label', () => {
    const { queryByRole } = render(
      <Icon name="build" aria-label="build icon component" />
    )

    expect(queryByRole('img')).toHaveAttribute(
      'aria-label',
      'build icon component'
    )
  })
})
