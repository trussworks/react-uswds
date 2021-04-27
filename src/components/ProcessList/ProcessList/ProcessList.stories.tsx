import React from 'react'

import { ProcessList } from './ProcessList'
import { ProcessListItem } from '../ProcessListItem/ProcessListItem'
import { ProcessListHeading } from '../ProcessListHeading/ProcessListHeading'

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
      <ProcessListHeading type="h4">Start a process</ProcessListHeading>
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
      <ProcessListHeading type="h4">
        Proceed to the second step
      </ProcessListHeading>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
        lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae
        ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
        Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
      </p>
    </ProcessListItem>
    <ProcessListItem>
      <ProcessListHeading type="h4">
        Complete the step-by-step process
      </ProcessListHeading>
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
      <ProcessListHeading type="p" className="font-sans-xl line-height-sans-1">
        Start a process.
      </ProcessListHeading>
    </ProcessListItem>
    <ProcessListItem className="padding-bottom-4">
      <ProcessListHeading type="p" className="font-sans-xl line-height-sans-1">
        Proceed to the second step.
      </ProcessListHeading>
    </ProcessListItem>
    <ProcessListItem>
      <ProcessListHeading type="p" className="font-sans-xl line-height-sans-1">
        Complete the step-by-step process.
      </ProcessListHeading>
    </ProcessListItem>
  </ProcessList>
)

export const processListCustomSizing = (): React.ReactElement => (
  <ProcessList>
    <ProcessListItem className="padding-bottom-4">
      <ProcessListHeading type="h4" className="font-sans-xl line-height-sans-1">
        Start a process.
      </ProcessListHeading>
      <p className="font-sans-lg margin-top-1 text-light">
        Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
        condimentum.
      </p>
    </ProcessListItem>
    <ProcessListItem className="padding-bottom-4">
      <ProcessListHeading type="h4" className="font-sans-xl line-height-sans-1">
        Proceed to the second step.
      </ProcessListHeading>
      <p className="font-sans-lg margin-top-1 text-light">
        Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat
        volutpat.
      </p>
    </ProcessListItem>
    <ProcessListItem>
      <ProcessListHeading type="h4" className="font-sans-xl line-height-sans-1">
        Complete the step-by-step process.
      </ProcessListHeading>
      <p className="font-sans-lg margin-top-1 text-light">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque.
      </p>
    </ProcessListItem>
  </ProcessList>
)
