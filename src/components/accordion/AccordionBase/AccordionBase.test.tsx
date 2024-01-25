import React from 'react'
import { render } from '@testing-library/react'

import AccordionBase from './AccordionBase'

describe('AccordionBase component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<AccordionBase />)
    expect(queryByTestId('accordion')).toBeInTheDocument()
  })

  describe('with a custom className', () => {
    it('passes the class onto the root element', () => {
      const { getByTestId } = render(
        <AccordionBase className="myCustomAccordion" />
      )
      expect(getByTestId('accordion')).toHaveClass('myCustomAccordion')
    })
  })
})
