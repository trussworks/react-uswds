import React from 'react'
import { render } from '@testing-library/react'

import { ProcessListItem } from './ProcessListItem'

const testProps = {
  heading: 'some text',
  className: 'custom-class-name',
  headerClassName: 'custom-header-class',
}

describe('ProcessListItem component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(<ProcessListItem {...testProps} />)

    expect(queryByText('some text')).toBeInTheDocument()
  })

  it('accepts a custom className', () => {
    const { getByRole } = render(<ProcessListItem {...testProps} />)

    expect(getByRole('listitem')).toHaveClass(
      'usa-process-list__item custom-class-name'
    )
  })
})
