import React from 'react'
import classNames from 'classnames'

import { HeadingLevel } from '../../types/headingLevel'

export type AlertProps = {
  type: 'success' | 'warning' | 'error' | 'info' | 'emergency'
  children?: React.ReactNode
  slim?: boolean
  noIcon?: boolean
  validation?: boolean
  bodyClassName?: string
} & React.HTMLAttributes<HTMLDivElement>

export const Alert = ({
  type,
  children,
  slim,
  noIcon,
  validation,
  className,
  bodyClassName,
  ...divProps
}: AlertProps) => {
  const classes = classNames(
    'usa-alert',
    {
      'usa-alert--success': type === 'success',
      'usa-alert--warning': type === 'warning',
      'usa-alert--error': type === 'error',
      'usa-alert--info': type === 'info',
      'usa-alert--emergency': type === 'emergency',
      'usa-alert--slim': slim,
      'usa-alert--no-icon': noIcon,
      'usa-alert--validation': validation,
    },
    className
  )

  const bodyClasses = classNames('usa-alert__body', bodyClassName)

  return (
    <div className={classes} data-testid="alert" {...divProps}>
      <div className={bodyClasses}>{children}</div>
    </div>
  )
}

export type AlertHeadingProps = {
  level: HeadingLevel
  children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>
export const AlertHeading = ({
  level,
  children,
  className,
  ...headingProps
}: AlertHeadingProps) => {
  const classes = classNames('usa-alert__heading', className)

  const HeadingTag = level
  return (
    <HeadingTag className={classes} {...headingProps}>
      {children}
    </HeadingTag>
  )
}

export type AlertTextProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>
export const AlertText = ({
  children,
  className,
  ...textProps
}: AlertTextProps) => {
  const classes = classNames('usa-alert__text', className)
  return (
    <p className={classes} {...textProps}>
      {children}
    </p>
  )
}
