import React from 'react'
import classnames from 'classnames'
import GridContainer from '../../grid/GridContainer/GridContainer.js'

export interface BaseFooterProps {
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

export type FooterProps = BaseFooterProps & JSX.IntrinsicElements['footer']

const Footer = ({
  size,
  returnToTop,
  primary,
  secondary,
  ...footerAttributes
}: FooterProps): React.ReactElement => {
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
        <GridContainer>{secondary}</GridContainer>
      </div>
    </footer>
  )
}

export default Footer
