import React, { ReactElement } from 'react'
import { Icon } from '../Icon/Icons'
import { IconList } from './IconList'
import { IconListItem } from './IconListItem/IconListItem'
import { IconListItemIcon } from './IconListIcon/IconListIcon'
import { IconListTitle } from './IconListTitle/IconListTitle'
import { IconListContent } from './IconListContent/IconListContent'

export default {
  title: 'Components/Icon list',
  parameters: {
    docs: {
      description: {
        component: `
###USWDS 2.0 Icon list component
Source: https://designsystem.digital.gov/components/icon-list/
`,
      },
    },
  },
}

export const Default = (): ReactElement => (
  <IconList>
    <IconListItem>
      <IconListItemIcon className="text-green">
        <Icon.CheckCircle />
      </IconListItemIcon>
      <IconListContent>
        Wash your hands for 20 seconds with soap
      </IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListItemIcon className="text-green">
        <Icon.CheckCircle />
      </IconListItemIcon>
      <IconListContent>Stay six feet away from others</IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListItemIcon className="text-red">
        <Icon.Cancel />
      </IconListItemIcon>
      <IconListContent>Avoid large gatherings</IconListContent>
    </IconListItem>
  </IconList>
)

export const SimpleContent = (): ReactElement => (
  <>
    <p className="margin-bottom-2">Benefits of joining Global Entry program:</p>
    <IconList className="usa-icon-list--primary">
      <IconListItem>
        <IconListItemIcon>
          <Icon.ThumbUpAlt />
        </IconListItemIcon>
        <IconListContent>No processing lines</IconListContent>
      </IconListItem>
      <IconListItem>
        <IconListItemIcon>
          <Icon.ThumbUpAlt />
        </IconListItemIcon>
        <IconListContent>
          Access to expedited entry benefits in other countries
        </IconListContent>
      </IconListItem>
      <IconListItem>
        <IconListItemIcon>
          <Icon.ThumbUpAlt />
        </IconListItemIcon>
        <IconListContent>Available at major U.S. airports</IconListContent>
      </IconListItem>
      <IconListItem>
        <IconListItemIcon>
          <Icon.ThumbUpAlt />
        </IconListItemIcon>
        <IconListContent>Reduced wait times</IconListContent>
      </IconListItem>
    </IconList>
  </>
)

export const RichContent = (): ReactElement => (
  <IconList>
    <IconListItem>
      <IconListItemIcon className="text-ink">
        <Icon.CheckCircle />
      </IconListItemIcon>
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
      <IconListItemIcon className="text-ink">
        <Icon.CheckCircle />
      </IconListItemIcon>
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
      <IconListItemIcon className="text-ink">
        <Icon.CheckCircle />
      </IconListItemIcon>
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

export const CustomSizeWithRichContent = (): ReactElement => (
  <>
    <p className="margin-bottom-2">
      Here are a few easy ways you can help reduce energy use and costs while
      spending more time at home.
    </p>
    <IconList className="usa-icon-list--size-lg">
      <IconListItem>
        <IconListItemIcon className="text-green">
          <Icon.AttachMoney />
        </IconListItemIcon>
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
        <IconListItemIcon className="text-green">
          <Icon.AttachMoney />
        </IconListItemIcon>
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
        <IconListItemIcon className="text-green">
          <Icon.AttachMoney />
        </IconListItemIcon>
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

export const CustomSize = (): ReactElement => (
  <IconList className="usa-icon-list--size-lg">
    <IconListItem>
      <IconListItemIcon className="text-blue">
        <Icon.Help />
      </IconListItemIcon>
      <IconListContent>
        <span className="text-bold">Timing.</span> Is now the right time to
        start a business?
      </IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListItemIcon className="text-blue">
        <Icon.Help />
      </IconListItemIcon>
      <IconListContent>
        <span className="text-bold">Funding.</span> Do I have enough money to
        launch a business?
      </IconListContent>
    </IconListItem>
    <IconListItem>
      <IconListItemIcon className="text-blue">
        <Icon.Help />
      </IconListItemIcon>
      <IconListContent>
        <span className="text-bold">Need.</span> Will this business fill a real
        need for my customers?
      </IconListContent>
    </IconListItem>
  </IconList>
)
