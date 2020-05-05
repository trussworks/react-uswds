/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'

import { FooterNav } from './FooterNav'

const links = Array(4).fill(
  <a className="usa-footer__primary-link" href="#">
    Primary Link
  </a>
)
describe('FooterNav component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(<FooterNav links={links} />)
    expect(getByRole('navigation')).toBeInTheDocument()
  })

  it('renders links', () => {
    const { container, getAllByText } = render(<FooterNav links={links} />)
    expect(container.querySelectorAll('a').length).toBe(4)
    expect(getAllByText('Primary Link').length).toBe(4)
  })
})
