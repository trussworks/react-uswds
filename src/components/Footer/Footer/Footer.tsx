import React from 'react'
import classnames from 'classnames'
import { deprecationWarning } from '../../../deprecation'

type FooterProps = {
  size?: 'big' | 'medium' | 'slim'
  /**
   * @deprecated since 1.6.0, use size
   */
  big?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
  medium?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
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
  size,
  big,
  medium,
  slim,
  returnToTop,
  primary,
  secondary,
  ...footerAttributes
}: FooterProps & React.HTMLAttributes<HTMLElement>): React.ReactElement => {
  if (big) {
    deprecationWarning('Footer property big is deprecated.  Use size')
  }
  if (medium) {
    deprecationWarning('Footer property medium is deprecated.  Use size')
  }
  if (slim) {
    deprecationWarning('Footer property slim is deprecated.  Use size')
  }

  const isBig = size ? size === 'big' : big
  const isMedium = size ? size === 'medium' : medium
  const isSlim = size ? size === 'slim' : slim
  const classes = classnames(
    'usa-footer',
    {
      'usa-footer--big': isBig,
      'usa-footer--medium': isMedium,
      'usa-footer--slim': isSlim,
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
