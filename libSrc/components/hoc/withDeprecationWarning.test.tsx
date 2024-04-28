import React from 'react'
import { render } from '@testing-library/react'

import { deprecationWarning } from '../../deprecation.js'
import Button from '../Button/ButtonForwardRef.js'
import withDeprecationWarning from './withDeprecationWarning.js'

vi.mock('../../deprecation')

describe('withDeprecationWarning HOC', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call deprecationWarning before rendering the wrapped component', () => {
    const deprecationWarningMessage = 'That component is deprecated!'
    const DeprecatedButton = withDeprecationWarning(
      Button,
      deprecationWarningMessage
    )
    const buttonText = 'Deprecated Button'
    const { queryByTestId } = render(
      <DeprecatedButton type="button">{buttonText}</DeprecatedButton>
    )

    const renderedButton = queryByTestId('button')
    expect(renderedButton).toBeInTheDocument()
    expect(renderedButton).toHaveTextContent(buttonText)
    expect(deprecationWarning).toHaveBeenCalledTimes(1)
    expect(deprecationWarning).toHaveBeenCalledWith(deprecationWarningMessage)
  })
})
