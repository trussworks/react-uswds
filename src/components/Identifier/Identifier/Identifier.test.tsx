import React from 'react'
import { render } from '@testing-library/react'

import { Identifier } from './Identifier'

describe('Identifier component', () => {
  it('renders', () => {
    const { queryByTestId } = render(<Identifier />)
    expect(queryByTestId('identifier')).toBeInTheDocument()
  })
})

/*
what tests need to be added?
- “Identifier renders without errors”
- “Identifier renders Spanish v?”

Storybook examples
- default
- default (spanish)
- multiple parents and logos
- multiple parents and logos (spanish)
- no logos
- taxpayer disclaimer
- taxpayer disclaimer (spanish)
*/
