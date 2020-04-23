import React from 'react'
import { Header } from './Header'

import { Title } from '../../Title/Title'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'
import { SearchInput } from '../../SearchInput/SearchInput'
import { SubNav } from '../SubNav/SubNav'

export default {
  title: 'Header',
  parameters: {
    info: `
USWDS 2.0 Header component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testSubNavItems = [
  <a href="#linkOne" key="one">
    <span>Current link</span>
  </a>,
  <a href="#linkTwo" key="two">
    <span>Simple link Two</span>
  </a>,
]

const testItemsSubNav = [
  <SubNav key="one" label="Label" items={testSubNavItems} />,
  <a href="#two" key="two">
    Parent link
  </a>,
  <a href="#three" key="three">
    Parent link
  </a>,
]

// Determin how to show active link
export const defaultBasicHeader = (): React.ReactElement => (
  <Header>
    {/* Should the section below be within the primary nav? */}
    <div className="usa-nav-container">
      <div className="usa-navbar">
        <Title title="Project Title" link="#testlink"></Title>
        <button className="usa-menu-btn">Menu</button>
      </div>
      {/* TODO Determine why clicking on the button doesn't open the nav */}
      <PrimaryNav items={testItemsSubNav}>
        <SearchInput></SearchInput>
      </PrimaryNav>
    </div>
  </Header>
)
