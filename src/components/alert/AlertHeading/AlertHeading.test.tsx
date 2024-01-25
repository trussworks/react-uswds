import React from 'react'
import { render } from '@testing-library/react'

import AlertHeading from './AlertHeading'
import { HeadingLevel } from '../../../types/headingLevel'

describe('Alert component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { getByTestId } = render(<AlertHeading headingLevel="h4" />)
    expect(getByTestId('alertHeading')).toBeInTheDocument()
  })

  it('accepts className prop', () => {
    const { getByTestId } = render(
      <AlertHeading headingLevel="h4" className="myClass" />
    )
    expect(getByTestId('alertHeading')).toHaveClass('myClass')
  })

  describe('with custom heading levels', () => {
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
        const { getByRole } = render(
          <AlertHeading
            headingLevel={headingLevel}
          >Working Alert</AlertHeading>
        )
        expect(
          getByRole('heading', { level: expectedLevel })
        ).toBeInTheDocument()
      }
    )
  })
})
