import React from 'react'
import { render } from '@testing-library/react'
import {
  CollectionItemBody,
  CollectionItemBodyProps,
} from './CollectionItemBody'

describe('CollectionItemBody component', () => {
  const testProps: CollectionItemBodyProps = {
    heading: 'Gears of Government President’s Award winners',
    href: 'https://www.performance.gov/presidents-winners-press-release/',
    description:
      'Today, the Administration announces the winners of the Gears of Government President’s Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.',
    authors: ['Sondra Alnsworth', 'Constance Lu'],
    dateTime: '2020-09-30T12:00:00+01:00',
    topics: [
      { type: 'new', label: 'NEW' },
      { type: 'default', label: 'PMA' },
      { type: 'default', label: 'OMB' },
    ],
  }

  it('renders without errors', () => {
    const { getByTestId } = render(<CollectionItemBody {...testProps} />)
    expect(getByTestId('collection-body')).toBeInTheDocument()
  })

  describe('description', () => {
    it('does not render the description', () => {
      const { queryByTestId } = render(
        <CollectionItemBody {...testProps} description="" />
      )
      expect(queryByTestId('collection-description')).not.toBeInTheDocument()
    })

    it('renders the description', () => {
      const { queryByTestId } = render(<CollectionItemBody {...testProps} />)
      expect(queryByTestId('collection-description')).toHaveTextContent(
        'Today, the Administration announces the winners of the Gears of Government President’s Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.'
      )
    })
  })

  describe('more information', () => {
    it('does not render more information', () => {
      const { queryByTestId } = render(
        <CollectionItemBody {...testProps} authors={[]} dateTime="" />
      )
      expect(queryByTestId('collection-more-info')).not.toBeInTheDocument()
    })
    it('renders more information with only authors', () => {
      const { getByTestId } = render(
        <CollectionItemBody {...testProps} dateTime="" />
      )
      expect(getByTestId('collection-more-info')).toBeInTheDocument()
    })
    it('renders more information with only date', () => {
      const { getByTestId } = render(
        <CollectionItemBody {...testProps} authors={[]} />
      )
      expect(getByTestId('collection-more-info')).toBeInTheDocument()
    })
  })

  describe('authors', () => {
    it('does not render any authors ', () => {
      const { queryByTestId } = render(
        <CollectionItemBody {...testProps} authors={[]} />
      )
      expect(queryByTestId('collection-authors')).not.toBeInTheDocument()
    })

    it('formats single author', () => {
      const { getByTestId } = render(
        <CollectionItemBody {...testProps} authors={['Author 1']} />
      )
      expect(getByTestId('collection-authors')).toHaveTextContent('By Author 1')
    })

    it('formats two authors', () => {
      const { getByTestId } = render(
        <CollectionItemBody {...testProps} authors={['Author 1', 'Author 2']} />
      )
      expect(getByTestId('collection-authors')).toHaveTextContent(
        'By Author 1 and Author 2'
      )
    })

    it('formats three authors', () => {
      const { getByTestId } = render(
        <CollectionItemBody
          {...testProps}
          authors={['Author 1', 'Author 2', 'Author 3']}
        />
      )
      expect(getByTestId('collection-authors')).toHaveTextContent(
        'By Author 1, Author 2 and Author 3'
      )
    })

    it('formats four authors', () => {
      const { getByTestId } = render(
        <CollectionItemBody
          {...testProps}
          authors={['Author 1', 'Author 2', 'Author 3', 'Author 4']}
        />
      )
      expect(getByTestId('collection-authors')).toHaveTextContent(
        'By Author 1, Author 2, Author 3 and Author 4'
      )
    })
  })

  describe('date', () => {
    it('does not render the date', () => {
      const { queryByTestId } = render(
        <CollectionItemBody {...testProps} dateTime="" />
      )
      expect(queryByTestId('collection-date')).not.toBeInTheDocument()
    })

    it('renders the date', () => {
      const { queryByTestId } = render(
        <CollectionItemBody
          {...testProps}
          dateTime="2021-04-12T07:00:00.000Z"
        />
      )
      expect(queryByTestId('collection-date')).toHaveTextContent(
        'April 12, 2021'
      )
    })
  })

  describe('topics', () => {
    it('does not render topics', () => {
      const { queryByTestId } = render(
        <CollectionItemBody {...testProps} topics={[]} />
      )
      expect(queryByTestId('collection-topics')).not.toBeInTheDocument()
    })

    it('renders topics', () => {
      const { queryByTestId } = render(
        <CollectionItemBody
          {...testProps}
          dateTime="2021-04-12T07:00:00.000Z"
        />
      )
      expect(queryByTestId('collection-topics')).toBeInTheDocument()
    })
  })
})
