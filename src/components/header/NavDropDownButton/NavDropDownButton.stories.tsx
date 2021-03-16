import React, { useState } from 'react'
import { NavDropDownButton } from './NavDropDownButton'
import { Header } from '../Header/Header'
import { PrimaryNav } from '../PrimaryNav/PrimaryNav'

export default {
  title: 'Components/Header/NavDropDownButton',
  component: NavDropDownButton,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 NavDropDownButton component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
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
      // eslint-disable-next-line security/detect-object-injection
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
            <NavDropDownButton
              key="testItemOne"
              label={testLabel}
              menuId="test"
              isOpen={isOpen[0]}
              onToggle={(): void => {
                onToggle(0)
              }}
            />,
            <NavDropDownButton
              key="testItemTwo"
              label={testLabel}
              menuId="testTwo"
              isOpen={isOpen[1]}
              onToggle={(): void => {
                onToggle(1)
              }}
              isCurrent={true}
            />,
          ]}
          onToggleMobileNav={mockToggle}
        />
      </div>
    </Header>
  )
}
