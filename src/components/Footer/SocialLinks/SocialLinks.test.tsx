/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'

import { SocialLinks } from './SocialLinks'

const links = [
  <a key="fb" href="#">
    <span>Facebooked</span>
  </a>,
  <a key="ig" href="#">
    <span>Finstagram</span>
  </a>,
]

describe('SocialLinks component', () => {
  it('renders without errors', () => {
    const { container } = render(<SocialLinks links={links} />)
    expect(
      container.querySelector('.usa-footer__social-links')
    ).toBeInTheDocument()
  })

  it('renders custom styles', () => {
    const { container } = render(
      <SocialLinks className="custom-class" links={links} />
    )
    expect(container.querySelector('.usa-footer__social-links')).toHaveClass(
      'custom-class'
    )
  })

  it('renders social links', () => {
    const { getByText } = render(<SocialLinks links={links} />)
    expect(getByText('Facebooked')).toBeInTheDocument()
    expect(getByText('Finstagram')).toBeInTheDocument()
  })
})
