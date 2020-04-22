import React from 'react'
import classnames from 'classnames'
import Title from '../Title/Title'
import PrimaryNav from '../PrimaryNav/PrimaryNav'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

export const Header = (props: HeaderProps): React.ReactElement => {
  const { children, className } = props

  const classes = classnames('usa-header usa-header--basic', className)

  const testItems = [
    <a className="usa-nav__link" href="#linkOne" key="one">
      <span>Simple link</span>
    </a>,
    <a className="usa-nav__link" href="#linkTwo" key="two">
      <span>Simple link Two</span>
    </a>,
  ]

  return (
    <header data-testid="header" className={classes}>
      <div className="usa-nav-container">
        <div className="usa-navbar">
          {/* TODO Determine proper way to pass through props */}
          <Title title="Project Title" link="#testlink"></Title>
          <button className="usa-menu-btn">Menu</button>
        </div>
        {/* TODO Determine proper way to pass through props */}
        {/* TODO Determine why clicking on the button doesn't open the nav */}
        <PrimaryNav items={testItems}></PrimaryNav>
      </div>
    </header>
  )
}
