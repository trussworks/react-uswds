import React from 'react'
import { render } from '@testing-library/react'

import { Table } from './Table'

const testContent = (
  <>
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Description</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Declaration of Independence</th>
        <td>
          Statement adopted by the Continental Congress declaring independence
          from the British Empire.
        </td>
        <td>1776</td>
      </tr>
      <tr>
        <th scope="row">Bill of Rights</th>
        <td>
          The first ten amendments of the U.S. Constitution guaranteeing rights
          and freedoms.
        </td>
        <td>1791</td>
      </tr>
      <tr>
        <th scope="row">Declaration of Sentiments</th>
        <td>
          A document written during the Seneca Falls Convention outlining the
          rights that American women should be entitled to as citizens.
        </td>
        <td>1848</td>
      </tr>
      <tr>
        <th scope="row">Emancipation Proclamation</th>
        <td>
          An executive order granting freedom to slaves in designated southern
          states.
        </td>
        <td>1863</td>
      </tr>
    </tbody>
  </>
)

describe('Table component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Table>{testContent}</Table>)
    expect(queryByTestId('table')).toBeInTheDocument()
  })

  it('renders striped table', () => {
    const { getByRole } = render(<Table striped={true}>{testContent}</Table>)
    expect(getByRole('table')).toHaveClass('usa-table usa-table--striped')
  })

  it('renders compact table', () => {
    const { getByRole } = render(<Table compact={true}>{testContent}</Table>)
    expect(getByRole('table')).toHaveClass('usa-table usa-table--compact')
  })

  it('renders scrollable table', () => {
    const { queryByTestId } = render(
      <Table scrollable={true}>{testContent}</Table>
    )
    expect(queryByTestId('scrollable-table')).toHaveClass(
      'usa-table-container--scrollable'
    )
  })
})
