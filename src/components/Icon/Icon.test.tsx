import React from 'react'
import { render, screen } from '@testing-library/react'

import { IconAccessibilityNew } from './Icons'

describe('Icon component', () => {
  it('renders without errors', () => {
    render(<IconAccessibilityNew />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('accepts a size prop', () => {
    render(<IconAccessibilityNew size={7} />)

    expect(screen.getByRole('img')).toHaveClass('usa-icon--size-7')
  })

  it('accepts a className', () => {
    render(<IconAccessibilityNew className="custom-class" />)

    expect(screen.getByRole('img')).toHaveClass('custom-class')
  })

  it('accepts an aria-label', () => {
    render(<IconAccessibilityNew aria-label="build icon component" />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      'build icon component'
    )
  })
})
