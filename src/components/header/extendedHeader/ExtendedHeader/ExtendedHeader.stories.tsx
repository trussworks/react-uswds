import React, { useState } from 'react'
import { ExtendedHeader } from './ExtendedHeader'

import { Title } from '../../Title/Title'
import { ExtendedNav } from '../ExtendedNav/ExtendedNav'
import { Search } from '../../../Search/Search'
import { DropDownLink } from '../../DropDownMenu/DropDownMenu'
import { ExtendedDropDownLink } from '../../ExtendedDropDownMenu/ExtendedDropDownMenu'
import { NavButton } from '../../NavButton/NavButton'

export default {
  title: 'ExtendedHeader',
  parameters: {
    info: `
USWDS 2.0 ExtendedHeader component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const [isOpen, setIsOpen] = useState(false)

const onToggle = (): void => setIsOpen((prvIsOpen) => !prvIsOpen)

const testDropDownLinkItems = [
  <a href="#linkOne" key="one">
    <span>Simple link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

const testItemsDropDownLink = [
  <DropDownLink
    key="one"
    id="one"
    label="Label"
    items={testDropDownLinkItems}
    isOpen={isOpen}
    onToggle={onToggle}
  />,
  <a href="#two" key="two">
    Parent link
  </a>,
  <a href="#three" key="three">
    Parent link
  </a>,
]

const testItemsExtended = [
  [
    <a href="#linkOne" key="one">
      Simple link
    </a>,
    <a href="#linkTwo" key="two">
      Simple link
    </a>,
  ],
  [
    <a href="#linkThree" key="three">
      Simple link Two
    </a>,
    <a href="#linkFour" key="four">
      Simple link Two
    </a>,
  ],
]

const testItemsExtendedDropDownLink = [
  <ExtendedDropDownLink
    key="one"
    id="one"
    label="Label"
    items={testItemsExtended}
    isOpen={isOpen}
    onToggle={onToggle}
  />,
  <a href="#two" key="two">
    Parent link
  </a>,
  <a href="#three" key="three">
    Parent link
  </a>,
]

const mockSubmit = (): void => {
  /* mock submit fn */
}

export const basicExtendedHeader = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)
  return (
    <>
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
      <ExtendedHeader>
        <div className="usa-navbar">
          <Title>Project Title</Title>
          <NavButton onClick={onClick} className="usa-menu-btn">
            Menu
          </NavButton>
        </div>
        <ExtendedNav
          primaryItems={testItemsDropDownLink}
          secondaryItems={testDropDownLinkItems}
          mobileExpanded={expanded}
          onClick={onClick}>
          <Search small onSubmit={mockSubmit} />
        </ExtendedNav>
      </ExtendedHeader>
    </>
  )
}

export const extendedHeaderWithMegaMenu = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)
  return (
    <>
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
      <ExtendedHeader>
        <div className="usa-navbar">
          <Title>Project Title</Title>
          <NavButton onClick={onClick} className="usa-menu-btn">
            Menu
          </NavButton>
        </div>
        <ExtendedNav
          primaryItems={testItemsExtendedDropDownLink}
          secondaryItems={testDropDownLinkItems}
          mobileExpanded={expanded}
          onClick={onClick}>
          <Search small onSubmit={mockSubmit} />
        </ExtendedNav>
      </ExtendedHeader>
    </>
  )
}
