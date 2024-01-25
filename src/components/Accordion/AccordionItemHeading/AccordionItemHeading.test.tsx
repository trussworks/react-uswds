import React from 'react'
import { render } from '@testing-library/react'

import { testItems } from '../test-fixtures'
import AccordionItemHeading, {
  AccordionItemHeadingProps,
} from './AccordionItemHeading'
import { HeadingLevel } from '../../../types/headingLevel'

const { expanded, headingLevel, id, title } = testItems[0]
const testHeading = {
  expanded,
  headingLevel,
  itemId: id,
  title,
} satisfies AccordionItemHeadingProps

describe('AccordionItemHeading component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<AccordionItemHeading {...testHeading} />)
    expect(
      queryByTestId(`accordionItemHeading_${testHeading.itemId}`)
    ).toBeInTheDocument()
  })

  describe('custom headingLevel for AccordionItemHeading', () => {
    const scenarios: [HeadingLevel, number][] = [
      ['h1', 1],
      ['h2', 2],
      ['h3', 3],
      ['h4', 4],
      ['h5', 5],
      ['h6', 6],
    ]
    it.each(scenarios)(
      'can render with headingLevel %s',
      (headingLevel, expectedLevel) => {
        const customTestHeading = { ...testHeading, headingLevel }

        const { getAllByRole } = render(
          <AccordionItemHeading {...customTestHeading} />
        )
        const headings = getAllByRole('heading', { level: expectedLevel })
        expect(headings.length).toEqual(1)
      }
    )
  })

  describe('with a custom className', () => {
    it('passes the class onto the root AccordionItemHeading element', () => {
      const { getByTestId } = render(
        <AccordionItemHeading {...testHeading} className="myCustomAccordion" />
      )
      expect(
        getByTestId(`accordionItemHeading_${testHeading.itemId}`)
      ).toHaveClass('myCustomAccordion')
    })
  })
})
