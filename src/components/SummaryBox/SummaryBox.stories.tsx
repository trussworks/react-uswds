import React from 'react'
import { SummaryBox } from './SummaryBox'

export default {
  title: 'Components/SummaryBox',
  component: SummaryBox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 SummaryBox component

Source: https://designsystem.digital.gov/components/summary-box
`,
      },
    },
  },
}

export const summaryBoxDefault = (): React.ReactElement => (
  <SummaryBox heading="Key information">
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
          <a
            className="usa-summary-box__link"
            href="#usa-anchor-warning-system">
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
  </SummaryBox>
)
