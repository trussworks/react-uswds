import React from 'react'
import classnames from 'classnames'

export const ModalHeading = ({
  className,
  children,
  ...headingProps
}: React.HTMLProps<HTMLHeadingElement>): React.ReactElement => {
  const classes = classnames('usa-modal__heading', className)

  return (
    <h2 className={classes} {...headingProps}>
      {children}
    </h2>
  )
}
