import React from 'react'
import { render, screen } from '@testing-library/react'

import { AccessibilityNew } from './Icon'

describe('Icon component', () => {
  it('renders without errors', () => {
    render(<AccessibilityNew />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('accepts a size prop', () => {
    render(<AccessibilityNew size={7} />)

    expect(screen.getByRole('img')).toHaveClass('usa-icon--size-7')
  })

  it('accepts a className', () => {
    render(<AccessibilityNew className="custom-class" />)

    expect(screen.getByRole('img')).toHaveClass('custom-class')
  })

  it('accepts an aria-label', () => {
    render(<AccessibilityNew aria-label="build icon component" />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      'build icon component'
    )
  })
})
