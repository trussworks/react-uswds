import React, { forwardRef } from 'react'
import classnames from 'classnames'

import styles from './AlertBase.module.scss'

export type BaseAlertBaseProps = {
  type?: 'success' | 'warning' | 'error' | 'info' | 'emergency'
  isCta?: boolean
  isSlim?: boolean
  isNoIcon?: boolean
  /**
   * Can also be used to force using custom content as children by
   * setting to `true`
   */
  isValidation?: boolean
}

export type AlertBaseProps = React.ComponentPropsWithRef<typeof AlertBase>

export type AlertBaseRef = React.ComponentRef<typeof AlertBase>

export const AlertBaseForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseAlertBaseProps & React.ComponentPropsWithoutRef<'div'>
> = (
  { type, isCta, className, isSlim, isNoIcon, isValidation, ...props },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-alert',
    {
      'usa-alert--success': type === 'success',
      'usa-alert--warning': type === 'warning',
      'usa-alert--error': type === 'error',
      'usa-alert--info': type === 'info',
      'usa-alert--emergency': type === 'emergency',
      'usa-alert--slim': isSlim,
      'usa-alert--no-icon': isNoIcon,
      'usa-alert--validation': isValidation,
      [styles.alertWithCTA]: isCta,
    },
    className
  )

  return <div className={classes} data-testid="alert" ref={ref} {...props} />
}

const AlertBase = forwardRef(AlertBaseForwardRef)

export default AlertBase
