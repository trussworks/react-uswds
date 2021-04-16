import React from 'react'

import { ProcessList } from './ProcessList'
import { ProcessListItem } from '../ProcessListItem/ProcessListItem'
import { ProcessListItemHeader } from '../ProcessListItemHeader/ProcessListItemHeader'

export default {
  title: 'Components/ProcessList',
  component: ProcessList,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 ProcessList component

Source: https://designsystem.digital.gov/components/process-list
`,
      },
    },
  },
}

export const processListDefault = (): React.ReactElement => (
  <ProcessList>
    <ProcessListItem>
      <ProcessListItemHeader>Start a process</ProcessListItemHeader>
      <p className="margin-top-05">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque.
      </p>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
          commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
          pulvinar odio lorem non turpis.
        </li>
        <li>
          Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
          condimentum.
        </li>
        <li>Aliquam erat volutpat. Sed quis velit.</li>
      </ul>
    </ProcessListItem>
    <ProcessListItem>
      <h4 className="usa-process-list__heading">Proceed to the second step</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
        lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae
        ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
        Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
      </p>
    </ProcessListItem>
    <ProcessListItem>
      <h4 className="usa-process-list__heading">
        Complete the step-by-step process
      </h4>
      <p>
        Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
        condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi.
        Nulla libero. Vivamus pharetra posuere sapien.
      </p>
    </ProcessListItem>
  </ProcessList>
)

export const processListNoTextCustomSizing = (): React.ReactElement => (
  <ProcessList>
    <ProcessListItem className="padding-bottom-4">
      {/* <p className="usa-process-list__heading font-sans-xl line-height-sans-1">
        Start a process.
      </p> */}
      <ProcessListItemHeader className="font-sans-xl line-height-sans-1">
        Start a process
      </ProcessListItemHeader>
    </ProcessListItem>
    <ProcessListItem className="padding-bottom-4">
      <p className="usa-process-list__heading font-sans-xl line-height-sans-1">
        Proceed to the second step.
      </p>
    </ProcessListItem>
    <ProcessListItem>
      <p className="usa-process-list__heading font-sans-xl line-height-sans-1">
        Complete the step-by-step process.
      </p>
    </ProcessListItem>
  </ProcessList>
)

export const processListCustomSizing = (): React.ReactElement => (
  <ProcessList>
    <ProcessListItem className="padding-bottom-4">
      <h4 className="usa-process-list__heading font-sans-xl line-height-sans-1">
        Start a process.
      </h4>
      <p className="font-sans-lg margin-top-1 text-light">
        Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
        condimentum.
      </p>
    </ProcessListItem>
    <ProcessListItem className="padding-bottom-4">
      <h4 className="usa-process-list__heading font-sans-xl line-height-sans-1">
        Proceed to the second step.
      </h4>
      <p className="font-sans-lg margin-top-1 text-light">
        Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat
        volutpat.
      </p>
    </ProcessListItem>
    <ProcessListItem>
      <h4 className="usa-process-list__heading font-sans-xl line-height-sans-1">
        Complete the step-by-step process.
      </h4>
      <p className="font-sans-lg margin-top-1 text-light">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque.
      </p>
    </ProcessListItem>
  </ProcessList>
)
