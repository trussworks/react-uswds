import React from 'react'
import { render } from '@testing-library/react'
import { CollectionCalendarDate } from './CollectionCalendarDate'

describe('CollectionCalendarDate', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <CollectionCalendarDate datetime="2021-04-12T12:00:00.000Z" />
    )

    expect(queryByTestId('collection-calendar-date')).toBeInTheDocument()
  })

  it('does not render anything with invalid iso string', () => {
    const { queryByTestId } = render(<CollectionCalendarDate datetime="" />)

    expect(queryByTestId('collection-calendar-date')).not.toBeInTheDocument()
  })
})
