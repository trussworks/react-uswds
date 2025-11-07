import React from 'react'
import { screen, render, getByRole } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { InPageNavigation } from './InPageNavigation'
import { HeadingLevel } from '../../types/headingLevel'
import { CONTENT } from './content'
import styles from './InPageNavigation.module.scss'

describe('InPageNavigation component', () => {
  const props = {
    content: CONTENT,
    headingLevel: 'h1' as HeadingLevel,
    title: 'What do we have <i>here</i>?',
  }

  const setup = (plain?: boolean) => {
    const utils = plain
      ? render(<InPageNavigation content={props.content} />)
      : render(
          <InPageNavigation
            content={props.content}
            headingLevel={props.headingLevel}
            title={props.title}
          />
        )
    const nav = screen.getByTestId('InPageNavigation')
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
    const { nav } = setup(true)
    expect(nav).toBeInTheDocument()
    const heading = getByRole(nav, 'heading', {
      level: 4,
      name: 'On this page',
    })
    expect(heading).toBeInTheDocument()
    expect(document.querySelector('html')).toHaveClass(styles['smooth-scroll'])
  })

  it('sets the heading and title', () => {
    const { nav } = setup()
    const heading = getByRole(nav, 'heading', {
      level: Number(props.headingLevel.slice(-1)),
      name: props.title,
    })
    expect(heading).toBeInTheDocument()
  })
})
