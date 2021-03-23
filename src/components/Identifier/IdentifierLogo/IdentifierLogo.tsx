import React from 'react'
import classnames from 'classnames'
// Footer uses type LogoProps
// use interface or type for Logo props?
// type limits the shape of what can be passed in
// what's the benefit to what over the other?

type IdentifierLogoProps = {
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

  // should IdentifierLogo handle multiple logos? I assume yes
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
