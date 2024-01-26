import React from 'react'
import { render } from '@testing-library/react'

import { testItems } from '../test-fixtures'
import AccordionHeading, { AccordionHeadingProps } from './AccordionHeading'
import { HeadingLevel } from '../../../types/headingLevel'

const { headingLevel, id, title } = testItems[0]
const testHeading = {
  headingLevel,
  itemId: id,
  children: title,
} satisfies AccordionHeadingProps

describe('AccordionHeading component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<AccordionHeading {...testHeading} />)
    expect(
      queryByTestId(`accordionHeading_${testHeading.itemId}`)
    ).toBeInTheDocument()
  })

  describe('custom headingLevel for AccordionHeading', () => {
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
          <AccordionHeading {...customTestHeading} />
        )
        const headings = getAllByRole('heading', { level: expectedLevel })
        expect(headings.length).toEqual(1)
      }
    )
  })

  describe('with a custom className', () => {
    it('passes the class onto the root AccordionHeading element', () => {
      const { getByTestId } = render(
        <AccordionHeading {...testHeading} className="myCustomAccordion" />
      )
      expect(getByTestId(`accordionHeading_${testHeading.itemId}`)).toHaveClass(
        'myCustomAccordion'
      )
    })
  })
})
