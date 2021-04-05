import React from 'react'
import { render } from '@testing-library/react'
import { SummaryBox } from './SummaryBox'

const exampleSummaryContent = (
  <div className="usa-summary-box__text">
    <ul className="usa-list">
      <li>
        If you are under a winter storm warning, &nbsp;
        <a className="usa-summary-box__link" href="#usa-anchor-find-shelter">
          find shelter
        </a>
        &nbsp; right away.
      </li>
      <li>
        Sign up for &nbsp;
        <a className="usa-summary-box__link" href="#usa-anchor-warning-system">
          your community’s warning system
        </a>
        .
      </li>
      <li>
        Learn the signs of, and basic treatments for, &nbsp;
        <a className="usa-summary-box__link" href="#usa-anchor-frostbite">
          frostbite
        </a>
        &nbsp; and &nbsp;
        <a className="usa-summary-box__link" href="#usa-anchor-hypothermia">
          hypothermia
        </a>
        .
      </li>
      <li>
        Gather emergency supplies for your &nbsp;
        <a className="usa-summary-box__link" href="#usa-anchor-home">
          home
        </a>
        &nbsp; and your &nbsp;
        <a className="usa-summary-box__link" href="#usa-anchor-car">
          car
        </a>
        .
      </li>
    </ul>
  </div>
)

describe('SummaryBox component', () => {
  it('renders without errors', () => {
    const { getByRole, getAllByRole } = render(
      <SummaryBox heading="Key information">{exampleSummaryContent}</SummaryBox>
    )

    expect(getByRole('heading')).toBeInTheDocument()
    expect(getAllByRole('link')).toHaveLength(6)
  })

  it('renders without errors when passed multiple props', () => {
    const { getByRole } = render(
      <SummaryBox
        role="complementary"
        className="custom-class-name"
        heading="Example heading">
        {exampleSummaryContent}
      </SummaryBox>
    )

    expect(getByRole('complementary')).toHaveClass(
      'usa-summary-box custom-class-name'
    )
  })
})
