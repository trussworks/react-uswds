import React, { type JSX } from 'react'
import classnames from 'classnames'

export type ModalHeadingProps = React.HTMLProps<HTMLHeadingElement>

export const ModalHeading = ({
  className,
  children,
  ...headingProps
}: ModalHeadingProps): JSX.Element => {
  const classes = classnames('usa-modal__heading', className)

  return (
    <h2 className={classes} {...headingProps}>
      {children}
    </h2>
  )
}
