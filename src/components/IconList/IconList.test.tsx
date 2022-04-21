import { render } from '@testing-library/react'
import React from 'react'
import { IconList } from './IconList'
import { Icon } from '../Icon/Icons'
import { IconListItem } from './IconListItem/IconListItem'
import { IconListIcon } from './IconListIcon/IconListIcon'
import { IconListContent } from './IconListContent/IconListContent'
import { IconListTitle } from './IconListTitle/IconListTitle'

describe('Icon List', () => {
  it('renders without errors', () => {
    const { queryByTestId, queryAllByTestId, queryAllByRole } = render(
      <IconList className="my-custom-className">
        <IconListItem>
          <IconListIcon>
            <Icon.CheckCircle />
          </IconListIcon>
          <IconListTitle type="h1">A title</IconListTitle>
          <IconListContent>Some content</IconListContent>
        </IconListItem>
        <IconListItem>
          <IconListIcon>
            <Icon.CheckCircle />
          </IconListIcon>
          <IconListTitle type="h1">Another title</IconListTitle>
          <IconListContent>More content</IconListContent>
        </IconListItem>
      </IconList>
    )

    const iconList = queryByTestId('iconList')
    const listItems = queryAllByTestId('iconListItem')
    const iconContainers = queryAllByTestId('iconListIcon')
    const icons = queryAllByRole('img')
    const titles = queryAllByTestId('iconListTitle')
    const contentDivs = queryAllByTestId('iconListContent')

    expect(iconList).toBeInTheDocument()
    expect(listItems).toHaveLength(2)
    expect(iconContainers).toHaveLength(2)
    expect(icons).toHaveLength(2)
    expect(titles).toHaveLength(2)
    expect(contentDivs).toHaveLength(2)
    expect(iconList).toHaveClass('usa-icon-list')
    expect(iconList).toHaveClass('my-custom-className')
  })
})
