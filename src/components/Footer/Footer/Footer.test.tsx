import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from './Footer'

const nav = (
  <nav>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </nav>
)

const address = (
  <address>
    A mythical address. More address information. You can def find us online.
  </address>
)

const returnToTop = (
  <div className="grid-container usa-footer__return-to-top">Return To Top</div>
)

describe('Footer component', () => {
  it('renders without errors', () => {
    const { container } = render(<Footer primary={nav} secondary={address} />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('renders primary content', () => {
    const { getByRole } = render(<Footer primary={nav} secondary={address} />)
    expect(getByRole('navigation')).toBeInTheDocument()
  })

  it('renders secondary content', () => {
    const { container } = render(<Footer primary={nav} secondary={address} />)
    expect(container.querySelector('address')).toBeInTheDocument()
  })

  it('renders return to top component', () => {
    const { getByText } = render(
      <Footer primary={nav} secondary={address} returnToTop={returnToTop} />
    )
    expect(getByText('Return To Top')).toBeInTheDocument()
  })

  describe('renders size classes', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })

    it.each([
      ['big', 'usa-footer--big'],
      ['medium', 'usa-footer--medium'],
      ['slim', 'usa-footer--slim'],
    ])('when size is %s should include class %s', (sizeString, uswdsClass) => {
      const size = sizeString as 'big' | 'medium' | 'slim'
      const { container } = render(
        <Footer
          primary={nav}
          secondary={address}
          returnToTop={returnToTop}
          size={size}
        />
      )
      expect(container.querySelector('footer')).toHaveClass(uswdsClass)
    })
  })
})
