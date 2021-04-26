import React from 'react'
import { Link } from './../Link/Link'
import { Collection } from './Collection'
import { CollectionItem } from './CollectionItem'
import { CollectionHeading } from './CollectionHeading'
import { CollectionDescription } from './CollectionDescription'
import { CollectionMeta } from './CollectionMeta'
import { CollectionMetaItem } from './CollectionMetaItem'
import { CollectionMetaItemTag } from './CollectionMetaItemTag'
import { CollectionThumbnail } from './CollectionThumbnail'
import { CollectionCalendarDate } from './CollectionCalendarDate'

export default {
  title: 'Components/Collection',
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

export const collectionWithDefaultItems = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <Collection>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://www.performance.gov/presidents-winners-press-release/">
            Gears of Government President’s Award winners
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          Today, the Administration announces the winners of the Gears of
          Government President’s Award. This program recognizes the
          contributions of individuals and teams across the federal workforce
          who make a profound difference in the lives of the American people.
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>
            By Sondra Alnsworth and Constance Lu
          </CollectionMetaItem>
          <CollectionMetaItem>September 30, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag tagStyle="new">New</CollectionMetaItemTag>
          <CollectionMetaItemTag>PMA</CollectionMetaItemTag>
          <CollectionMetaItemTag>OMB</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://www.performance.gov/sba-wosb-dashboard/">
            Women-owned small business dashboard
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          In honor of National Women’s Small Business Month, we’ve partnered
          with SBA’s Office of Government Contracting and Business Development
          and Office of Program Performance, Analysis, and Evaluation to
          highlight the Women-Owned Small Businesses (WOSBs) data dashboard!
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>By Constance Lu</CollectionMetaItem>
          <CollectionMetaItem>September 30, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag>SBA</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://www.performance.gov/sba-wosb-dashboard/">
            September 2020 updates show progress on cross-agency and agency
            priority goals
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          Today, we published progress updates for both Cross-Agency Priority
          (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of
          FY2020. These updates highlight recent milestones and accomplishments
          as well as related initiatives that support progress towards a more
          modern and effective government.
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>By Eric L. Miller</CollectionMetaItem>
          <CollectionMetaItem>September 17, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag>Quarterly Update</CollectionMetaItemTag>
          <CollectionMetaItemTag>Cap Goal</CollectionMetaItemTag>
          <CollectionMetaItemTag>APG</CollectionMetaItemTag>
          <CollectionMetaItemTag>PMA</CollectionMetaItemTag>
          <CollectionMetaItemTag>Success Story</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
    </Collection>
  </div>
)

export const collectionWithThumbnailItems = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <Collection>
      <CollectionItem
        variantComponent={
          <CollectionThumbnail
            src="https://www.performance.gov/img/GoG/gears-govt-presidents.png"
            alt="Alt text"
          />
        }>
        <CollectionHeading>
          <Link href="https://www.performance.gov/presidents-winners-press-release/">
            Gears of Government President’s Award winners
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          Today, the Administration announces the winners of the Gears of
          Government President’s Award. This program recognizes the
          contributions of individuals and teams across the federal workforce
          who make a profound difference in the lives of the American people.
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>
            By Sondra Alnsworth and Constance Lu
          </CollectionMetaItem>
          <CollectionMetaItem>September 30, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag tagStyle="new">New</CollectionMetaItemTag>
          <CollectionMetaItemTag>PMA</CollectionMetaItemTag>
          <CollectionMetaItemTag>OMB</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem
        variantComponent={
          <CollectionThumbnail
            src="https://www.performance.gov/img/blog/wosb1.jpg"
            alt="Alt text"
          />
        }>
        <CollectionHeading>
          <Link href="https://www.performance.gov/sba-wosb-dashboard/">
            Women-owned small business dashboard
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          In honor of National Women’s Small Business Month, we’ve partnered
          with SBA’s Office of Government Contracting and Business Development
          and Office of Program Performance, Analysis, and Evaluation to
          highlight the Women-Owned Small Businesses (WOSBs) data dashboard!
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>By Constance Lu</CollectionMetaItem>
          <CollectionMetaItem>September 30, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag>SBA</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem
        variantComponent={
          <CollectionThumbnail
            src="https://www.performance.gov/img/blog/sept-2020.png"
            alt="Alt text"
          />
        }>
        <CollectionHeading>
          <Link href="https://www.performance.gov/sba-wosb-dashboard/">
            September 2020 updates show progress on cross-agency and agency
            priority goals
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          Today, we published progress updates for both Cross-Agency Priority
          (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of
          FY2020. These updates highlight recent milestones and accomplishments
          as well as related initiatives that support progress towards a more
          modern and effective government.
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>By Eric L. Miller</CollectionMetaItem>
          <CollectionMetaItem>September 17, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag>Quarterly Update</CollectionMetaItemTag>
          <CollectionMetaItemTag>Cap Goal</CollectionMetaItemTag>
          <CollectionMetaItemTag>APG</CollectionMetaItemTag>
          <CollectionMetaItemTag>PMA</CollectionMetaItemTag>
          <CollectionMetaItemTag>Success Story</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
    </Collection>
  </div>
)

export const collectionWithHeadingItems = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <Collection>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://digital.gov/guides/mobile-principles/?dg">
            The eight principles of mobile-friendliness
          </Link>
        </CollectionHeading>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>Digital.gov</CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://designsystem.digital.gov/maturity-model/">
            The USWDS maturity model
          </Link>
        </CollectionHeading>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>U.S. Web Design System</CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://truss.works">
            A news item that’s on our own site
          </Link>
        </CollectionHeading>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://18f.gsa.gov/2020/11/24/the-key-role-of-product-owners-in-federated-data-projects/">
            The key role of product owners in federated data projects
          </Link>
        </CollectionHeading>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>18F</CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://www.performance.gov/September-2020-Updates-Show-Progress/">
            Progress on Cross-Agency Priority (CAP) goals and Agency Priority
            Goals (APGs)
          </Link>
        </CollectionHeading>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>Performance.gov</CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>
    </Collection>
  </div>
)

