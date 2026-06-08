import React, { JSX } from 'react'
import { screen, render, getByRole, within } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { InPageNavigation } from './InPageNavigation'
import { HeadingLevel } from '../../types/headingLevel'
import { CONTENT, NESTED_CONTENT, SELECT_CONTENT } from './content'
import styles from './InPageNavigation.module.scss'

describe('InPageNavigation component', () => {
  const props = {
    headingLevel: 'h1' as HeadingLevel,
    title: 'What do we have <i>here</i>?',
  }

  const setup = ({
    plain,
    headingElements,
    headingLevel = props.headingLevel,
    content = CONTENT,
    title = props.title,
    contentSelector,
    minimumHeadingCount = 2,
  }: {
    plain?: boolean
    headingElements?: HeadingLevel[]
    headingLevel?: HeadingLevel
    content?: JSX.Element
    title?: string
    contentSelector?: string
    minimumHeadingCount?: number
  } = {}) => {
    const utils = plain
      ? render(<InPageNavigation content={content} />)
      : render(
          <InPageNavigation
            content={content}
            headingLevel={headingLevel}
            title={title}
            headingElements={headingElements}
            contentSelector={contentSelector}
            minimumHeadingCount={minimumHeadingCount}
          />
        )
    const nav = screen.queryByTestId('InPageNavigation')
    const user = userEvent.setup()
    return {
      nav,
      user,
      ...utils,
    }
  }

  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const IntersectionObserverMock = vi.fn(
      class {
        constructor(
          _callback: IntersectionObserverCallback,
          _options?: IntersectionObserverInit
        ) {}

        disconnect = vi.fn()
        observe = vi.fn()
        takeRecords = vi.fn()
        unobserve = vi.fn()
      }
    )

    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
  })

  it('renders without errors', () => {
    const { nav } = setup({ plain: true })
    expect(nav).toBeInTheDocument()
    const heading = getByRole(nav!, 'heading', {
      level: 4,
      name: 'On this page',
    })
    expect(heading).toBeInTheDocument()
    expect(document.querySelector('html')).toHaveClass(styles['smooth-scroll'])
  })

  it('sets the heading and title', () => {
    const { nav } = setup()
    expect(nav).toBeInTheDocument()
    const heading = getByRole(nav!, 'heading', {
      level: Number(props.headingLevel.slice(-1)),
      name: props.title,
    })
    expect(heading).toBeInTheDocument()
  })

  it('does not render if minimum number of headings is unmet', () => {
    const { nav } = setup({ headingElements: ['h1'] })
    expect(nav).not.toBeInTheDocument()
  })

  it('only finds headings in selected content', () => {
    const { nav } = setup({
      content: SELECT_CONTENT,
      contentSelector: '.main-content',
      minimumHeadingCount: 1,
    })
    expect(nav).toBeInTheDocument()

    const headings = within(nav!).getAllByRole('link')
    expect(headings).toHaveLength(1)
  })

  it('finds nested headings', () => {
    const { nav } = setup({ content: NESTED_CONTENT })
    expect(nav).toBeInTheDocument()

    const cardHeadings = within(nav!).getAllByRole('link', {
      name: 'Card heading',
    })
    expect(cardHeadings).toHaveLength(2)
  })

  describe('lists the right heading types if', () => {
    it('is undefined', () => {
      const { nav } = setup({ plain: true })
      expect(nav).toBeInTheDocument()
      const contentHeadingsTwo = screen.getAllByRole('heading', { level: 2 })
      const contentHeadingsThree = screen.getAllByRole('heading', { level: 3 })
      const contentHeadings = contentHeadingsTwo.concat(contentHeadingsThree)
      const headingLinks = within(nav!).getAllByRole('link')
      expect(contentHeadings.length).toBe(headingLinks.length)
    })

    it('is defined', () => {
      const { nav } = setup({ headingElements: ['h2'] })
      expect(nav).toBeInTheDocument()
      const contentHeadingsTwo = screen.getAllByRole('heading', { level: 2 })
      const headingLinks = within(nav!).getAllByRole('link')
      expect(contentHeadingsTwo.length).toBe(headingLinks.length)
    })
  })
})
