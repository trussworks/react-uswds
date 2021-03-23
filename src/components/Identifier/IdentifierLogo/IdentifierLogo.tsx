import React from 'react'
import classnames from 'classnames'

export interface IdentifierLogoProps {
  image: React.ReactNode
}

export const IdentifierLogo = ({
  image,
  ...elementAttributes
}: IdentifierLogoProps &
  React.HtmlHTMLAttributes<HTMLElement>): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__logos',
    elementAttributes.className
  )
  // <a className="usa-identifier__logo" >
  //  <img className="usa-identifier__logo-img" >
  // </a>

  // should IdentifierLogo handle multiple logos?
  // no, use a map or something if multipleLogos

  /*
  Display multiple parents and logos in hierarchical order. 
  If a site has more than one parent agency, you may
  display a reference and a logo for each parent in
  hierarchical order, highest first. For example,”An official
  website of [Grandparent Department] and [Parent Agency]”.
   */
  return (
    <div className={classes}>
      <>
        <div className="">
          <a href="www.google.com" className="usa-identifier__logo">
            {image}
          </a>
        </div>
      </>
    </div>
  )
}
