/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */

import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'

import { FooterExtendedNavList } from './FooterExtendedNavList'

const links = [
  [
    'Types of Cats',
    ...Array(2).fill(
      <a className="usa-footer__secondary-link" href="#">
        Cheetah
      </a>
    ),
  ],
  [
    'Musical Gifts',
    ...Array(3).fill(
      <a className="usa-footer__secondary-link" href="#">
        Purple Rain
      </a>
    ),
  ],
]

describe('FooterExtendedNavList component', () => {
  it('renders without errors', () => {
    const { container } = render(<FooterExtendedNavList nestedLinks={links} />)
    expect(container.querySelector('ul')).toBeInTheDocument()
  })

  it('renders headings', () => {
    const { container, getByText } = render(
      <FooterExtendedNavList nestedLinks={links} />
    )
    expect(container.querySelectorAll('h4')).toHaveLength(2)
    expect(getByText('Types of Cats')).toBeInTheDocument()
    expect(getByText('Musical Gifts')).toBeInTheDocument()
  })

  it('renders links', () => {
    const { container, getAllByText } = render(
      <FooterExtendedNavList nestedLinks={links} />
    )
    expect(container.querySelectorAll('a')).toHaveLength(5)
    expect(getAllByText('Purple Rain')).toHaveLength(3)
    expect(getAllByText('Cheetah')).toHaveLength(2)
  })

  describe('isMobile', () => {
    it.todo(
      'renders mobile view when client window width is less than threshold'
    )

    it('renders headings', () => {
      const { container, getByText } = render(
        <FooterExtendedNavList nestedLinks={links} />
      )
      expect(container.querySelectorAll('h4')).toHaveLength(2)
      expect(getByText('Types of Cats')).toBeInTheDocument()
      expect(getByText('Musical Gifts')).toBeInTheDocument()
    })

    it('renders link sections as collapsed on initial load', () => {
      const { getAllByText } = render(
        <FooterExtendedNavList nestedLinks={links} />
      )
      expect(getAllByText('Cheetah')).not.toBeInTheDocument
      expect(getAllByText('Purple Rain')).not.toBeInTheDocument
    })

    it('toggles section visibility onClick', () => {
      const { getByText, getAllByText } = render(
        <FooterExtendedNavList nestedLinks={links} />
      )

      fireEvent.click(getByText('Types of Cats'))

      expect(getAllByText('Cheetah')).toHaveLength(2)
      expect(getAllByText('Purple Rain')).not.toBeInTheDocument
    })

    it('only toggles one section expanded at a time', () => {
      const { getAllByText, getByText } = render(
        <FooterExtendedNavList nestedLinks={links} />
      )

      fireEvent.click(getByText('Types of Cats'))
      fireEvent.click(getByText('Musical Gifts'))

      expect(getAllByText('Purple Rain')).toBeInTheDocument
      expect(getAllByText('Cheetah')).not.toBeInTheDocument
    })
  })
})
