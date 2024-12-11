import { render } from '@testing-library/react'

vi.mock('../../deprecation')
import { deprecationWarning } from '../../deprecation'
import { Button } from '../Button/Button'
import { withDeprecationWarning } from './withDeprecationWarning'

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
