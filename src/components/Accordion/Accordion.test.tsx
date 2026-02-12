import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Accordion, AccordionItemProps } from './Accordion'
import { HeadingLevel } from '../../types/headingLevel'

const firstAmendment = (
  <p>
    Congress shall make no law respecting an establishment of religion, or
    prohibiting the free exercise thereof; or abridging the freedom of speech,
    or of the press; or the right of the people peaceably to assemble, and to
    petition the Government for a redress of grievances.
  </p>
)
const secondAmendment = (
  <>
    <p>
      A well regulated Militia, being necessary to the security of a free State,
      the right of the people to keep and bear Arms, shall not be infringed.
    </p>{' '}
    <ul>
      <li>This is a list item</li>
      <li>Another list item</li>
    </ul>
  </>
)
const thirdAmendment = (
  <p>
    No Soldier shall, in time of peace be quartered in any house, without the
    consent of the Owner, nor in time of war, but in a manner to be prescribed
    by law.
  </p>
)
const fourthAmendment = (
  <p>
    The right of the people to be secure in their persons, houses, papers, and
    effects, against unreasonable searches and seizures, shall not be violated,
    and no Warrants shall issue, but upon probable cause, supported by Oath or
    affirmation, and particularly describing the place to be searched, and the
    persons or things to be seized.
  </p>
)
const fifthAmendment = (
  <p>
    No person shall be held to answer for a capital, or otherwise infamous
    crime, unless on a presentment or indictment of a Grand Jury, except in
    cases arising in the land or naval forces, or in the Militia, when in actual
    service in time of War or public danger; nor shall any person be subject for
    the same offence to be twice put in jeopardy of life or limb; nor shall be
    compelled in any criminal case to be a witness against himself, nor be
    deprived of life, liberty, or property, without due process of law; nor
    shall private property be taken for public use, without just compensation.
  </p>
)
const testItems: AccordionItemProps[] = [
  {
    title: 'First Amendment',
    content: firstAmendment,
    expanded: false,
    id: '123',
    headingLevel: 'h4',
  },
  {
    title: 'Second Amendment',
    content: secondAmendment,
    expanded: false,
    id: 'abc',
    headingLevel: 'h4',
  },
  {
    title: 'Third Amendment',
    content: thirdAmendment,
    expanded: false,
    id: 'def',
    headingLevel: 'h4',
  },
  {
    title: 'Fourth Amendment',
    content: fourthAmendment,
    expanded: false,
    id: '456',
    headingLevel: 'h4',
  },
  {
    title: 'Fifth Amendment',
    content: fifthAmendment,
    expanded: false,
    id: '789',
    headingLevel: 'h4',
  },
]

