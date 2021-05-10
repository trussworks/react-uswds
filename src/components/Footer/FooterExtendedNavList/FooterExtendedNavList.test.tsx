/*  eslint-disable jsx-a11y/anchor-is-valid, react/jsx-key */

import React from 'react'
import { fireEvent, render } from '@testing-library/react'

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

  it('does not toggle section visiblity onClick in desktop view', () => {
    const { getAllByText, getByText } = render(
      <FooterExtendedNavList nestedLinks={links} />
    )

    fireEvent.click(getByText('Types of Cats'))
    expect(getAllByText('Purple Rain')).toHaveLength(3)
    expect(getAllByText('Cheetah')).toHaveLength(2)
  })

  describe('isMobile prop', () => {
    it('renders mobile styles on all sections on initial load', () => {
      const { container } = render(
        <FooterExtendedNavList isMobile nestedLinks={links} />
      )

      const sections = container.querySelectorAll('section')
      const elementsWithHiddenClass = container.querySelectorAll('.hidden')
      expect(sections.length).toEqual(elementsWithHiddenClass.length)
    })

    it('renders headings', () => {
      const { container, getByText } = render(
        <FooterExtendedNavList isMobile nestedLinks={links} />
      )
      expect(container.querySelectorAll('h4')).toHaveLength(2)
      expect(getByText('Types of Cats')).toBeInTheDocument()
      expect(getByText('Musical Gifts')).toBeInTheDocument()
    })

    it('hides secondary links on initial load', () => {
      const { getAllByText } = render(
        <FooterExtendedNavList isMobile nestedLinks={links} />
      )
      expect(getAllByText('Cheetah')).not.toBeInTheDocument
      expect(getAllByText('Purple Rain')).not.toBeInTheDocument
    })

    it('toggles section visibility onClick', () => {
      const { getByText, getAllByText } = render(
        <FooterExtendedNavList isMobile nestedLinks={links} />
      )

      fireEvent.click(getByText('Types of Cats'))

      expect(getAllByText('Cheetah')).toHaveLength(2)
      expect(getAllByText('Purple Rain')).not.toBeInTheDocument
    })

    it('toggles one section expanded at a time onClick', () => {
      const { getAllByText, getByText } = render(
        <FooterExtendedNavList isMobile nestedLinks={links} />
      )

      fireEvent.click(getByText('Types of Cats'))
      fireEvent.click(getByText('Musical Gifts'))

      expect(getAllByText('Purple Rain')).toBeInTheDocument
      expect(getAllByText('Cheetah')).not.toBeInTheDocument
    })

    it('does not render mobile styles when isMobile is undefined in desktop view', () => {
      // JSDOM window.innerWidth default is 1024
      const { container } = render(
        <FooterExtendedNavList nestedLinks={links} />
      )

      const elementsWithHiddenClass = container.querySelectorAll('.hidden')
      expect(elementsWithHiddenClass.length).toEqual(0)
    })

    describe('when client window width is less than mobile threshold', () => {
      beforeEach(() => {
        // Mobile width is less than 480
        //eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        window.innerWidth = 479
      })

      afterEach(() => {
        // Return to JSDOM default
        //eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        window.innerWidth = 1024
      })

      it('renders mobile styles if isMobile is undefined', () => {
        const { container } = render(
          <FooterExtendedNavList nestedLinks={links} />
        )

        const sections = container.querySelectorAll('section')
        const elementsWithHiddenClass = container.querySelectorAll('.hidden')
        expect(sections.length).toEqual(elementsWithHiddenClass.length)
      })

      it('does not render mobile styles when isMobile is false', () => {
        const { container } = render(
          <FooterExtendedNavList isMobile={false} nestedLinks={links} />
        )

        const elementsWithHiddenClass = container.querySelectorAll('.hidden')
        expect(elementsWithHiddenClass.length).toEqual(0)
      })
    })
  })
})
