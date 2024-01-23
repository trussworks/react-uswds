import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type ModalHeadingProps = React.HTMLProps<HTMLHeadingElement>

export const ModalHeadingForwardRef: React.ForwardRefRenderFunction<HTMLHeadingElement, ModalHeadingProps> = ({
  className,
  children,
  ...headingProps
}, ref): React.ReactElement => {
  const classes = classnames('usa-modal__heading', className)

  return (
    <h2 ref={ref} className={classes} {...headingProps}>
      {children}
    </h2>
  )
}

export const ModalHeading = forwardRef(ModalHeadingForwardRef)

export default ModalHeading