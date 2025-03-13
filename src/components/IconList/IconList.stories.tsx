import React, { type JSX } from 'react'
import { Icon } from '../Icon/Icons'
import { IconList } from './IconList'
import { IconListItem } from './IconListItem/IconListItem'
import { IconListIcon } from './IconListIcon/IconListIcon'
import { IconListTitle } from './IconListTitle/IconListTitle'
import { IconListContent } from './IconListContent/IconListContent'

export default {
  title: 'Components/Icon list',
  parameters: {
    docs: {
      description: {
        component: `
###USWDS 3.0 Icon list component
Source: https://designsystem.digital.gov/components/icon-list/
`,
      },
    },
  },
}

export const Default = (): JSX.Element => (
  <IconList>
    <IconListItem>
      <IconListIcon className="text-green">
        <Icon.CheckCircle aria-hidden="true" />
      </IconListIcon>
      <IconListContent>
        Wash your hands for 20 seconds with soap
      </IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListIcon className="text-green">
        <Icon.CheckCircle aria-hidden="true" />
      </IconListIcon>
      <IconListContent>Stay six feet away from others</IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListIcon className="text-red">
        <Icon.Cancel aria-hidden="true" />
      </IconListIcon>
      <IconListContent>Avoid large gatherings</IconListContent>
    </IconListItem>
  </IconList>
)

export const SimpleContent = (): JSX.Element => (
  <>
    <p className="margin-bottom-2">Benefits of joining Global Entry program:</p>
    <IconList className="usa-icon-list--primary">
      <IconListItem>
        <IconListIcon>
          <Icon.ThumbUpAlt aria-hidden="true" />
        </IconListIcon>
        <IconListContent>No processing lines</IconListContent>
      </IconListItem>
      <IconListItem>
        <IconListIcon>
          <Icon.ThumbUpAlt aria-hidden="true" />
        </IconListIcon>
        <IconListContent>
          Access to expedited entry benefits in other countries
        </IconListContent>
      </IconListItem>
      <IconListItem>
        <IconListIcon>
          <Icon.ThumbUpAlt aria-hidden="true" />
        </IconListIcon>
        <IconListContent>Available at major U.S. airports</IconListContent>
      </IconListItem>
      <IconListItem>
        <IconListIcon>
          <Icon.ThumbUpAlt aria-hidden="true" />
        </IconListIcon>
        <IconListContent>Reduced wait times</IconListContent>
      </IconListItem>
    </IconList>
  </>
)

export const RichContent = (): JSX.Element => (
  <IconList>
    <IconListItem>
      <IconListIcon className="text-ink">
        <Icon.CheckCircle aria-hidden="true" />
      </IconListIcon>
      <IconListContent>
        <IconListTitle type="h3">Donate cash when possible.</IconListTitle>
        <p>
          Financial contributions to recognized disaster relief organizations
          are the fastest, most flexible and most effective method of donating.
          Organizations on the ground know what items and quantities are needed,
          often buy in bulk with discounts and, if possible, purchase through
          businesses local to the disaster, which supports economic recovery.
        </p>
      </IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListIcon className="text-ink">
        <Icon.CheckCircle aria-hidden="true" />
      </IconListIcon>
      <IconListContent>
        <IconListTitle type="h3">
          Confirm what donations are needed.
        </IconListTitle>
        <p>
          Unneeded and unsolicited goods burden local organizations’ ability to
          meet survivors’ confirmed needs, drawing away valuable volunteer
          labor, transportation and warehouse space.
        </p>
      </IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListIcon className="text-ink">
        <Icon.CheckCircle aria-hidden="true" />
      </IconListIcon>
      <IconListContent>
        <IconListTitle type="h3">
          Talk to trusted organizations about volunteering.
        </IconListTitle>
        <p>
          Financial contributions to recognized disaster relief organizations
          are the fastest, most flexible and most effective method of donating.
          Organizations on the ground know what items and quantities are needed,
          often buy in bulk with discounts and, if possible, purchase through
          businesses local to the disaster, which supports economic recovery.
        </p>
      </IconListContent>
    </IconListItem>
  </IconList>
)

export const CustomSizeWithRichContent = (): JSX.Element => (
  <>
    <p className="margin-bottom-2">
      Here are a few easy ways you can help reduce energy use and costs while
      spending more time at home.
    </p>
    <IconList className="usa-icon-list--size-lg">
      <IconListItem>
        <IconListIcon className="text-green">
          <Icon.AttachMoney aria-hidden="true" />
        </IconListIcon>
        <IconListContent>
          <IconListTitle type="h3">Let the sun shine.</IconListTitle>
          <p>
            On sunny days, open your curtains to allow the sun to naturally warm
            the rooms of your home without using electricity. Natural sunlight
            can also lift your mood to help brighten your day. On warm days,
            close your curtains to help keep your house cool.
          </p>
        </IconListContent>
      </IconListItem>
      <IconListItem>
        <IconListIcon className="text-green">
          <Icon.AttachMoney aria-hidden="true" />
        </IconListIcon>
        <IconListContent>
          <IconListTitle type="h3">Adjust your schedule.</IconListTitle>
          <p>
            Instead of running high-energy-use appliances such as dishwashers
            and clothes dryers during mid-afternoon or early evening hours,
            operate them early in the morning or late at night. Some utilities
            charge less at off-peak times, which will help reduce your costs.
          </p>
        </IconListContent>
      </IconListItem>
      <IconListItem>
        <IconListIcon className="text-green">
          <Icon.AttachMoney aria-hidden="true" />
        </IconListIcon>
        <IconListContent>
          <IconListTitle type="h3">Fill it up.</IconListTitle>
          <p>
            Wash full loads, whether it’s clothes or dishes. Washing multiple
            small loads means you’re using and heating more water, which can
            increase your expenses. Using cold water for clothes washing can
            also help lower your costs.
          </p>
        </IconListContent>
      </IconListItem>
    </IconList>
  </>
)

export const CustomSize = (): JSX.Element => (
  <IconList className="usa-icon-list--size-lg">
    <IconListItem>
      <IconListIcon className="text-blue">
        <Icon.Help aria-hidden="true" />
      </IconListIcon>
      <IconListContent>
        <span className="text-bold">Timing.</span> Is now the right time to
        start a business?
      </IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListIcon className="text-blue">
        <Icon.Help aria-hidden="true" />
      </IconListIcon>
      <IconListContent>
        <span className="text-bold">Funding.</span> Do I have enough money to
        launch a business?
      </IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListIcon className="text-blue">
        <Icon.Help aria-hidden="true" />
      </IconListIcon>
      <IconListContent>
        <span className="text-bold">Need.</span> Will this business fill a real
        need for my customers?
      </IconListContent>
    </IconListItem>
  </IconList>
)
