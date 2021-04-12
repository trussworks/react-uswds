import React from 'react'
import { Collection } from './Collection'
import { CollectionItem } from './CollectionItem'
import { ThumbnailCollectionItem } from './ThumbnailCollectionItem'
import { CalendarCollectionItem } from './CalendarCollectionItem'

export default {
  title: 'Components/Collection/Collection',
  component: Collection,
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

export const collectionList = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <Collection>
      <CollectionItem
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
      <CollectionItem
        heading="Women-owned small business dashboard"
        href="https://www.performance.gov/sba-wosb-dashboard/"
        description="In honor of National Women’s Small Business Month, we’ve partnered with SBA’s Office of Government Contracting and Business Development and Office of Program Performance, Analysis, and Evaluation to highlight the Women-Owned Small Businesses (WOSBs) data dashboard!"
        authors={['Constance Lu']}
        dateTime="2020-09-30T12:00:00+01:00"
        topics={[{ type: 'default', label: 'SBA' }]}
      />
      <CollectionItem
        heading="September 2020 updates show progress on cross-agency and agency priority goals"
        href="https://www.performance.gov/September-2020-Updates-Show-Progress/"
        description="Today, we published progress updates for both Cross-Agency Priority (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of FY2020. These updates highlight recent milestones and accomplishments as well as related initiatives that support progress towards a more modern and effective government."
        authors={['Eric L. Miller']}
        dateTime="2020-09-17T12:00:00+01:00"
        topics={[
          { type: 'default', label: 'Quarterly Update' },
          { type: 'default', label: 'Cap Goal' },
          { type: 'default', label: 'APG' },
          { type: 'default', label: 'PMA' },
          { type: 'default', label: 'Success Story' },
        ]}
      />
    </Collection>
  </div>
)

export const condensedCollectionList = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <Collection condensed>
      <CollectionItem
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
      <CollectionItem
        heading="Women-owned small business dashboard"
        href="https://www.performance.gov/sba-wosb-dashboard/"
        description="In honor of National Women’s Small Business Month, we’ve partnered with SBA’s Office of Government Contracting and Business Development and Office of Program Performance, Analysis, and Evaluation to highlight the Women-Owned Small Businesses (WOSBs) data dashboard!"
        authors={['Constance Lu']}
        dateTime="2020-09-30T12:00:00+01:00"
        topics={[{ type: 'default', label: 'SBA' }]}
      />
      <CollectionItem
        heading="September 2020 updates show progress on cross-agency and agency priority goals"
        href="https://www.performance.gov/September-2020-Updates-Show-Progress/"
        description="Today, we published progress updates for both Cross-Agency Priority (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of FY2020. These updates highlight recent milestones and accomplishments as well as related initiatives that support progress towards a more modern and effective government."
        authors={['Eric L. Miller']}
        dateTime="2020-09-17T12:00:00+01:00"
        topics={[
          { type: 'default', label: 'Quarterly Update' },
          { type: 'default', label: 'Cap Goal' },
          { type: 'default', label: 'APG' },
          { type: 'default', label: 'PMA' },
          { type: 'default', label: 'Success Story' },
        ]}
      />
    </Collection>
  </div>
)

export const mixedCollectionList = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <Collection>
      <CollectionItem
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
      <ThumbnailCollectionItem
        heading="Women-owned small business dashboard"
        href="https://www.performance.gov/sba-wosb-dashboard/"
        description="In honor of National Women’s Small Business Month, we’ve partnered with SBA’s Office of Government Contracting and Business Development and Office of Program Performance, Analysis, and Evaluation to highlight the Women-Owned Small Businesses (WOSBs) data dashboard!"
        authors={['Constance Lu']}
        dateTime="2020-09-30T12:00:00+01:00"
        topics={[{ type: 'default', label: 'SBA' }]}
        thumbnail={{
          src: 'https://www.performance.gov/img/blog/wosb1.jpg',
          alt: 'Alt text',
        }}
      />
      <CalendarCollectionItem
        heading="September 2020 updates show progress on cross-agency and agency priority goals"
        href="https://www.performance.gov/September-2020-Updates-Show-Progress/"
        description="Today, we published progress updates for both Cross-Agency Priority (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of FY2020. These updates highlight recent milestones and accomplishments as well as related initiatives that support progress towards a more modern and effective government."
        dateTime="2020-09-17T12:00:00+01:00"
      />
    </Collection>
  </div>
)
