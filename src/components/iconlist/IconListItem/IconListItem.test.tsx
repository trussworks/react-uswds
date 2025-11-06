import { render } from '@testing-library/react'
import React from 'react'
import { Icon } from '../../Icon/Icons'
import { IconListItem } from './IconListItem'
import { IconListIcon } from '../IconListIcon/IconListIcon'
import { IconListContent } from '../IconListContent/IconListContent'
import { IconListTitle } from '../IconListTitle/IconListTitle'

describe('Icon List Item', () => {
  it('renders without errors', () => {
    const { queryByTestId, queryByRole } = render(
      <IconListItem className="my-custom-className">
        <IconListIcon>
          <Icon.CheckCircle />
        </IconListIcon>
        <IconListTitle type="h1">A title</IconListTitle>
        <IconListContent>Some content</IconListContent>
      </IconListItem>
    )

    const listItem = queryByTestId('iconListItem')
    const iconContainer = queryByTestId('iconListIcon')
    const icon = queryByRole('img')
    const title = queryByTestId('iconListTitle')
    const content = queryByTestId('iconListContent')

    expect(listItem).toBeInTheDocument()
    expect(iconContainer).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    expect(listItem).toHaveClass('usa-icon-list__item')
    expect(listItem).toHaveClass('my-custom-className')
  })
})
