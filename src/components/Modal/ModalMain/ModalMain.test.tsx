import React from 'react'

import { ModalMain } from './ModalMain'

import { render } from '@testing-library/react'

describe('ModalMain component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<ModalMain>some children</ModalMain>)

    expect(getByTestId('modalMain')).toBeInTheDocument()
  })

  it('accepts attributes passed in through props', () => {
    const { getByTestId } = render(
      <ModalMain aria-label="aria-label-model">some children</ModalMain>
    )

    expect(getByTestId('modalMain')).toHaveAttribute(
      'aria-label',
      'aria-label-model'
    )
  })

  it('accepts a custom className', () => {
    const { getByTestId } = render(
      <ModalMain className="custom-class">some children</ModalMain>
    )

    expect(getByTestId('modalMain')).toHaveClass('usa-modal__main custom-class')
  })
})
