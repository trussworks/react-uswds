import React from 'react'
import { render } from '@testing-library/react'

import { ValidationChecklist } from './ValidationChecklist'

describe('ValidationChecklist', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ValidationChecklist id="validation-list">
        Validation message
      </ValidationChecklist>
    )

    expect(queryByTestId('validationChecklist')).toBeInTheDocument()
  })

  it('renders unordered list with styles', () => {
    const { container } = render(
      <ValidationChecklist id="validation-list">
        <li>Validation message</li>
      </ValidationChecklist>
    )
    expect(container.querySelector('ul')).toBeInTheDocument()
    expect(container.querySelector('ul')).toHaveClass('usa-checklist')
  })

  it('renders its children', () => {
    const { queryByText } = render(
      <ValidationChecklist id="length-validation">
        <li>Length is less than 16 characters</li>
      </ValidationChecklist>
    )
    expect(queryByText('Length is less than 16 characters')).toBeInTheDocument()
  })
})
