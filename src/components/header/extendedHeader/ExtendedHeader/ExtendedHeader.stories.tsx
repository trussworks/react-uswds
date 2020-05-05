import React, { useState } from 'react'
import { ExtendedHeader } from './ExtendedHeader'

import { Title } from '../../Title/Title'
import { ExtendedNav } from '../ExtendedNav/ExtendedNav'
import { Search } from '../../../Search/Search'
import { Menu } from '../../Menu/Menu'
import { MegaMenu } from '../../MegaMenu/MegaMenu'
import { NavButton } from '../../NavButton/NavButton'
import { NavDropDown } from '../../NavDropDown/NavDropDown'

export default {
  title: 'ExtendedHeader',
  parameters: {
    info: `
USWDS 2.0 ExtendedHeader component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

export const basicExtendedHeader = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)

  const testMenuItems = [
    <a href="#linkOne" key="one">
      <span>Simple link one</span>
    </a>,
    <a href="#linkTwo" key="two">
      <span>Simple link two</span>
    </a>,
  ]

  const [isOpen, setIsOpen] = useState([false, false])

  const onToggle = (index: number): void => {
    setIsOpen((prvIsOpen) => {
      const newIsOpen = [false]
      newIsOpen[index] = !prvIsOpen[index]
      return newIsOpen
    })
  }

  const testItemsMenu = [
    <>
      <NavDropDown
        onToggle={(): void => {
          onToggle(0)
        }}
        id="testDropDownOne"
        isOpen={isOpen[0]}
        label="Nav Label"
      />
      <Menu key="one" items={testMenuItems} isOpen={isOpen[0]} />
    </>,
    <a href="#two" key="two">
      Parent link
    </a>,
    <a href="#three" key="three">
      Parent link
    </a>,
  ]
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
          primaryItems={testItemsMenu}
          secondaryItems={testMenuItems}
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

  const testMenuItems = [
    <a href="#linkOne" key="one">
      <span>Simple link one</span>
    </a>,
    <a href="#linkTwo" key="two">
      <span>Simple link two</span>
    </a>,
  ]

  const testItemsMegaOne = [
    [
      <a href="#linkOne" key="one">
        Simple link one
      </a>,
      <a href="#linkTwo" key="two">
        Simple link two
      </a>,
    ],
    [
      <a href="#linkThree" key="three">
        Simple link three
      </a>,
      <a href="#linkFour" key="four">
        Simple link four
      </a>,
    ],
  ]

  const [isOpen, setIsOpen] = useState([false, false])

  const onToggle = (index: number): void => {
    setIsOpen((prvIsOpen) => {
      const newIsOpen = [false]
      newIsOpen[index] = !prvIsOpen[index]
      return newIsOpen
    })
  }

  const testItemsMenu = [
    <>
      <NavDropDown
        onToggle={(): void => {
          onToggle(0)
        }}
        id="testDropDownOne"
        isOpen={isOpen[0]}
        label="Nav Label"
      />
      <MegaMenu key="one" items={testItemsMegaOne} isOpen={isOpen[0]} />
    </>,
    <a href="#two" key="two">
      Parent link
    </a>,
    <a href="#three" key="three">
      Parent link
    </a>,
  ]
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
          primaryItems={testItemsMenu}
          secondaryItems={testMenuItems}
          mobileExpanded={expanded}
          onClick={onClick}>
          <Search small onSubmit={mockSubmit} />
        </ExtendedNav>
      </ExtendedHeader>
    </>
  )
}
