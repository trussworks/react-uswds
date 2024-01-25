import React, { forwardRef } from 'react'
import classnames from 'classnames'

import { HeadingLevel } from '../../../types/headingLevel'

import styles from './Alert.module.scss'
import AlertBody, { AlertBodyRef } from '../AlertBody/AlertBody'
import AlertHeading, { AlertHeadingRef } from '../AlertHeading/AlertHeading'
import AlertContent, { AlertContentRef } from '../AlertContent/AlertContent'

export type BaseAlertProps = {
  type: 'success' | 'warning' | 'error' | 'info'
  heading?: React.ReactNode
  headingLevel: HeadingLevel
  children?: React.ReactNode
  cta?: React.ReactNode
  slim?: boolean
  noIcon?: boolean
  /**
   * Can also be used to force using custom content as children by
   * setting to `true`
   */
  validation?: boolean
  __headingRef?: React.Ref<AlertHeadingRef>
  __bodyRef?: React.Ref<AlertBodyRef>
  __contentRef?: React.Ref<AlertContentRef>
  __ctaRef?: React.Ref<HTMLDivElement>
}

export type AlertProps = React.ComponentPropsWithRef<typeof Alert>

export type AlertRef = React.ComponentRef<typeof Alert>

export const AlertForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseAlertProps & React.ComponentPropsWithoutRef<'div'>
> = (
  {
    type,
    heading,
    headingLevel,
    cta,
    children,
    slim,
    noIcon,
    className,
    validation,
    __bodyRef,
    __contentRef,
    __headingRef,
    __ctaRef,
    ...props
  },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-alert',
    {
      'usa-alert--success': type === 'success',
      'usa-alert--warning': type === 'warning',
      'usa-alert--error': type === 'error',
      'usa-alert--info': type === 'info',
      'usa-alert--slim': slim,
      'usa-alert--no-icon': noIcon,
      'usa-alert--validation': validation,
      [styles.alertWithCTA]: !!cta,
    },
    className
  )

  return (
    <div className={classes} data-testid="alert" ref={ref} {...props}>
      <AlertBody ref={__bodyRef}>
        {heading && <AlertHeading ref={__headingRef} headingLevel={headingLevel}>{heading}</AlertHeading>}
        {children &&
          (validation ? (
            children
          ) : (
            <AlertContent ref={__contentRef}>{children}</AlertContent>
          ))}
      </AlertBody>
      {cta && <div ref={__ctaRef}>{cta}</div>}
    </div>
  )
}

const Alert = forwardRef(AlertForwardRef)

export default Alert