export const collectionWithMixedItems = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <Collection>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://www.performance.gov/presidents-winners-press-release/">
            Gears of Government President’s Award winners
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          Today, the Administration announces the winners of the Gears of
          Government President’s Award. This program recognizes the
          contributions of individuals and teams across the federal workforce
          who make a profound difference in the lives of the American people.
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>
            By Sondra Alnsworth and Constance Lu
          </CollectionMetaItem>
          <CollectionMetaItem>September 30, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag tagStyle="new">New</CollectionMetaItemTag>
          <CollectionMetaItemTag>PMA</CollectionMetaItemTag>
          <CollectionMetaItemTag>OMB</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://digital.gov/guides/mobile-principles/?dg">
            The eight principles of mobile-friendliness
          </Link>
        </CollectionHeading>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>Digital.gov</CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem
        variantComponent={
          <CollectionThumbnail
            src="https://www.performance.gov/img/blog/wosb1.jpg"
            alt="Alt text"
          />
        }>
        <CollectionHeading>
          <Link href="https://www.performance.gov/sba-wosb-dashboard/">
            Women-owned small business dashboard
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          In honor of National Women’s Small Business Month, we’ve partnered
          with SBA’s Office of Government Contracting and Business Development
          and Office of Program Performance, Analysis, and Evaluation to
          highlight the Women-Owned Small Businesses (WOSBs) data dashboard!
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>By Constance Lu</CollectionMetaItem>
          <CollectionMetaItem>September 30, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag>SBA</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://designsystem.digital.gov/maturity-model/">
            The USWDS maturity model
          </Link>
        </CollectionHeading>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>U.S. Web Design System</CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem
        variantComponent={
          <CollectionCalendarDate datetime="2020-09-17T12:00:00+01:00" />
        }>
        <CollectionHeading>
          <Link href="https://www.performance.gov/sba-wosb-dashboard/">
            September 2020 updates show progress on cross-agency and agency
            priority goals
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          Today, we published progress updates for both Cross-Agency Priority
          (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of
          FY2020. These updates highlight recent milestones and accomplishments
          as well as related initiatives that support progress towards a more
          modern and effective government.
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>By Eric L. Miller</CollectionMetaItem>
          <CollectionMetaItem>September 17, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag>Quarterly Update</CollectionMetaItemTag>
          <CollectionMetaItemTag>Cap Goal</CollectionMetaItemTag>
          <CollectionMetaItemTag>APG</CollectionMetaItemTag>
          <CollectionMetaItemTag>PMA</CollectionMetaItemTag>
          <CollectionMetaItemTag>Success Story</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://truss.works">
            A news item that’s on our own site
          </Link>
        </CollectionHeading>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://18f.gsa.gov/2020/11/24/the-key-role-of-product-owners-in-federated-data-projects/">
            The key role of product owners in federated data projects
          </Link>
        </CollectionHeading>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>18F</CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://www.performance.gov/September-2020-Updates-Show-Progress/">
            Progress on Cross-Agency Priority (CAP) goals and Agency Priority
            Goals (APGs)
          </Link>
        </CollectionHeading>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>Performance.gov</CollectionMetaItem>
        </CollectionMeta>
      </CollectionItem>
    </Collection>
  </div>
)

