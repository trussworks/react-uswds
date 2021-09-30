import React, { DetailedHTMLProps } from 'react'
import classnames from 'classnames'

interface ModalHeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  children?: React.ReactNode
}

type HeadingModalHeadingProps = ModalHeadingProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadElement>,
    HTMLHeadingElement
  >

export const ModalHeading = ({
  type,
  className,
  children,
  ...headingProps
}: HeadingModalHeadingProps): React.ReactElement => {
  const classes = classnames('usa-modal__heading', className)
  const Tag = type
  return (
    <Tag className={classes} data-testid="modalHeading">
      {children}
    </Tag>
  )
}

export default ModalHeading
