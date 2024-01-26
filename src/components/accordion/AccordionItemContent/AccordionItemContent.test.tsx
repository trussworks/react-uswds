import React from 'react'
import { render } from '@testing-library/react'

import { testItems } from '../test-fixtures'
import AccordionItemContent, {
  AccordionItemContentProps,
} from './AccordionItemContent'

const { children, id, isOpen } = testItems[0]
const testContent = {
  children,
  id,
  isOpen,
} satisfies AccordionItemContentProps

describe('AccordionItemContent component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { getByTestId } = render(<AccordionItemContent {...testContent} />)
    const ele = getByTestId(`accordionItem_${testContent.id}`)
    expect(ele).toBeInTheDocument()
    expect(ele).not.toBeVisible()
  })

  describe('with expanded on mount', () => {
    it('is unhidden by default', () => {
      const customTestContent = { ...testContent, isOpen: true }
      const { getByTestId } = render(
        <AccordionItemContent {...customTestContent} />
      )

      expect(getByTestId(`accordionItem_${testContent.id}`)).toBeVisible()
    })
  })

  describe('with a custom className', () => {
    it('passes the class onto the root AccordionItemContent element', () => {
      const { getByTestId } = render(
        <AccordionItemContent {...testContent} className="myCustomAccordion" />
      )
      expect(getByTestId(`accordionItem_${testContent.id}`)).toHaveClass(
        'myCustomAccordion'
      )
    })
  })
})
