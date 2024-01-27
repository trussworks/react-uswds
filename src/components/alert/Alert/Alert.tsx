import React, { forwardRef } from 'react'

import AlertBody from '../AlertBody/AlertBody'
import AlertHeading, {
  AlertHeadingProps,
  BaseAlertHeadingProps,
} from '../AlertHeading/AlertHeading'
import AlertContent, { AlertContentProps } from '../AlertContent/AlertContent'
import AlertBase, {
  AlertBaseProps,
  BaseAlertBaseProps,
} from '../AlertBase/AlertBase'
import { HeadingLevel } from '../../../types/headingLevel'

export interface BaseAlertProps
  extends BaseAlertBaseProps,
    BaseAlertHeadingProps {
  heading?: React.ReactNode
  cta?: React.ReactNode
  headingProps?: { headingLevel?: HeadingLevel } & AlertHeadingProps
  bodyProps?: AlertBaseProps
  contentProps?: AlertContentProps
  ctaProps?: React.ComponentPropsWithRef<'div'>

  /**
   * @deprecated Use `isSlim` instead
   */
  slim?: boolean
  /**
   * @deprecated Use `isNoIcon` instead
   */
  noIcon?: boolean
  /**
   * @deprecated Use `isValidation` instead
   */
  validation?: boolean
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
    bodyProps,
    contentProps,
    ctaProps,
    validation,
    noIcon,
    slim,
    isCta = !!cta,
    isValidation = validation,
    isNoIcon = noIcon,
    isSlim = slim,
    ...props
  },
  ref
): React.ReactElement => {
  return (
    <AlertBase
      isCta={isCta}
      isNoIcon={isNoIcon}
      isSlim={isSlim}
      isValidation={isValidation}
      ref={ref}
      {...props}>
      <AlertBody {...bodyProps}>
        {heading && (
          <AlertHeading headingLevel={headingLevel} {...contentProps}>
            {heading}
          </AlertHeading>
        )}
        {children &&
          (isValidation ? (
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
