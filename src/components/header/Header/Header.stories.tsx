import React, { useState } from 'react'
import { Header } from './Header'

import { Title } from '../Title/Title'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'
import { Search } from '../../Search/Search'
import { Menu } from '../Menu/Menu'
import { MegaMenu } from '../MegaMenu/MegaMenu'
import { NavMenuButton } from '../NavMenuButton/NavMenuButton'
import { NavDropDownButton } from '../NavDropDownButton/NavDropDownButton'
import { ExtendedNav } from '../ExtendedNav/ExtendedNav'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

const onToggle = (
  index: number,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean[]>>
): void => {
  setIsOpen((prevIsOpen) => {
    const newIsOpen = [false, false]
    // eslint-disable-next-line security/detect-object-injection
    newIsOpen[index] = !prevIsOpen[index]
    return newIsOpen
  })
}
export const BasicHeader = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)

  const testMenuItems = [
    <a href="#linkOne" key="one">
      Current link
    </a>,
    <a href="#linkTwo" key="two">
      Simple link Two
    </a>,
  ]

  const [isOpen, setIsOpen] = useState([false, false])

  const testItemsMenu = [
    <>
      <NavDropDownButton
        menuId="testDropDownOne"
        onToggle={(): void => {
          onToggle(0, setIsOpen)
        }}
        isOpen={isOpen[0]}
        label="Nav Label"
        isCurrent={true}
      />
      <Menu
        key="one"
        items={testMenuItems}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </>,
    <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
  ]

  return (
    <>
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>Project Title</Title>
            <NavMenuButton onClick={onClick} label="Menu" />
          </div>
          <PrimaryNav
            items={testItemsMenu}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}>
            <Search size="small" onSubmit={mockSubmit} />
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

  const testItemsMegaMenu = [
    <>
      <NavDropDownButton
        onToggle={(): void => {
          onToggle(0, setIsOpen)
        }}
        menuId="testDropDownOne"
        isOpen={isOpen[0]}
        label="Nav Label"
        isCurrent={true}
      />
      <MegaMenu
        key="one"
        items={testItemsMegaOne}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </>,
    <>
      <NavDropDownButton
        onToggle={(): void => {
          onToggle(1, setIsOpen)
        }}
        menuId="testDropDownTwo"
        isOpen={isOpen[1]}
        label="Nav Label"
      />
      <MegaMenu
        key="one"
        items={testItemsMegaTwo}
        isOpen={isOpen[1]}
        id="testDropDownTwo"
      />
    </>,
    <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
  ]

  return (
    <>
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
      <Header basic={true} basicWithMegaMenu={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>Project Title</Title>
            <NavMenuButton onClick={onClick} label="Menu" />
          </div>
          <PrimaryNav
            items={testItemsMegaMenu}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}>
            <Search size="small" onSubmit={mockSubmit} />
          </PrimaryNav>
        </div>
      </Header>
    </>
  )
}

export const extendedHeader = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)
  const [isOpen, setIsOpen] = useState([false])

  const testMenuItems = [
    <a href="#linkOne" key="one">
      Simple link one
    </a>,
    <a href="#linkTwo" key="two">
      Simple link two
    </a>,
  ]

  const testItemsMenu = [
    <>
      <NavDropDownButton
        onToggle={(): void => {
          onToggle(0, setIsOpen)
        }}
        menuId="testDropDownOne"
        isOpen={isOpen[0]}
        label="Nav Label"
        isCurrent={true}
      />
      <Menu
        key="one"
        items={testMenuItems}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </>,
    <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
  ]
  return (
    <>
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
      <Header extended={true}>
        <div className="usa-navbar">
          <Title>Project Title</Title>
          <NavMenuButton onClick={onClick} label="Menu" />
        </div>
        <ExtendedNav
          primaryItems={testItemsMenu}
          secondaryItems={testMenuItems}
          mobileExpanded={expanded}
          onToggleMobileNav={onClick}>
          <Search size="small" onSubmit={mockSubmit} />
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
      Simple link one
    </a>,
    <a href="#linkTwo" key="two">
      Simple link two
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

  const testItemsMenu = [
    <>
      <NavDropDownButton
        onToggle={(): void => {
          onToggle(0, setIsOpen)
        }}
        menuId="testDropDownOne"
        isOpen={isOpen[0]}
        label="Nav Label"
        isCurrent={true}
      />
      <MegaMenu
        key="one"
        items={testItemsMegaOne}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </>,
    <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>,
  ]
  return (
    <>
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
      <Header extended={true}>
        <div className="usa-navbar">
          <Title>Project Title</Title>
          <NavMenuButton onClick={onClick} label="Menu" />
        </div>
        <ExtendedNav
          primaryItems={testItemsMenu}
          secondaryItems={testMenuItems}
          mobileExpanded={expanded}
          onToggleMobileNav={onClick}>
          <Search size="small" onSubmit={mockSubmit} />
        </ExtendedNav>
      </Header>
    </>
  )
}
