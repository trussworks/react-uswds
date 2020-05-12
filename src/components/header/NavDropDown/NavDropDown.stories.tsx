import React, { useState } from 'react'
import { NavDropDown } from './NavDropDown'
import { Header } from '../Header/Header'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'

export default {
  title: 'Header/NavDropDown',
  parameters: {
    info: `
USWDS 2.0 NavDropDown component

Source: https://designsystem.digital.gov/components/header/
`,
  },
}

const testLabel = 'Nav Label'

const mockToggle = (): void => {
  /* mock submit fn */
}

export const defaultDropDownMenu = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState([false, false])

  const onToggle = (index: number): void => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = [false, false]
      newIsOpen[index] = !prevIsOpen[index]
      return newIsOpen
    })
  }

  return (
    <Header>
      <div className="usa-nav-container">
        <div className="usa-navbar"></div>
        <PrimaryNav
          items={[
            <NavDropDown
              key="testItemOne"
              label={testLabel}
              id="test"
              isOpen={isOpen[0]}
              onToggle={(): void => {
                onToggle(0)
              }}
            />,
            <NavDropDown
              key="testItemTwo"
              label={testLabel}
              id="testTwo"
              isOpen={isOpen[1]}
              onToggle={(): void => {
                onToggle(1)
              }}
            />,
          ]}
          onToggleMobileNav={mockToggle}
        />
      </div>
    </Header>
  )
}
