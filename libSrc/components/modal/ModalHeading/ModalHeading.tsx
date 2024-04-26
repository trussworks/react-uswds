import React from 'react'
import classnames from 'classnames'

export interface BaseModalHeadingProps {}

export type ModalHeadingProps = BaseModalHeadingProps &
  JSX.IntrinsicElements['h1']

const ModalHeading = ({
  className,
  children,
  ...headingProps
}: ModalHeadingProps): React.ReactElement => {
  const classes = classnames('usa-modal__heading', className)

  return (
    <h2 className={classes} {...headingProps}>
      {children}
    </h2>
  )
}

export default ModalHeading
