import React, { forwardRef } from 'react'

import AlertBody from '../AlertBody/AlertBody'
import AlertHeading, { AlertHeadingProps } from '../AlertHeading/AlertHeading'
import AlertContent, { AlertContentProps } from '../AlertContent/AlertContent'
import AlertBase, { AlertBaseProps } from '../AlertBase/AlertBase'
import { HeadingLevel } from '../../../types/headingLevel'

export type BaseAlertProps = {
  heading?: React.ReactNode
  headingLevel: HeadingLevel
  cta?: React.ReactNode
  /**
   * Can also be used to force using custom content as children by
   * setting to `true`
   */
  validation?: boolean
  headingProps?: { headingLevel?: HeadingLevel } & AlertHeadingProps
  bodyProps?: AlertBaseProps
  contentProps?: AlertContentProps
  ctaProps?: React.ComponentPropsWithRef<'div'>
}

export type AlertProps = React.ComponentPropsWithRef<typeof Alert>

export type AlertRef = React.ComponentRef<typeof Alert>

export const AlertForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseAlertProps & React.PropsWithoutRef<AlertBaseProps>
> = (
  {
    heading,
    headingLevel,
    cta,
    children,
    validation,
    bodyProps,
    contentProps,
    ctaProps,
    ...props
  },
  ref
): React.ReactElement => {
  return (
    <AlertBase ref={ref} {...props}>
      <AlertBody {...bodyProps}>
        {heading && (
          <AlertHeading headingLevel={headingLevel} {...contentProps}>
            {heading}
          </AlertHeading>
        )}
        {children &&
          (validation ? (
            children
          ) : (
            <AlertContent {...contentProps}>{children}</AlertContent>
          ))}
      </AlertBody>
      {cta && <div {...ctaProps}>{cta}</div>}
    </AlertBase>
  )
}

const Alert = forwardRef(AlertForwardRef)

export default Alert
