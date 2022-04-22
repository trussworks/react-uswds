import React from 'react'
import classnames from 'classnames'

type FooterProps = {
  size?: 'big' | 'medium' | 'slim'
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
  size,
  returnToTop,
  primary,
  secondary,
  ...footerAttributes
}: FooterProps & React.HTMLAttributes<HTMLElement>): React.ReactElement => {
  const classes = classnames(
    'usa-footer',
    {
      'usa-footer--big': size === 'big',
      'usa-footer--medium': size === 'medium',
      'usa-footer--slim': size === 'slim',
    },
    footerAttributes.className
  )

  return (
    <footer {...footerAttributes} className={classes}>
      {returnToTop && returnToTop}
      <div className="usa-footer__primary-section">{primary}</div>

      <div className="usa-footer__secondary-section">
        <div className="grid-container">{secondary}</div>
      </div>
    </footer>
  )
}
