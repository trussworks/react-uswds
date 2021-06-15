import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Accordion } from './Accordion'

const testItems = [
  {
    title: 'First Amendment',
    content: (
      <p>
        Congress shall make no law respecting an establishment of religion, or
        prohibiting the free exercise thereof; or abridging the freedom of
        speech, or of the press; or the right of the people peaceably to
        assemble, and to petition the Government for a redress of grievances.
      </p>
    ),
    expanded: false,
    id: '123',
  },
  {
    title: 'Second Amendment',
    content: (
      <>
        <p>
          A well regulated Militia, being necessary to the security of a free
          State, the right of the people to keep and bear Arms, shall not be
          infringed.
        </p>{' '}
        <ul>
          <li>This is a list item</li>
          <li>Another list item</li>
        </ul>
      </>
    ),
    expanded: false,
    id: 'abc',
  },
  {
    title: 'Third Amendment',
    content: (
      <p>
        No Soldier shall, in time of peace be quartered in any house, without
        the consent of the Owner, nor in time of war, but in a manner to be
        prescribed by law.
      </p>
    ),
    expanded: false,
    id: 'def',
  },
  {
    title: 'Fourth Amendment',
    content: (
      <p>
        The right of the people to be secure in their persons, houses, papers,
        and effects, against unreasonable searches and seizures, shall not be
        violated, and no Warrants shall issue, but upon probable cause,
        supported by Oath or affirmation, and particularly describing the place
        to be searched, and the persons or things to be seized.
      </p>
    ),
    expanded: false,
    id: '456',
  },
  {
    title: 'Fifth Amendment',
    content: (
      <p>
        No person shall be held to answer for a capital, or otherwise infamous
        crime, unless on a presentment or indictment of a Grand Jury, except in
        cases arising in the land or naval forces, or in the Militia, when in
        actual service in time of War or public danger; nor shall any person be
        subject for the same offence to be twice put in jeopardy of life or
        limb; nor shall be compelled in any criminal case to be a witness
        against himself, nor be deprived of life, liberty, or property, without
        due process of law; nor shall private property be taken for public use,
        without just compensation.
      </p>
    ),
    expanded: false,
    id: '789',
  },
]

describe('Accordion component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Accordion items={testItems} />)
    expect(queryByTestId('accordion')).toBeInTheDocument()
  })

  it('renders a header and content for each item', () => {
    const { getByTestId } = render(<Accordion items={testItems} />)
    const accordionEl = getByTestId('accordion')
    expect(accordionEl.childElementCount).toBe(testItems.length * 2)
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
    it('it opens', () => {
      const { getByTestId, getByText } = render(<Accordion items={testItems} />)

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[1].title))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()
    })
  })

  describe('when you toggle an open item', () => {
    it('it closes', () => {
      const { getByText, getByTestId } = render(<Accordion items={testItems} />)

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[0].title))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[0].title))

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

      fireEvent.click(getByText(testItems[3].title))
      fireEvent.click(getByText(testItems[1].title))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[4].title))
      fireEvent.click(getByText(testItems[2].title))

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

      fireEvent.click(getByText(testItems[0].title))
      fireEvent.click(getByText(testItems[1].title))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[0].title))
      fireEvent.click(getByText(testItems[3].title))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      fireEvent.click(getByText(testItems[2].title))
      fireEvent.click(getByText(testItems[4].title))

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).toBeVisible()
    })
  })

  describe('with expanded items on mount', () => {
    const testExpandedItems = [
      {
        title: 'First Amendment',
        content: (
          <p>
            Congress shall make no law respecting an establishment of religion,
            or prohibiting the free exercise thereof; or abridging the freedom
            of speech, or of the press; or the right of the people peaceably to
            assemble, and to petition the Government for a redress of
            grievances.
          </p>
        ),
        expanded: false,
        id: '123',
      },
      {
        title: 'Second Amendment',
        content: (
          <>
            <p>
              A well regulated Militia, being necessary to the security of a
              free State, the right of the people to keep and bear Arms, shall
              not be infringed.
            </p>{' '}
            <ul>
              <li>This is a list item</li>
              <li>Another list item</li>
            </ul>
          </>
        ),
        expanded: true,
        id: 'abc',
      },
      {
        title: 'Third Amendment',
        content: (
          <p>
            No Soldier shall, in time of peace be quartered in any house,
            without the consent of the Owner, nor in time of war, but in a
            manner to be prescribed by law.
          </p>
        ),
        expanded: false,
        id: 'def',
      },
      {
        title: 'Fourth Amendment',
        content: (
          <p>
            The right of the people to be secure in their persons, houses,
            papers, and effects, against unreasonable searches and seizures,
            shall not be violated, and no Warrants shall issue, but upon
            probable cause, supported by Oath or affirmation, and particularly
            describing the place to be searched, and the persons or things to be
            seized.
          </p>
        ),
        expanded: true,
        id: '456',
      },
      {
        title: 'Fifth Amendment',
        content: (
          <p>
            No person shall be held to answer for a capital, or otherwise
            infamous crime, unless on a presentment or indictment of a Grand
            Jury, except in cases arising in the land or naval forces, or in the
            Militia, when in actual service in time of War or public danger; nor
            shall any person be subject for the same offence to be twice put in
            jeopardy of life or limb; nor shall be compelled in any criminal
            case to be a witness against himself, nor be deprived of life,
            liberty, or property, without due process of law; nor shall private
            property be taken for public use, without just compensation.
          </p>
        ),
        expanded: true,
        id: '789',
      },
    ]

    it('shows the expanded items by default', () => {
      const { getByTestId } = render(<Accordion items={testExpandedItems} />)

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
    const customTestItems = [
      {
        title: 'First Amendment',
        content: (
          <p>
            Congress shall make no law respecting an establishment of religion,
            or prohibiting the free exercise thereof; or abridging the freedom
            of speech, or of the press; or the right of the people peaceably to
            assemble, and to petition the Government for a redress of
            grievances.
          </p>
        ),
        expanded: false,
        id: '123',
        className: 'myCustomAccordionItem',
      },
      {
        title: 'Second Amendment',
        content: (
          <>
            <p>
              A well regulated Militia, being necessary to the security of a
              free State, the right of the people to keep and bear Arms, shall
              not be infringed.
            </p>{' '}
            <ul>
              <li>This is a list item</li>
              <li>Another list item</li>
            </ul>
          </>
        ),
        expanded: false,
        id: 'abc',
      },
      {
        title: 'Third Amendment',
        content: (
          <p>
            No Soldier shall, in time of peace be quartered in any house,
            without the consent of the Owner, nor in time of war, but in a
            manner to be prescribed by law.
          </p>
        ),
        expanded: false,
        id: 'def',
      },
    ]

    it('passes the class onto the given AccordionItem element', () => {
      const { getByTestId } = render(<Accordion items={customTestItems} />)
      expect(getByTestId(`accordionItem_${testItems[0].id}`)).toHaveClass(
        'myCustomAccordionItem'
      )
    })
  })
})
