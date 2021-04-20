import React from 'react'
import { render } from '@testing-library/react'

import { ProcessListHeading } from './ProcessListHeading'

describe('ProcessListHeading component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('with default ProcessListHeading component', () => {
    it('renders without errors', () => {
      const { getByRole } = render(<ProcessListHeading />)
      expect(getByRole('heading')).toBeInTheDocument
      expect(getByRole('heading')).toHaveClass('usa-process-list__heading')
    })
  })

  describe('with custom ProcessListHeading component', () => {
    type CustomHeadingProps = React.PropsWithChildren<{}> &
      JSX.IntrinsicElements['p']

    const CustomHeading: React.FunctionComponent<CustomHeadingProps> = ({
      children,
      className,
      ...props
    }: CustomHeadingProps): React.ReactElement => (
      <p className={className} {...props}>
        {children}
      </p>
    )

    it('handles own props', () => {
      const { queryByTestId } = render(
        <ProcessListHeading<CustomHeadingProps>
          className="custom-class"
          asCustom={CustomHeading}
          data-testid="customComponent"
          custom-attribute="customAtt">
          A heading that is a paragraph
        </ProcessListHeading>
      )
      const byTestId = queryByTestId('customComponent')
      expect(byTestId).toHaveTextContent('A heading that is a paragraph')
      expect(byTestId).toHaveAttribute('custom-attribute', 'customAtt')
      expect(byTestId).toHaveClass('usa-process-list__heading custom-class')
    })
  })
})
