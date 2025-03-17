/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { type JSX } from 'react'
import { SummaryBox } from './SummaryBox'
import { SummaryBoxHeading } from '../SummaryBoxHeading/SummaryBoxHeading'
import { SummaryBoxContent } from '../SummaryBoxContent/SummaryBoxContent'

export default {
  title: 'Components/Summary box',
  component: SummaryBox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 SummaryBox component

Source: https://designsystem.digital.gov/components/summary-box
`,
      },
    },
  },
}

const summaryBoxContent = (
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
      <a className="usa-summary-box__link" href="#usa-anchor-warning-system">
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
)

export const SummaryBoxDefault = (): JSX.Element => (
  <SummaryBox>
    <SummaryBoxHeading headingLevel="h3">Key Information</SummaryBoxHeading>
    <SummaryBoxContent>{summaryBoxContent}</SummaryBoxContent>
  </SummaryBox>
)
