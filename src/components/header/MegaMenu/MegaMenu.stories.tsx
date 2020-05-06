import React from 'react'
import { MegaMenu } from './MegaMenu'
import { Header } from '../Header/Header'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'

export default {
  title: 'Header/MegaMenu',
  parameters: {
    info: `
USWDS 2.0 MegaMenu component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testItems = [
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

export const defaultMegaMenu = (): React.ReactElement => (
  <Header>
    <div className="usa-nav-container">
      <div className="usa-navbar">
        <PrimaryNav
          items={[
            <MegaMenu items={testItems} key="testItemOne" isOpen={true} />,
          ]}
        />
      </div>
    </div>
  </Header>
)
