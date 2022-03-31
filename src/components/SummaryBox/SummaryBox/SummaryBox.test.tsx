/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'
import { SummaryBox } from './SummaryBox'
import { SummaryBoxHeading } from '../SummaryBoxHeading/SummaryBoxHeading'
import { SummaryBoxContent } from '../SummaryBoxContent/SummaryBoxContent'

const testSummaryBoxContent = (
  <>
    <SummaryBoxHeading headingLevel="h3">My heading</SummaryBoxHeading>
    <SummaryBoxContent>
      <ul className="usa-list">
        <li>
          If you are under a winter storm warning,&nbsp;
          <a className="usa-summary-box__link" href="#">
            find shelter
          </a>
          &nbsp;right away.
        </li>
        <li>
          Sign up for&nbsp;
          <a className="usa-summary-box__link" href="#">
            your community’s warning system
          </a>
          .
        </li>
        <li>
          Learn the signs of, and basic treatments for,&nbsp;
          <a className="usa-summary-box__link" href="#">
            frostbite
          </a>
          &nbsp;and&nbsp;
          <a className="usa-summary-box__link" href="#">
            hypothermia
          </a>
          .
        </li>
        <li>
          Gather emergency supplies for your&nbsp;
          <a className="usa-summary-box__link" href="#">
            home
          </a>
          &nbsp;and your&nbsp;
          <a className="usa-summary-box__link" href="#">
            car
          </a>
          .
        </li>
      </ul>
    </SummaryBoxContent>
  </>
)

const customProps = {
  role: 'complementary',
  className: 'custom-class-name',
}

describe('SummaryBox component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <SummaryBox>{testSummaryBoxContent}</SummaryBox>
    )

    expect(getByTestId('summary-box')).toBeInTheDocument()
  })

  it('renders passed in children', () => {
    const { getAllByRole, getByRole } = render(
      <SummaryBox>{testSummaryBoxContent}</SummaryBox>
    )

    expect(getByRole('heading')).toBeInTheDocument()
    expect(getAllByRole('listitem')).toHaveLength(4)
    expect(getAllByRole('link')).toHaveLength(6)
  })

  it('renders attributes passed in through props', () => {
    const { queryByTestId } = render(
      <SummaryBox {...customProps}>{testSummaryBoxContent}</SummaryBox>
    )

    const qByTestId = queryByTestId('summary-box')
    expect(qByTestId).toHaveAttribute('role', 'complementary')
    expect(qByTestId).toHaveClass('usa-summary-box custom-class-name')
  })
})
