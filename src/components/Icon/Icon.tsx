import React from 'react'
import classnames from 'classnames'

import logoImg from 'uswds/src/img/logo-img.png'
import dotGovIcon from 'uswds/src/img/icon-dot-gov.svg'

interface IconProps {
  name: string
  size?: 3 | 4 | 5 | 6 | 7 | 8 | 9
  className?: string
}
export const Icon = ({
  name,
  size,
  className,
  ...iconProps
}: IconProps & JSX.IntrinsicElements['svg']): React.ReactElement => {
  const filePath = `https://github.com/uswds/uswds/blob/develop/src/img/usa-icons/${name}.svg`
  // const filePath = `uswds/src/img/${name}.svg`
  // const filePath = `/assets/img/sprite.svg#${name}`
  // console.log('file path: ', filePath)

  const classes = classnames('usa-icon', className)

  return <img alt="" src={filePath} />
  // return (
  //   <>
  //     <svg
  //       data-testid="iconComponent"
  //       className={classes}
  //       height={size}
  //       {...iconProps}>
  //       <use xlinkHref={filePath}>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 24 24"
  //           id="accessibility_new">
  //           <path d="M0 0h24v24H0z" fill="none"></path>
  //           <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
  //         </svg>
  //       </use>
  //     </svg>
  //   </>
  // )
}
export default Icon
