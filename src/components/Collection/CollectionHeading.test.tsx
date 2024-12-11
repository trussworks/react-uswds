import { render } from '@testing-library/react'
import { CollectionHeading } from './CollectionHeading'
import { HeadingLevel } from '../../types/headingLevel'

describe('CollectionHeading component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(
      <CollectionHeading data-testid="collection-heading" headingLevel="h3" />
    )

    expect(queryByTestId('collection-heading')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { queryByTestId } = render(
      <CollectionHeading data-testid="collection-heading" headingLevel="h3">
        <div data-testid="test-child" />
      </CollectionHeading>
    )

    expect(queryByTestId('test-child')).toBeInTheDocument()
  })

  it('renders custom class name', () => {
    const { getByTestId } = render(
      <CollectionHeading
        data-testid="collection-heading"
        className="custom-class"
        headingLevel="h3"
      />
    )

    expect(getByTestId('collection-heading')).toHaveClass('custom-class')
  })

  it('renders custom heading attributes', () => {
    const { getByTestId } = render(
      <CollectionHeading
        data-testid="collection-heading"
        aria-label="Hello"
        headingLevel="h3"
      />
    )

    expect(getByTestId('collection-heading')).toHaveAttribute(
      'aria-label',
      'Hello'
    )
  })

  describe('with custom heading levels', () => {
    const scenarios: [HeadingLevel, number][] = [
      ['h1', 1],
      ['h2', 2],
      ['h3', 3],
      ['h4', 4],
      ['h5', 5],
      ['h6', 6],
    ]
    it.each(scenarios)(
      'can render with headingLevel %s',
      (headingLevel, expectedLevel) => {
        const { getByRole } = render(
          <CollectionHeading headingLevel={headingLevel} />
        )
        expect(
          getByRole('heading', { level: expectedLevel })
        ).toBeInTheDocument()
      }
    )
  })
})
