import React from 'react'
import { render } from '@testing-library/react'

jest.mock('../../../deprecation')
import { deprecationWarning } from '../../../deprecation'
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

  describe('renders with size prop', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it.each([
      ['big', 'slim', '.mobile-lg\\:grid-col-6'],
      ['medium', 'slim', '.mobile-lg\\:grid-col-6'],
      ['slim', 'big', '.grid-gap-2'],
    ])(
      'prefers size to deprecated %s',
      (sizeString, deprecatedKey, expectedClass) => {
        const size = sizeString as 'big' | 'medium' | 'slim'
        const deprecatedProps: { [key: string]: boolean } = {}
        deprecatedProps[`${deprecatedKey}`] = true
        const { container } = render(
          <Logo image={logoImage} size={size} {...deprecatedProps} />
        )
        expect(container.querySelector(expectedClass)).toBeInTheDocument()
        expect(deprecationWarning).toHaveBeenCalledTimes(1)
      }
    )
  })
})
