import React, { useState } from 'react'
import { Header } from './Header'

import { Title } from '../../Title/Title'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'
import { SearchInput } from '../../SearchInput/SearchInput'
import { DropDownLink } from '../DropDownMenu/DropDownMenu'
import { ExtendedDropDownLink } from '../ExtendedDropDownMenu/ExtendedDropDownMenu'
import { NavButton } from '../NavButton/NavButton'

export default {
  title: 'Header',
  parameters: {
    info: `
USWDS 2.0 Header component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testDropDownLinkItems = [
  <a href="#linkOne" key="one">
    <span>Current link</span>
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
  />,
  <a href="#two" key="two">
    Parent link
  </a>,
  <a href="#three" key="three">
    Parent link
  </a>,
]

export const BasicHeader = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)
  return (
    <>
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
      <Header>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title title="Project Title" link="#testlink"></Title>
            <NavButton onClick={onClick} className="usa-menu-btn">
              Menu
            </NavButton>
          </div>
          <PrimaryNav
            items={testItemsDropDownLink}
            mobileExpanded={expanded}
            onClick={onClick}>
            <SearchInput></SearchInput>
          </PrimaryNav>
        </div>
      </Header>
    </>
  )
}

export const BasicHeaderWithMegaMenu = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded)
  return (
    <>
      <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
      <Header>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title title="Project Title" link="#testlink"></Title>
            <NavButton onClick={onClick} className="usa-menu-btn">
              Menu
            </NavButton>
          </div>
          <PrimaryNav
            items={testItemsExtendedDropDownLink}
            mobileExpanded={expanded}
            onClick={onClick}>
            <SearchInput></SearchInput>
          </PrimaryNav>
        </div>
      </Header>
    </>
  )
}
