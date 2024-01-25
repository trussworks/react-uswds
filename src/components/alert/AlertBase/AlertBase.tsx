import React, { forwardRef } from 'react'
import classnames from 'classnames'

import styles from './AlertBase.module.scss'

export type BaseAlertBaseProps = {
  type: 'success' | 'warning' | 'error' | 'info'
  cta?: React.ReactNode
  slim?: boolean
  noIcon?: boolean
  validation?: boolean
}

export type AlertBaseProps = React.ComponentPropsWithRef<typeof AlertBase>

export type AlertBaseRef = React.ComponentRef<typeof AlertBase>

export const AlertBaseForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseAlertBaseProps & React.ComponentPropsWithoutRef<'div'>
> = (
  { type, cta, slim, noIcon, className, validation, ...props },
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

  return <div className={classes} data-testid="alert" ref={ref} {...props} />
}

const AlertBase = forwardRef(AlertBaseForwardRef)

export default AlertBase
