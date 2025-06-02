import React, { type JSX } from 'react'
import { Accordion, AccordionItemProps } from './Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Accordion component

Source: https://designsystem.digital.gov/components/accordion/
`,
      },
    },
  },
}

const testItems: AccordionItemProps[] = [
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
    headingLevel: 'h4',
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
    headingLevel: 'h4',
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
    headingLevel: 'h4',
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
    headingLevel: 'h4',
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
    headingLevel: 'h4',
  },
]

export const Borderless = (): JSX.Element => (
  <Accordion bordered={false} items={testItems} />
)

export const Bordered = (): JSX.Element => (
  <Accordion bordered={true} items={testItems} />
)

export const Multiselectable = (): JSX.Element => (
  <Accordion items={testItems} multiselectable={true} />
)

const customTestItems: AccordionItemProps[] = [
  {
    title: (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        Title text <span>Status</span>
      </div>
    ),
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
    className: 'myCustomAccordionItem',
    headingLevel: 'h4',
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
    headingLevel: 'h4',
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
    headingLevel: 'h4',
  },
]

export const CustomTitles = (): JSX.Element => (
  <Accordion bordered={true} items={customTestItems} />
)
