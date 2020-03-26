import React from 'react'
import { render } from '@testing-library/react'

import { FormGroup } from './FormGroup'

describe('FormGroup component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<FormGroup>My Form Group</FormGroup>)
    expect(queryByTestId('formGroup')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<FormGroup>My Form Group</FormGroup>)
    expect(queryByText('My Form Group')).toBeInTheDocument()
  })
})
