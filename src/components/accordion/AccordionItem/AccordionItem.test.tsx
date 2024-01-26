import React, { useCallback, useState } from 'react'
import { render } from '@testing-library/react'

import AccordionItem from './AccordionItem'
import { testItems } from '../test-fixtures'
import userEvent from '@testing-library/user-event'

const testItem = testItems[0]

function TestParent() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleHandler = useCallback(() => setIsOpen((e) => !e), [])
  return (
    <AccordionItem {...testItem} isOpen={isOpen} handleToggle={toggleHandler} />
  )
}

describe('AccordionItem component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { getByTestId } = render(<AccordionItem {...testItem} />)
    expect(getByTestId(`accordionItem_${testItem.id}`)).toBeInTheDocument()
    expect(getByTestId(`accordionHeading_${testItem.id}`)).toBeInTheDocument()
    expect(getByTestId(`accordionButton_${testItem.id}`)).toBeInTheDocument()
  })

  it('not open by default', () => {
    const { getByTestId } = render(<AccordionItem {...testItem} />)

    expect(getByTestId(`accordionItem_${testItem.id}`)).not.toBeVisible()
  })

  describe('when you toggle a closed item', () => {
    it('it opens', async () => {
      const { getByTestId, getByText } = render(<TestParent />)

      expect(getByTestId(`accordionItem_${testItem.id}`)).not.toBeVisible()

      await userEvent.click(getByText(testItem.title as string))

      expect(getByTestId(`accordionItem_${testItem.id}`)).toBeVisible()
    })
  })

  describe('when you toggle an open item', () => {
    it('it closes', async () => {
      const { getByText, getByTestId } = render(<TestParent />)

      expect(getByTestId(`accordionItem_${testItem.id}`)).not.toBeVisible()

      await userEvent.click(getByText(testItems[0].title as string))

      expect(getByTestId(`accordionItem_${testItem.id}`)).toBeVisible()

      await userEvent.click(getByText(testItems[0].title as string))

      expect(getByTestId(`accordionItem_${testItem.id}`)).not.toBeVisible()
    })
  })

  describe('with a custom className', () => {
    it('passes the class onto the AccordionItemContent element', () => {
      const { getByTestId } = render(
        <AccordionItem {...testItem} className="myCustomAccordion" />
      )
      expect(getByTestId(`accordionItem_${testItem.id}`)).toHaveClass(
        'myCustomAccordion'
      )
    })
  })
})
