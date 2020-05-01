import React from 'react'
import { render } from '@testing-library/react'

import { List } from './List'

const testItems = ['item 1', 'item 2', 'item 3']

const keyPrefix = 'testItem'

describe('List component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(
      <List items={testItems} keyPrefix={keyPrefix}></List>
    )
    expect(queryByText('item 1')).toBeInTheDocument()
  })

  // ToDo determine how to test the keys are rendering properly
})
