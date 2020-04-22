import React from 'react'
import { render } from '@testing-library/react'

import { Title } from './Title'

const testTitle = 'Test Title'
const testLink = '#testLinkOne'

describe('Title component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(
      <Title title={testTitle} link={testLink}></Title>
    )
    expect(queryByText('Test Title')).toBeInTheDocument()
  })
})
