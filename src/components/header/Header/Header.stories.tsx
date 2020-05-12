import React, { useState } from 'react'
import { Header } from './Header'

import { Title } from '../Title/Title'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'
import { Search } from '../../Search/Search'
import { Menu } from '../Menu/Menu'
import { MegaMenu } from '../MegaMenu/MegaMenu'
import { NavButton } from '../NavButton/NavButton'
import { NavDropDown } from '../NavDropDown/NavDropDown'
import { ExtendedNav } from '../ExtendedNav/ExtendedNav'

export default {
  title: 'Header/Header',
  parameters: {
    info: `
USWDS 2.0 Header component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

export const BasicHeader = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)

  const testMenuItems = [
    <a href="#linkOne" key="one">
      <span>Current link</span>
    </a>,
    <a href="#linkTwo" key="two">
      <span>Simple link Two</span>
    </a>,
  ]

  const [isOpen, setIsOpen] = useState([false, false])

  const onToggle = (index: number): void => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = Array(prevIsOpen.length).fill('false')
      newIsOpen[index] = !prevIsOpen[index]
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
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>Project Title</Title>
            <NavButton onClick={onClick} className="usa-menu-btn">
              Menu
            </NavButton>
          </div>
          <PrimaryNav
            items={testItemsMenu}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}>
            <Search small onSubmit={mockSubmit} />
          </PrimaryNav>
        </div>
      </Header>
    </>
  )
}

export const BasicHeaderWithMegaMenu = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)

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

  const testItemsMegaTwo = [
    [
      <a href="#linkFive" key="one">
        Simple link five
      </a>,
      <a href="#linkSix" key="two">
        Simple link six
      </a>,
    ],
    [
      <a href="#linkSeven" key="three">
        Simple link seven
      </a>,
      <a href="#linkEight" key="four">
        Simple link eight
      </a>,
    ],
  ]

  const [isOpen, setIsOpen] = useState([false, false])

  const onToggle = (index: number): void => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = [false, false]
      newIsOpen[index] = !prevIsOpen[index]
      return newIsOpen
    })
  }

  const testItemsMegaMenu = [
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
    <>
      <NavDropDown
        onToggle={(): void => {
          onToggle(1)
        }}
        id="testDropDownOne"
        isOpen={isOpen[1]}
        label="Nav Label"
      />
      <MegaMenu key="one" items={testItemsMegaTwo} isOpen={isOpen[1]} />
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
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>Project Title</Title>
            <NavButton onClick={onClick} className="usa-menu-btn">
              Menu
            </NavButton>
          </div>
          <PrimaryNav
            items={testItemsMegaMenu}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}>
            <Search small onSubmit={mockSubmit} />
          </PrimaryNav>
        </div>
      </Header>
    </>
  )
}

// TODO Add extended header stories
export const extendedHeader = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)
  const [isOpen, setIsOpen] = useState([false])

  const onToggle = (index: number): void => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = Array(prevIsOpen.length).fill('false')
      newIsOpen[index] = !prevIsOpen[index]
      return newIsOpen
    })
  }

  const testMenuItems = [
    <a href="#linkOne" key="one">
      <span>Simple link one</span>
    </a>,
    <a href="#linkTwo" key="two">
      <span>Simple link two</span>
    </a>,
  ]

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
      <Header extended={true}>
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
          onToggleMobileNav={onClick}>
          <Search small onSubmit={mockSubmit} />
        </ExtendedNav>
      </Header>
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
    setIsOpen((prevIsOpen) => {
      const newIsOpen = Array(prevIsOpen.length).fill('false')
      newIsOpen[index] = !prevIsOpen[index]
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
      <Header extended={true}>
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
          onToggleMobileNav={onClick}>
          <Search small onSubmit={mockSubmit} />
        </ExtendedNav>
      </Header>
    </>
  )
}
