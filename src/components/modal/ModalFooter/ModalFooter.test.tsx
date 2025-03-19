import React from 'react'
import { render } from '@testing-library/react'

import { ModalFooter } from './ModalFooter'

describe('ModalFooter component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ModalFooter>
        <ul>
          <li>
            <button type="button">Continue without saving</button>
          </li>
          <li>
            <button type="button">Go back</button>
          </li>
        </ul>
      </ModalFooter>
    )

    expect(queryByTestId('modalFooter')).toBeInTheDocument()
  })

  it('accepts a custom className', () => {
    const { queryByTestId } = render(
      <ModalFooter className="custom-class">
        <ul>
          <li>
            <button type="button">Continue without saving</button>
          </li>
          <li>
            <button type="button">Go back</button>
          </li>
        </ul>
      </ModalFooter>
    )

    expect(queryByTestId('modalFooter')).toBeInTheDocument()
  })
})
