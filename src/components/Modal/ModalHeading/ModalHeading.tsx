import React from 'react'
import classnames from 'classnames'

interface ModalHeadingProps {
  children?: React.ReactNode | string
  className?: string
}

export const ModalHeading = ({
  children,
  className,
  ...headingProps
}: ModalHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >): React.ReactElement => {
  const classes = classnames('usa-modal__heading', className)

  return (
    <h2 className={classes} {...headingProps}>
      {children}
    </h2>
  )
}
