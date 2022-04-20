import { render } from '@testing-library/react'
import React from 'react'
import { Icon } from '../../Icon/Icons'
import { IconListIcon } from './IconListIcon'

describe('Icon List Icon', () => {
  it('renders without errors', () => {
    const { queryByTestId, queryByRole } = render(
      <IconListIcon className="my-custom-className">
        <Icon.CheckCircle />
      </IconListIcon>
    )

    const iconContainer = queryByTestId('iconListIcon')
    const icon = queryByRole('img')

    expect(iconContainer).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(iconContainer).toHaveClass('usa-icon-list__icon')
    expect(iconContainer).toHaveClass('my-custom-className')
  })
})
