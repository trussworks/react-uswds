import React from 'react'
import { render } from '@testing-library/react'

import { CardBody } from './CardBody'

describe('CardBody component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<CardBody />)
    expect(queryByTestId('CardBody')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<CardBody>Body Content</CardBody>)
    expect(queryByText('Body Content')).toBeInTheDocument()
  })

  it('renders optional header props', () => {
    const { queryByTestId } = render(<CardBody className="testClass" />)
    expect(queryByTestId('CardBody')).toHaveClass('testClass')
  })

  it('renders proper class when exdent is true', () => {
    const { queryByTestId } = render(<CardBody exdent>Content</CardBody>)
    expect(queryByTestId('CardBody')).toHaveClass('usa-card__body--exdent')
  })
})
