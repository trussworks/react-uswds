import { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'

import { Select } from './Select'

describe('Select component', () => {
  const renderSelect = (
    props?: Omit<ComponentProps<typeof Select>, 'id' | 'name' | 'children'>
  ) => {
    render(
      <Select id="input-type-dropdown" name="input-type-dropdown" {...props}>
        <option>- Select - </option>
        <option value="value1">Option A</option>
        <option value="value2">Option B</option>
        <option value="value3">Option C</option>
      </Select>
    )

    const queryForSelect = () => screen.queryByRole('combobox')

    return {
      queryForSelect,
    }
  }

  it('renders without errors', () => {
    const { queryForSelect } = renderSelect()

    const select = queryForSelect()

    expect(select).toBeInTheDocument()
    expect(select).toHaveClass('usa-select')
  })

  describe('validationStatus', () => {
    it('renders with error styling', () => {
      const { queryForSelect } = renderSelect({ validationStatus: 'error' })

      const select = queryForSelect()

      expect(select).toBeInTheDocument()
      expect(select).toHaveClass('usa-select')
      expect(select).toHaveClass('usa-input--error')
    })

    it('renders with success styling', () => {
      const { queryForSelect } = renderSelect({
        validationStatus: 'success',
      })

      const select = queryForSelect()

      expect(select).toBeInTheDocument()
      expect(select).toHaveClass('usa-select')
      expect(select).toHaveClass('usa-input--success')
    })
  })
})
