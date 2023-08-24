import React from 'react'
import { screen, render, getByTestId, getByRole } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InPageNavigation } from './InPageNavigation'
import { HeadingLevel } from '../../types/headingLevel'
import { CONTENT } from './content'
import { log } from 'console'

describe('InPageNavigation component', () => {
  const props = {
    content: CONTENT,
    headingLevel: 'h1' as HeadingLevel,
    rootMargin: '1px 2px 3px 4px',
    scrollOffset: '42px',
    threshold: 0.75,
    title: 'What do we have <i>here</i>?',
  }

  const setup = () => {
    const utils = render(
      <InPageNavigation
        content={props.content}
        headingLevel={props.headingLevel}
        rootMargin={props.rootMargin}
        scrollOffset={props.scrollOffset}
        threshold={props.threshold}
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
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('renders without errors', () => {
    render(<InPageNavigation content={props.content} />)

    const nav = screen.getByTestId('InPageNavigation')
    expect(nav).toBeInTheDocument()

    const heading = getByRole(nav, 'heading', {
      level: 4,
      name: 'On this page',
    })
    expect(heading).toBeInTheDocument()
    //TODO rootmargin
    //TODO scrolloffset
    //TODO threshold
  })

  it('sets the heading and title', () => {
    const { nav } = setup()
    const heading = getByRole(nav, 'heading', {
      level: Number(props.headingLevel.slice(-1)),
      name: props.title,
    })
    expect(heading).toBeInTheDocument()
  })

  it('sets the root margin', () => {
    const { nav } = setup()
  })

  it('sets the scroll offset', () => {
    const { nav } = setup()
  })

  it('sets the threshold', () => {
    const { nav } = setup()
  })
})
