import React from 'react'
import { Header } from './Header'

import { Title } from '../../Title/Title'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'
import { SearchInput } from '../../SearchInput/SearchInput'
import { DropDownLink } from '../DropDownMenu/DropDownMenu'
import { ExtendedDropDownLink } from '../ExtendedDropDownMenu/ExtendedDropDownMenu'

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

export const defaultBasicHeader = (): React.ReactElement => (
  <Header>
    {/* Should the section below be within the primary nav? */}
    <div className="usa-nav-container">
      <div className="usa-navbar">
        <Title title="Project Title" link="#testlink"></Title>
        {/* ToDo implement menu button and mobile behavior */}
        <button className="usa-menu-btn">Menu</button>
      </div>
      {/* TODO Determine why clicking on the button doesn't open the nav */}
      <PrimaryNav items={testItemsDropDownLink}>
        <SearchInput></SearchInput>
      </PrimaryNav>
    </div>
  </Header>
)

export const defaultBasicHeaderWithExtendedMenu = (): React.ReactElement => (
  <Header>
    {/* Should the section below be within the primary nav? */}
    <div className="usa-nav-container">
      <div className="usa-navbar">
        <Title title="Project Title" link="#testlink"></Title>
        {/* ToDo implement menu button and mobile behavior */}
        <button className="usa-menu-btn">Menu</button>
      </div>
      {/* TODO Determine why clicking on the button doesn't open the nav */}
      <PrimaryNav items={testItemsExtendedDropDownLink}>
        <SearchInput></SearchInput>
      </PrimaryNav>
    </div>
  </Header>
)
