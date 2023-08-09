import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InPageNavigation } from './InPageNavigation'
import { CONTENT } from './content'

describe('InPageNavigation component', () => {
  const setup = () => {
    const utils = render(<InPageNavigation content={CONTENT} />)
    const nav = screen.getByTestId('InPageNavigation')
    const user = userEvent.setup()
    return {
      nav,
      user,
      ...utils,
    }
  }

  it('renders without errors', () => {
    const { nav } = setup()
    expect(nav).toBeInTheDocument()
  })
})
