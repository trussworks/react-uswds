import React, { forwardRef } from 'react'
import classnames from 'classnames'

import { HeadingLevel } from '../../../types/headingLevel'

export type BaseAlertHeadingProps = {
  headingLevel: HeadingLevel
}

export type AlertHeadingProps = React.ComponentPropsWithRef<typeof AlertHeading>

export type AlertHeadingRef = React.ComponentRef<typeof AlertHeading>

export const AlertHeadingForwardRef: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  BaseAlertHeadingProps & React.ComponentPropsWithoutRef<'div'>
> = (
  {
    className,
    headingLevel,
    ...props
  },
  ref
): React.ReactElement => {
  const classes = classnames(
    "usa-alert__heading",
    className
  )
  const Heading = headingLevel

  return (
      <Heading ref={ref} className={classes} data-testid="alertHeading" {...props} />
  )
}

const AlertHeading = forwardRef(AlertHeadingForwardRef)

export default AlertHeading
