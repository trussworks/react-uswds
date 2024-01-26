import React from 'react'
import { render } from '@testing-library/react'

import { testItems } from '../test-fixtures'
import AccordionButton, { AccordionButtonProps } from './AccordionButton'

const { children, id, isOpen } = testItems[0]
const testButton = {
  children,
  itemId: id,
  isOpen,
} satisfies AccordionButtonProps

describe('AccordionButton component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<AccordionButton {...testButton} />)
    expect(
      queryByTestId(`accordionButton_${testButton.itemId}`)
    ).toBeInTheDocument()
  })

  describe('with a custom className', () => {
    it('passes the class onto the root element', () => {
      const { getByTestId } = render(
        <AccordionButton {...testButton} className="myCustomAccordion" />
      )
      expect(getByTestId(`accordionButton_${testButton.itemId}`)).toHaveClass(
        'myCustomAccordion'
      )
    })
  })
})
