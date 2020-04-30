import React from 'react'
import classnames from 'classnames'

type FooterProps = {
  big?: boolean
  medium?: boolean
  slim?: boolean
  /**
   * Component for "return to top" button/handling
   */
  returnToTop?: React.ReactNode
  /**
   * Content in upper footer section, e.g. navigation, searchbar, signup form
   */
  primary: React.ReactNode
  /**
   * Content in lower footer section, e.g. contact information
   */
  secondary: React.ReactNode
}

export const Footer = ({
  big,
  medium,
  slim,
  returnToTop,
  primary,
  secondary,
  ...footerAttributes
}: FooterProps & React.HTMLAttributes<HTMLElement>): React.ReactElement => {
  const classes = classnames(
    'usa-footer',
    {
      'usa-footer--big': big,
      'usa-footer--medium': medium,
      'usa-footer--slim': slim,
    },
    footerAttributes.className
  )

  return (
    <footer className={classes}>
      {returnToTop && returnToTop}
      <div className="usa-footer__primary-section">{primary}</div>

      <div className="usa-footer__secondary-section">
        <div className="grid-container">{secondary}</div>
      </div>
    </footer>
  )
}
