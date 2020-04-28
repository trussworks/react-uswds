import React from 'react'
import classnames from 'classnames'

type FooterProps = {
  className?: string
  big?: boolean
  medium?: boolean
  slim?: boolean
  /**
   * Content in upper footer section, e.g. navigation, searchbar, signup form
   */
  primary: React.ReactNode
  /**
   * Content in lower footer section, e.g. contact information
   */
  secondary: React.ReactNode
}

// TODO: Add in "Return to Top" handling
export const Footer = (
  props: FooterProps & React.HTMLAttributes<HTMLElement>
): React.ReactElement => {
  const { className, big, medium, slim, primary, secondary } = props

  const classes = classnames(
    'usa-footer',
    {
      'usa-footer--big': big,
      'usa-footer--medium': medium,
      'usa-footer--slim': slim,
    },
    className
  )

  return (
    <footer className={classes}>
      <div className="usa-footer__primary-section">{primary}</div>

      <div className="usa-footer__secondary-section">
        <div className="grid-container">{secondary}</div>
      </div>
    </footer>
  )
}
