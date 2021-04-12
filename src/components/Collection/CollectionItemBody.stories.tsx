import React from 'react'
import { CollectionItemBody } from './CollectionItemBody'

export default {
  title: 'Components/Collection/CollectionItemBody',
  component: CollectionItemBody,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.10.0 Collection component
        `,
      },
    },
  },
}

export const completeCollectionItemBody = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <CollectionItemBody
      heading="Gears of Government President’s Award winners"
      href="https://www.performance.gov/presidents-winners-press-release/"
      description="Today, the Administration announces the winners of the Gears of Government President’s Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people."
      authors={['Sondra Alnsworth', 'Constance Lu']}
      dateTime="2020-09-30T12:00:00+01:00"
      topics={[
        { type: 'new', label: 'NEW' },
        { type: 'default', label: 'PMA' },
        { type: 'default', label: 'OMB' },
      ]}
    />
  </div>
)

export const withoutTopics = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <CollectionItemBody
      heading="Gears of Government President’s Award winners"
      href="https://www.performance.gov/presidents-winners-press-release/"
      description="Today, the Administration announces the winners of the Gears of Government President’s Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people."
      authors={['Sondra Alnsworth', 'Constance Lu']}
      dateTime="2020-09-30T12:00:00+01:00"
    />
  </div>
)

export const withoutMoreInformation = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <CollectionItemBody
      heading="Gears of Government President’s Award winners"
      href="https://www.performance.gov/presidents-winners-press-release/"
      description="Today, the Administration announces the winners of the Gears of Government President’s Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people."
      topics={[
        { type: 'new', label: 'NEW' },
        { type: 'default', label: 'PMA' },
        { type: 'default', label: 'OMB' },
      ]}
    />
  </div>
)

export const withoutMoreInformationAndTopics = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <CollectionItemBody
      heading="Gears of Government President’s Award winners"
      href="https://www.performance.gov/presidents-winners-press-release/"
      description="Today, the Administration announces the winners of the Gears of Government President’s Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people."
    />
  </div>
)
