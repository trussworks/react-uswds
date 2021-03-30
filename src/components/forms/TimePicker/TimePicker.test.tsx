import React from 'react'
import { render } from '@testing-library/react'

import { TimePicker } from './TimePicker'

describe('TimePicker Component', () => {
  const testProps = {
    id: 'appointment-time',
    name: 'appointment-time',
    onChange: jest.fn(),
  }

  it('renders without errors', () => {
    const { getByTestId } = render(<TimePicker {...testProps} />)

    const timePickerComboBox = getByTestId('combo-box')

    expect(timePickerComboBox).toBeInTheDocument()
    expect(timePickerComboBox).toHaveClass('usa-combo-box usa-time-picker')
  })
})
