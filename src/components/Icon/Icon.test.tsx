import { render, screen } from '@testing-library/react'

import { Icon } from './Icons'

describe('Icon component', () => {
  it('renders without errors', () => {
    render(<Icon.AccessibilityNew />)

    const icon = screen.getByRole('img')

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('focusable', 'false')
  })

  it('accepts a size prop', () => {
    render(<Icon.AccessibilityNew size={7} />)

    expect(screen.getByRole('img')).toHaveClass('usa-icon--size-7')
  })

  it('accepts a role prop', () => {
    render(<Icon.AccessibilityNew role="slider" />)

    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  it('accepts a focusable prop', () => {
    render(<Icon.AccessibilityNew focusable />)

    expect(screen.getByRole('img')).toHaveAttribute('focusable', 'true')
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
