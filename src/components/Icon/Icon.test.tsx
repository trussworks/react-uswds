import React from 'react'
import { render, screen } from '@testing-library/react'

import { Icon } from './Icons'

describe('Icon component', () => {
  it('renders without errors', () => {
    render(<Icon.AccessibilityNew />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('accepts a size prop', () => {
    render(<Icon.AccessibilityNew size={7} />)

    expect(screen.getByRole('img')).toHaveClass('usa-icon--size-7')
  })

  it('accepts a className', () => {
    render(<Icon.AccessibilityNew className="custom-class" />)

    expect(screen.getByRole('img')).toHaveClass('custom-class')
  })

  it('accepts an aria-label', () => {
    render(<Icon.AccessibilityNew aria-label="build icon component" />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      'build icon component'
    )
  })
})