export const condensedCollection = (): React.ReactElement => (
  <div className="tablet:grid-col-6">
    <Collection condensed>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://www.performance.gov/presidents-winners-press-release/">
            Gears of Government President’s Award winners
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          Today, the Administration announces the winners of the Gears of
          Government President’s Award. This program recognizes the
          contributions of individuals and teams across the federal workforce
          who make a profound difference in the lives of the American people.
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>
            By Sondra Alnsworth and Constance Lu
          </CollectionMetaItem>
          <CollectionMetaItem>September 30, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag tagStyle="new">New</CollectionMetaItemTag>
          <CollectionMetaItemTag>PMA</CollectionMetaItemTag>
          <CollectionMetaItemTag>OMB</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://www.performance.gov/sba-wosb-dashboard/">
            Women-owned small business dashboard
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          In honor of National Women’s Small Business Month, we’ve partnered
          with SBA’s Office of Government Contracting and Business Development
          and Office of Program Performance, Analysis, and Evaluation to
          highlight the Women-Owned Small Businesses (WOSBs) data dashboard!
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>By Constance Lu</CollectionMetaItem>
          <CollectionMetaItem>September 30, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag>SBA</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
      <CollectionItem>
        <CollectionHeading>
          <Link href="https://www.performance.gov/sba-wosb-dashboard/">
            September 2020 updates show progress on cross-agency and agency
            priority goals
          </Link>
        </CollectionHeading>
        <CollectionDescription>
          Today, we published progress updates for both Cross-Agency Priority
          (CAP) Goals and Agency Priority Goals (APGs) for the third quarter of
          FY2020. These updates highlight recent milestones and accomplishments
          as well as related initiatives that support progress towards a more
          modern and effective government.
        </CollectionDescription>
        <CollectionMeta aria-label="More Information">
          <CollectionMetaItem>By Eric L. Miller</CollectionMetaItem>
          <CollectionMetaItem>September 17, 2020</CollectionMetaItem>
        </CollectionMeta>
        <CollectionMeta aria-label="Topics">
          <CollectionMetaItemTag>Quarterly Update</CollectionMetaItemTag>
          <CollectionMetaItemTag>Cap Goal</CollectionMetaItemTag>
          <CollectionMetaItemTag>APG</CollectionMetaItemTag>
          <CollectionMetaItemTag>PMA</CollectionMetaItemTag>
          <CollectionMetaItemTag>Success Story</CollectionMetaItemTag>
        </CollectionMeta>
      </CollectionItem>
    </Collection>
  </div>
)
