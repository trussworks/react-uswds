import React from 'react'
import { render } from '@testing-library/react'
import { Logo } from './Logo'

const heading = <p className="usa-footer__logo-heading">Swoosh Branding</p>
const logoImage = (
  <img
    className="usa-footer__logo-img"
    src="src/components/Footer/Logo/logo-img.png"
    alt="Nike logo"
  />
)

describe('Logo component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Logo image={logoImage} />)
    expect(queryByTestId('footerLogo')).toBeInTheDocument()
  })

  it('renders logo image', () => {
    const { container } = render(<Logo image={logoImage} />)
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('renders heading when present', () => {
    const { getByText } = render(<Logo image={logoImage} heading={heading} />)
    expect(getByText('Swoosh Branding')).toBeInTheDocument()
  })

  it.each([
    ['big', '.mobile-lg\\:grid-col-6'],
    ['medium', '.mobile-lg\\:grid-col-6'],
    ['slim', '.grid-gap-2'],
  ])('renders with size prop %s', (sizeString, expectedClass) => {
    const size = sizeString as 'big' | 'medium' | 'slim'
    const { container } = render(<Logo image={logoImage} size={size} />)
    expect(container.querySelector(expectedClass)).toBeInTheDocument()
  })
})
