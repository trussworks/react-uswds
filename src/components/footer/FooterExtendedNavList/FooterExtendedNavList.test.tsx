/*  eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

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
  function setup(
    props: Omit<
      React.ComponentPropsWithoutRef<typeof FooterExtendedNavList>,
      'nestedLinks'
    > = {}
  ) {
    return render(
      <>
        <style>{'.hidden { display: none; }'}</style>
        <FooterExtendedNavList nestedLinks={links} {...props} />
      </>
    )
  }
  it('renders without errors', () => {
    const { container } = setup()
    expect(container.querySelector('ul')).toBeInTheDocument()
  })

  it('renders headings', () => {
    const { container, getByText } = setup()
    expect(container.querySelectorAll('h4')).toHaveLength(2)
    expect(getByText('Types of Cats')).toBeInTheDocument()
    expect(getByText('Musical Gifts')).toBeInTheDocument()
  })

  it('renders links', () => {
    const { container, getAllByText } = setup()
    expect(container.querySelectorAll('a')).toHaveLength(5)
    expect(getAllByText('Purple Rain')).toHaveLength(3)
    expect(getAllByText('Cheetah')).toHaveLength(2)
  })

  it('does not toggle section visiblity onClick in desktop view', async () => {
    const { getAllByText, getByText } = setup()

    await userEvent.click(getByText('Types of Cats'))
    expect(getAllByText('Purple Rain')).toHaveLength(3)
    expect(getAllByText('Cheetah')).toHaveLength(2)
  })

  describe('isMobile prop', () => {
    it('renders mobile styles on all sections on initial load', () => {
      const { container } = setup({ isMobile: true })

      const sections = container.querySelectorAll('section')
      const elementsWithHiddenClass = container.querySelectorAll('.hidden')
      expect(sections.length).toEqual(elementsWithHiddenClass.length)
    })

    it('renders headings', () => {
      const { container, getByText } = setup({ isMobile: true })

      expect(container.querySelectorAll('h4')).toHaveLength(2)
      expect(getByText('Types of Cats')).toBeInTheDocument()
      expect(getByText('Musical Gifts')).toBeInTheDocument()
    })

    it('hides secondary links on initial load', () => {
      const { getAllByText } = setup({ isMobile: true })

      getAllByText('Cheetah').forEach((e) => expect(e).not.toBeVisible())
      getAllByText('Purple Rain').forEach((e) => expect(e).not.toBeVisible())
    })

    it('toggles section visibility onClick', async () => {
      const { getByText, getAllByText } = setup({ isMobile: true })

      await userEvent.click(getByText('Types of Cats'))

      getAllByText('Cheetah').forEach((e) => expect(e).toBeVisible())
      getAllByText('Purple Rain').forEach((e) => expect(e).not.toBeVisible())
    })

    it('toggles one section expanded at a time onClick', async () => {
      const { getAllByText, getByText } = setup({ isMobile: true })

      await userEvent.click(getByText('Types of Cats'))
      await userEvent.click(getByText('Musical Gifts'))

      getAllByText('Purple Rain').forEach((e) => expect(e).toBeVisible())
      getAllByText('Cheetah').forEach((e) => expect(e).not.toBeVisible())
    })

    it('does not render mobile styles when isMobile is undefined in desktop view', () => {
      // JSDOM window.innerWidth default is 1024
      const { container } = setup()

      const elementsWithHiddenClass = container.querySelectorAll('.hidden')
      expect(elementsWithHiddenClass.length).toEqual(0)
    })

    describe('when client window width is less than mobile threshold', () => {
      beforeEach(() => {
        // Mobile width is less than 480
        vi.stubGlobal('innerWidth', 479)
      })

      afterEach(() => {
        // Return to JSDOM default
        vi.unstubAllGlobals()
      })

      it('renders mobile styles if isMobile is undefined', () => {
        const { container } = setup()

        const sections = container.querySelectorAll('section')
        const elementsWithHiddenClass = container.querySelectorAll('.hidden')
        expect(sections.length).toEqual(elementsWithHiddenClass.length)
      })

      it('does not render mobile styles when isMobile is false', () => {
        const { container } = setup({ isMobile: false })

        const elementsWithHiddenClass = container.querySelectorAll('.hidden')
        expect(elementsWithHiddenClass.length).toEqual(0)
      })
    })
  })
})
