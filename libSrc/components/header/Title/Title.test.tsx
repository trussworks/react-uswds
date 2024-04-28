import React from 'react'
import { render } from '@testing-library/react'

import Title from './Title.js'

describe('Title component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(<Title>Test Title</Title>)
    expect(queryByText('Test Title')).toBeInTheDocument()
  })
})