describe('Accordion component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<Accordion items={testItems} />)
    expect(queryByTestId('accordion')).toBeInTheDocument()
  })

  it('renders a header and content for each item', () => {
    const { getByTestId, getAllByRole } = render(
      <Accordion items={testItems} />
    )
    const accordionEl = getByTestId('accordion')
    const headings = getAllByRole('heading', { level: 4 })

    expect(accordionEl.childElementCount).toBe(testItems.length * 2)
    expect(headings.length).toEqual(testItems.length)
  })

  it('no items are open by default', () => {
    const { getByTestId } = render(<Accordion items={testItems} />)

    expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
    expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
    expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
    expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
    expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()
  })

  describe('when you toggle a closed item', () => {
    it('opens', () => {
      const { getByTestId, getByText } = render(<Accordion items={testItems} />)

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[1].title as string))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()
    })
  })

  describe('when you toggle an open item', () => {
    it('closes', () => {
      const { getByText, getByTestId } = render(<Accordion items={testItems} />)

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[0].title as string))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[0].title as string))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()
    })
  })

  describe('when multiselectable is false (default behavior)', () => {
    it('when an item is opened, clicking a different item closes the previously opened item', () => {
      const { getByText, getByTestId } = render(<Accordion items={testItems} />)

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[3].title as string))
      fireEvent.click(getByText(testItems[1].title as string))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[4].title as string))
      fireEvent.click(getByText(testItems[2].title as string))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()
    })
  })

  describe('when multiselectable is true', () => {
    it('when an item is opened, previously open items remain open', () => {
      const { getByText, getByTestId } = render(
        <Accordion items={testItems} multiselectable={true} />
      )

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[0].title as string))
      fireEvent.click(getByText(testItems[1].title as string))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[0].title as string))
      fireEvent.click(getByText(testItems[3].title as string))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[2].title as string))
      fireEvent.click(getByText(testItems[4].title as string))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).toBeVisible()
    })
  })

  describe('with expanded items on mount', () => {
    const testExpandedItems: AccordionItemProps[] = [
      {
        title: 'First Amendment',
        content: firstAmendment,
        expanded: false,
        id: '123',
        headingLevel: 'h4',
      },
      {
        title: 'Second Amendment',
        content: secondAmendment,
        expanded: true,
        id: 'abc',
        headingLevel: 'h4',
      },
      {
        title: 'Third Amendment',
        content: thirdAmendment,
        expanded: false,
        id: 'def',
        headingLevel: 'h4',
      },
      {
        title: 'Fourth Amendment',
        content: fourthAmendment,
        expanded: true,
        id: '456',
        headingLevel: 'h4',
      },
      {
        title: 'Fifth Amendment',
        content: fifthAmendment,
        expanded: true,
        id: '789',
        headingLevel: 'h4',
      },
    ]

    it('shows one expanded item when multiselectable is false', () => {
      const { getByTestId } = render(<Accordion items={testExpandedItems} />)

      // The last expanded item "wins" if multiple new items have expanded:true
      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).toBeVisible()
    })

    it('shows all expanded items when multiselectable is true', () => {
      const { getByTestId } = render(
        <Accordion multiselectable items={testExpandedItems} />
      )

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).toBeVisible()
    })
  })

  describe('with a custom className', () => {
    it('passes the class onto the root Accordion element', () => {
      const { getByTestId } = render(
        <Accordion items={testItems} className="myCustomAccordion" />
      )
      expect(getByTestId('accordion')).toHaveClass('myCustomAccordion')
    })
  })

  describe('with custom classNames for Accordion Items', () => {
    const customTestItems: AccordionItemProps[] = [
      {
        title: 'First Amendment',
        content: firstAmendment,
        expanded: false,
        id: '123',
        className: 'myCustomAccordionItem',
        headingLevel: 'h4',
      },
      {
        title: 'Second Amendment',
        content: secondAmendment,
        expanded: false,
        id: 'abc',
        headingLevel: 'h4',
      },
      {
        title: 'Third Amendment',
        content: thirdAmendment,
        expanded: false,
        id: 'def',
        headingLevel: 'h4',
      },
    ]

    it('passes the class onto the given AccordionItem element', () => {
      const { getByTestId } = render(<Accordion items={customTestItems} />)
      expect(getByTestId(`accordionItem_${testItems[0].id}`)).toHaveClass(
        'myCustomAccordionItem'
      )
    })
  })

  describe('custom headingLevel for AccordionItems', () => {
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
        const customTestItems: AccordionItemProps[] = [
          {
            title: 'First Amendment',
            content: firstAmendment,
            expanded: false,
            headingLevel,
            id: '123',
            className: 'myCustomAccordionItem',
          },
          {
            title: 'Second Amendment',
            content: secondAmendment,
            expanded: false,
            headingLevel,

            id: 'abc',
          },
          {
            title: 'Third Amendment',
            content: thirdAmendment,
            expanded: false,
            headingLevel,
            id: 'def',
          },
        ]

        const { getAllByRole } = render(<Accordion items={customTestItems} />)
        const headings = getAllByRole('heading', { level: expectedLevel })
        expect(headings.length).toEqual(customTestItems.length)
      }
    )
  })

  describe('with a custom click handler', () => {
    const customToggleFunction = vi.fn()

    const customTestItems: AccordionItemProps[] = [
      {
        title: 'First Amendment',
        content: firstAmendment,
        expanded: false,
        id: '123',
        headingLevel: 'h4',
        handleToggle: () => {
          customToggleFunction()
        },
      },
    ]
    it('fires the handler successfully', () => {
      const { getByText } = render(<Accordion items={customTestItems} />)
      fireEvent.click(getByText(testItems[0].title as string))
      expect(customToggleFunction).toHaveBeenCalledOnce()
    })
  })

  describe('when new items are added', () => {
    let oldItems: AccordionItemProps[]
    let newItems: AccordionItemProps[]

    beforeEach(() => {
      oldItems = testItems.slice(0, 2).map((item) => ({ ...item }))
      newItems = testItems.slice(2).map((item) => ({ ...item }))
    })

    it('renders new items', () => {
      const { getByTestId, rerender } = render(<Accordion items={oldItems} />)
      rerender(<Accordion items={[...oldItems, ...newItems]} />)
      expect(getByTestId(`accordionItem_${oldItems[0].id}`)).toBeInTheDocument()
      expect(getByTestId(`accordionItem_${oldItems[1].id}`)).toBeInTheDocument()
      expect(getByTestId(`accordionItem_${newItems[0].id}`)).toBeInTheDocument()
      expect(getByTestId(`accordionItem_${newItems[1].id}`)).toBeInTheDocument()
      expect(getByTestId(`accordionItem_${newItems[2].id}`)).toBeInTheDocument()
    })

    describe('when multiselectable is false', () => {
      it('maintains existing expansion if new unexpanded items are added', () => {
        const { getByText, getByTestId, rerender } = render(
          <Accordion items={oldItems} />
        )
        fireEvent.click(getByText(oldItems[1].title as string))

        rerender(<Accordion items={[...oldItems, ...newItems]} />)
        expect(getByTestId(`accordionItem_${oldItems[0].id}`)).not.toBeVisible()
        expect(getByTestId(`accordionItem_${oldItems[1].id}`)).toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[0].id}`)).not.toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[1].id}`)).not.toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[2].id}`)).not.toBeVisible()
      })

      it('collapses existing expansion if new expanded items are added', () => {
        const { getByText, getByTestId, rerender } = render(
          <Accordion items={oldItems} />
        )
        fireEvent.click(getByText(oldItems[1].title as string))

        // The last expanded item "wins" if multiple new items have expanded:true
        newItems[0].expanded = true
        newItems[1].expanded = true
        rerender(<Accordion items={[...oldItems, ...newItems]} />)
        expect(getByTestId(`accordionItem_${oldItems[0].id}`)).not.toBeVisible()
        expect(getByTestId(`accordionItem_${oldItems[1].id}`)).not.toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[0].id}`)).not.toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[1].id}`)).toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[2].id}`)).not.toBeVisible()
      })
    })

    describe('when multiselectable is true', () => {
      it('maintains existing expansions if new unexpanded items are added', () => {
        const { getByText, getByTestId, rerender } = render(
          <Accordion multiselectable items={oldItems} />
        )
        fireEvent.click(getByText(oldItems[0].title as string))
        fireEvent.click(getByText(oldItems[1].title as string))

        rerender(
          <Accordion multiselectable items={[...oldItems, ...newItems]} />
        )
        expect(getByTestId(`accordionItem_${oldItems[0].id}`)).toBeVisible()
        expect(getByTestId(`accordionItem_${oldItems[1].id}`)).toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[0].id}`)).not.toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[1].id}`)).not.toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[2].id}`)).not.toBeVisible()
      })

      it('maintains existing expansions if new expanded items are added', () => {
        const { getByText, getByTestId, rerender } = render(
          <Accordion multiselectable items={oldItems} />
        )
        fireEvent.click(getByText(oldItems[0].title as string))
        fireEvent.click(getByText(oldItems[1].title as string))

        // The last expanded item "wins" if multiple new items have expanded:true
        newItems[1].expanded = true
        newItems[2].expanded = true
        rerender(
          <Accordion multiselectable items={[...oldItems, ...newItems]} />
        )
        expect(getByTestId(`accordionItem_${oldItems[0].id}`)).toBeVisible()
        expect(getByTestId(`accordionItem_${oldItems[1].id}`)).toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[0].id}`)).not.toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[1].id}`)).toBeVisible()
        expect(getByTestId(`accordionItem_${newItems[2].id}`)).toBeVisible()
      })
    })
  })

  describe('bordered prop', () => {
    it('applies usa-accordion--bordered class when bordered is true', () => {
      const { getByTestId } = render(
        <Accordion items={testItems} bordered={true} />
      )
      expect(getByTestId('accordion')).toHaveClass('usa-accordion--bordered')
    })

    it('does not apply usa-accordion--bordered class when bordered is false', () => {
      const { getByTestId } = render(
        <Accordion items={testItems} bordered={false} />
      )
      expect(getByTestId('accordion')).not.toHaveClass(
        'usa-accordion--bordered'
      )
    })

    it('does not apply usa-accordion--bordered class by default', () => {
      const { getByTestId } = render(<Accordion items={testItems} />)
      expect(getByTestId('accordion')).not.toHaveClass(
        'usa-accordion--bordered'
      )
      expect(getByTestId('accordion')).toHaveClass('usa-accordion')
    })
  })

  describe('data-allow-multiple attribute', () => {
    it('sets data-allow-multiple when multiselectable is true', () => {
      const { getByTestId } = render(
        <Accordion items={testItems} multiselectable={true} />
      )
      expect(getByTestId('accordion')).toHaveAttribute(
        'data-allow-multiple',
        'true'
      )
    })

    it('does not set data-allow-multiple when multiselectable is false', () => {
      const { getByTestId } = render(
        <Accordion items={testItems} multiselectable={false} />
      )
      expect(getByTestId('accordion')).not.toHaveAttribute(
        'data-allow-multiple'
      )
    })

    it('does not set data-allow-multiple by default', () => {
      const { getByTestId } = render(<Accordion items={testItems} />)
      expect(getByTestId('accordion')).not.toHaveAttribute(
        'data-allow-multiple'
      )
    })
  })

  describe('ARIA attributes on accordion buttons', () => {
    it('sets aria-expanded to false on collapsed items', () => {
      const { getByTestId } = render(<Accordion items={testItems} />)
      const button = getByTestId(`accordionButton_${testItems[0].id}`)
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('sets aria-expanded to true when an item is expanded', () => {
      const { getByTestId, getByText } = render(
        <Accordion items={testItems} />
      )
      fireEvent.click(getByText(testItems[0].title as string))
      const button = getByTestId(`accordionButton_${testItems[0].id}`)
      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('updates aria-expanded when toggling items', () => {
      const { getByTestId, getByText } = render(
        <Accordion items={testItems} />
      )
      const button = getByTestId(`accordionButton_${testItems[0].id}`)

      fireEvent.click(getByText(testItems[0].title as string))
      expect(button).toHaveAttribute('aria-expanded', 'true')

      fireEvent.click(getByText(testItems[0].title as string))
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('sets aria-controls to the matching content id', () => {
      const { getByTestId } = render(<Accordion items={testItems} />)
      testItems.forEach((item) => {
        const button = getByTestId(`accordionButton_${item.id}`)
        expect(button).toHaveAttribute('aria-controls', item.id)
      })
    })
  })

  describe('accordion button data-testid', () => {
    it('renders buttons with correct data-testid pattern', () => {
      const { getByTestId } = render(<Accordion items={testItems} />)
      testItems.forEach((item) => {
        expect(getByTestId(`accordionButton_${item.id}`)).toBeInTheDocument()
      })
    })
  })

  describe('with ReactNode title', () => {
    it('renders a React element as the title', () => {
      const customItems: AccordionItemProps[] = [
        {
          title: <span data-testid="custom-title">Custom Title Content</span>,
          content: <p>Some content</p>,
          expanded: false,
          id: 'reactnode-title',
          headingLevel: 'h4',
        },
      ]
      const { getByTestId } = render(<Accordion items={customItems} />)
      expect(getByTestId('custom-title')).toBeInTheDocument()
      expect(getByTestId('custom-title')).toHaveTextContent(
        'Custom Title Content'
      )
    })
  })

  describe('className applied to AccordionItem heading and content', () => {
    const classNameItems: AccordionItemProps[] = [
      {
        title: 'Test Item',
        content: <p>Content</p>,
        expanded: false,
        id: 'cls-test',
        className: 'myItemClass',
        headingLevel: 'h4',
      },
    ]

    it('applies className to the heading element', () => {
      const { getByRole } = render(<Accordion items={classNameItems} />)
      const heading = getByRole('heading', { level: 4 })
      expect(heading).toHaveClass('usa-accordion__heading')
      expect(heading).toHaveClass('myItemClass')
    })

    it('applies className to the content element', () => {
      const { getByTestId } = render(<Accordion items={classNameItems} />)
      const content = getByTestId('accordionItem_cls-test')
      expect(content).toHaveClass('usa-accordion__content')
      expect(content).toHaveClass('usa-prose')
      expect(content).toHaveClass('myItemClass')
    })
  })

  describe('single item accordion', () => {
    const singleItem: AccordionItemProps[] = [
      {
        title: 'Only Item',
        content: <p>Only content</p>,
        expanded: false,
        id: 'single',
        headingLevel: 'h4',
      },
    ]

    it('renders a single item', () => {
      const { getByTestId, getByText } = render(
        <Accordion items={singleItem} />
      )
      expect(getByTestId('accordion')).toBeInTheDocument()
      expect(getByText('Only Item')).toBeInTheDocument()
      expect(getByTestId('accordionItem_single')).not.toBeVisible()
    })

    it('toggles the single item open and closed', () => {
      const { getByTestId, getByText } = render(
        <Accordion items={singleItem} />
      )
      fireEvent.click(getByText('Only Item'))
      expect(getByTestId('accordionItem_single')).toBeVisible()

      fireEvent.click(getByText('Only Item'))
      expect(getByTestId('accordionItem_single')).not.toBeVisible()
    })
  })

  describe('handleToggle receives click event', () => {
    it('passes the mouse event to the custom handler', () => {
      const handleToggle = vi.fn()
      const customItems: AccordionItemProps[] = [
        {
          title: 'Click Me',
          content: <p>Content</p>,
          expanded: false,
          id: 'event-test',
          headingLevel: 'h4',
          handleToggle,
        },
      ]
      const { getByText } = render(<Accordion items={customItems} />)
      fireEvent.click(getByText('Click Me'))
      expect(handleToggle).toHaveBeenCalledTimes(1)
      expect(handleToggle).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'click' })
      )
    })

    it('still toggles the item when a custom handler is provided', () => {
      const handleToggle = vi.fn()
      const customItems: AccordionItemProps[] = [
        {
          title: 'Click Me',
          content: <p>Content</p>,
          expanded: false,
          id: 'event-test',
          headingLevel: 'h4',
          handleToggle,
        },
      ]
      const { getByText, getByTestId } = render(
        <Accordion items={customItems} />
      )
      fireEvent.click(getByText('Click Me'))
      expect(getByTestId('accordionItem_event-test')).toBeVisible()
    })
  })

  describe('accordion button type attribute', () => {
    it('renders buttons with type="button"', () => {
      const { getByTestId } = render(<Accordion items={testItems} />)
      testItems.forEach((item) => {
        const button = getByTestId(`accordionButton_${item.id}`)
        expect(button).toHaveAttribute('type', 'button')
      })
    })
  })

  describe('empty items array', () => {
    it('renders an empty accordion div with no children', () => {
      const { getByTestId } = render(<Accordion items={[]} />)
      const accordion = getByTestId('accordion')
      expect(accordion).toBeInTheDocument()
      expect(accordion).toHaveClass('usa-accordion')
      expect(accordion.childElementCount).toBe(0)
    })
  })

  describe('spread div props', () => {
    it('does not forward extra div props to the root element (known bug)', () => {
      const { getByTestId } = render(
        <Accordion items={testItems} id="my-accordion" aria-label="My Accordion" />
      )
      const accordion = getByTestId('accordion')
      // The AccordionProps type extends JSX.IntrinsicElements['div'], so callers
      // can pass standard div attributes, but the component does not spread them
      // onto the rendered <div>. This test documents the current (buggy) behavior.
      expect(accordion).not.toHaveAttribute('id', 'my-accordion')
      expect(accordion).not.toHaveAttribute('aria-label', 'My Accordion')
    })
  })

  describe('className combined with bordered', () => {
    it('applies both custom className and usa-accordion--bordered', () => {
      const { getByTestId } = render(
        <Accordion items={testItems} bordered={true} className="myCustomClass" />
      )
      const accordion = getByTestId('accordion')
      expect(accordion).toHaveClass('usa-accordion')
      expect(accordion).toHaveClass('usa-accordion--bordered')
      expect(accordion).toHaveClass('myCustomClass')
    })
  })
})
