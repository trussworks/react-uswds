import React from 'react'
import classnames from 'classnames'
// Footer uses type LogoProps
// use interface or type for Logo props?
// type limits the shape of what can be passed in
// what's the benefit to what over the other?

type LogoProps = {
  image: React.ReactNode
}
export const Logo = ({
  image,
  ...elementAttributes
}: LogoProps & React.HtmlHTMLAttributes<HTMLElement>): React.ReactElement => {
  const classes = classnames(
    'usa-identifier__logos',
    elementAttributes.className
  )
  // <a className="usa-identifier__logo" >
  //  <img className="usa-identifier__logo-img" >
  // </a>

  // should Logo handle multiple logos? I assume yes
  return (
    <div className="">
      <>
        <div className="">{image}</div>
      </>
    </div>
  )
}
