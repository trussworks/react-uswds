import React from 'react'
import { render } from '@testing-library/react'

import { Logo } from './Logo'

const heading = <h3 className="usa-footer__logo-heading">Swoosh Branding</h3>
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
})
