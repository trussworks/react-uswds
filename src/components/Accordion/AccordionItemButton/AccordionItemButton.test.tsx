import React from 'react'
import { render } from '@testing-library/react'

import { testItems } from '../test-fixtures'
import AccordionItemButton, {
  AccordionItemButtonProps,
} from './AccordionItemButton'

const { content, id, expanded } = testItems[0]
const testButton = {
  children: content,
  itemId: id,
  expanded,
} satisfies AccordionItemButtonProps

describe('AccordionItemButton component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<AccordionItemButton {...testButton} />)
    expect(
      queryByTestId(`accordionItemButton_${testButton.itemId}`)
    ).toBeInTheDocument()
  })

  describe('with a custom className', () => {
    it('passes the class onto the root AccordionItemContent element', () => {
      const { getByTestId } = render(
        <AccordionItemButton {...testButton} className="myCustomAccordion" />
      )
      expect(
        getByTestId(`accordionItemButton_${testButton.itemId}`)
      ).toHaveClass('myCustomAccordion')
    })
  })
})
