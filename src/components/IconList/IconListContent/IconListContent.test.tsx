import { render } from '@testing-library/react'
import React from 'react'
import { IconListContent } from './IconListContent'

describe('Icon List Content', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <IconListContent className="my-custom-className">
        Here comes the content.
      </IconListContent>
    )

    const content = queryByTestId('iconListContent')

    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('usa-icon-list__content')
    expect(content).toHaveClass('my-custom-className')
    expect(content).toHaveTextContent('Here comes the content.')
  })
})
