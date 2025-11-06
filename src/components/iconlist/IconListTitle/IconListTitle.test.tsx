import { render } from '@testing-library/react'
import React from 'react'
import { IconListTitle } from './IconListTitle'

describe('Icon List Title', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <IconListTitle type="h1" className="my-custom-className">
        A title
      </IconListTitle>
    )

    const title = queryByTestId('iconListTitle')

    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('usa-icon-list__title')
    expect(title).toHaveClass('my-custom-className')
  })
})
