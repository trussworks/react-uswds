import React, { forwardRef } from 'react'
import classnames from 'classnames'

import { HeadingLevel } from '../../types/headingLevel'

import styles from './Alert.module.scss'

export type BaseAlertProps = {
  type: 'success' | 'warning' | 'error' | 'info'
  heading?: React.ReactNode
  headingLevel: HeadingLevel
  children?: React.ReactNode
  cta?: React.ReactNode
  slim?: boolean
  noIcon?: boolean
  validation?: boolean
}

export type AlertProps = BaseAlertProps & React.HTMLAttributes<HTMLDivElement>

export const AlertForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  AlertProps
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

  const Heading = headingLevel

  return (
    <div className={classes} data-testid="alert" ref={ref} {...props}>
      <div className="usa-alert__body">
        {heading && <Heading className="usa-alert__heading">{heading}</Heading>}
        {children &&
          (validation ? (
            children
          ) : (
            <p className="usa-alert__text">{children}</p>
          ))}
      </div>
      {cta && <div>{cta}</div>}
    </div>
  )
}

export const Alert = forwardRef(AlertForwardRef)

export default Alert
