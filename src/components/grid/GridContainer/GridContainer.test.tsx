import React from 'react'
import { render } from '@testing-library/react'

import { GridContainer } from './GridContainer'
import { Grid } from '../Grid/Grid'

const testContent = 'a grid container item'
const testGridContent = (
  <Grid row>
    <Grid tablet={{ col: true }}>{testContent}</Grid>
    <Grid tablet={{ col: true }}>{testContent}</Grid>
    <Grid tablet={{ col: true }}>{testContent}</Grid>
  </Grid>
)

describe('GridContainer component', () => {
  describe('default component', () => {
    it('renders without errors', () => {
      const { queryByTestId } = render(
        <GridContainer>{testGridContent}</GridContainer>
      )
      expect(queryByTestId('gridContainer')).toBeInTheDocument()
    })

    it('renders its children', () => {
      const { queryByText } = render(<GridContainer>My Content</GridContainer>)
      expect(queryByText('My Content')).toBeInTheDocument()
    })

    it('implements the containerSize prop', () => {
      const { getByTestId } = render(
        <GridContainer containerSize="tablet-lg">My Content</GridContainer>
      )
      expect(getByTestId('gridContainer')).toHaveClass(
        'grid-container-tablet-lg'
      )
    })
  })

  describe('custom component', () => {
    type CustomGridContainerProps = JSX.IntrinsicElements['ul']

    const CustomGridContainer: React.FunctionComponent<CustomGridContainerProps> = ({
      children,
      className,
      ...ulProps
    }: CustomGridContainerProps): React.ReactElement => (
      <ul className={className} {...ulProps}>
        {children}
      </ul>
    )

    it('renders without errors', () => {
      const { getByRole } = render(
        <GridContainer<CustomGridContainerProps> asCustom={CustomGridContainer}>
          <li>{testGridContent}</li>
          <li>{testGridContent}</li>
          <li>{testGridContent}</li>
          <li>{testGridContent}</li>
        </GridContainer>
      )

      const list = getByRole('list')
      expect(list).toBeInTheDocument()
      expect(list).toHaveClass('grid-container')
    })

    it('handles own props', () => {
      const { getByRole, getByTestId } = render(
        <GridContainer<CustomGridContainerProps>
          asCustom={CustomGridContainer}
          className="custom-class"
          custom-attribute="customAtt"
          data-testid="customTestId"
          containerSize="mobile-lg">
          <li>{testGridContent}</li>
          <li>{testGridContent}</li>
          <li>{testGridContent}</li>
          <li>{testGridContent}</li>
        </GridContainer>
      )

      const list = getByRole('list')
      expect(list).toBeInTheDocument()
      expect(list).toHaveAttribute('custom-attribute', 'customAtt')
      expect(list).toHaveClass('grid-container-mobile-lg custom-class')
      expect(getByTestId('customTestId')).toBeInTheDocument()
    })
  })
})
