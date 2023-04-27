import React, { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'

import { Dropdown } from './Dropdown'

describe('Dropdown component', () => {
  const renderDropdown = (
    props?: Omit<ComponentProps<typeof Dropdown>, 'id' | 'name' | 'children'>
  ) => {
    render(
      <Dropdown id="input-type-dropdown" name="input-type-dropdown" {...props}>
        <option>- Select - </option>
        <option value="value1">Option A</option>
        <option value="value2">Option B</option>
        <option value="value3">Option C</option>
      </Dropdown>
    )

    const queryForDropdown = () => screen.queryByRole('combobox')

    return {
      queryForDropdown,
    }
  }

  it('renders without errors', () => {
    const { queryForDropdown } = renderDropdown()

    const dropdown = queryForDropdown()

    expect(dropdown).toBeInTheDocument()
    expect(dropdown).toHaveClass('usa-select')
  })

  describe('validationStatus', () => {
    it('renders with error styling', () => {
      const { queryForDropdown } = renderDropdown({ validationStatus: 'error' })

      const dropdown = queryForDropdown()

      expect(dropdown).toBeInTheDocument()
      expect(dropdown).toHaveClass('usa-select')
      expect(dropdown).toHaveClass('usa-input--error')
    })

    it('renders with success styling', () => {
      const { queryForDropdown } = renderDropdown({
        validationStatus: 'success',
      })

      const dropdown = queryForDropdown()

      expect(dropdown).toBeInTheDocument()
      expect(dropdown).toHaveClass('usa-select')
      expect(dropdown).toHaveClass('usa-input--success')
    })
  })
})
