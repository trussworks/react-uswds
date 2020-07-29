import React from 'react'
import { render } from '@testing-library/react'

import { ValidationItem } from './ValidationItem'

describe('ValidationItem', () => {
  it('renders without errors', () => {
    const { container } = render(
      <ValidationItem id="uppercase" isValid={false}>
        Validation message
      </ValidationItem>
    )

    expect(container.querySelector('li')).toBeInTheDocument()
  })

  it('renders list item with styles', () => {
    const { queryByTestId } = render(
      <ul>
        <ValidationItem data-testid="uppercase" id="uppercase" isValid={false}>
          Validation message
        </ValidationItem>
        <ValidationItem data-testid="lowercase" id="numerical" isValid={true}>
          Validation message
        </ValidationItem>
      </ul>
    )

    expect(queryByTestId('uppercase')).toHaveClass('usa-checklist__item')
    expect(queryByTestId('uppercase')).not.toHaveClass(
      'usa-checklist__item--checked'
    )
    expect(queryByTestId('lowercase')).toHaveClass(
      'usa-checklist__item--checked usa-checklist__item '
    )
  })

  it('renders its children', () => {
    const { queryByText } = render(
      <ul>
        <ValidationItem id="minLength" isValid={true}>
          Length is more than 2 characters
        </ValidationItem>
        <ValidationItem id="maxLength" isValid={false}>
          Length is less than 16 characters
        </ValidationItem>
      </ul>
    )
    expect(queryByText('Length is more than 2 characters')).toBeInTheDocument()
    expect(queryByText('Length is less than 16 characters')).toBeInTheDocument()
  })
})
