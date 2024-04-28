import React from 'react'
import classnames from 'classnames'
import Alert from '../Alert/Alert.js'

export interface BaseSiteAlertProps {
  variant: 'info' | 'emergency'
  children: string | React.ReactNode | React.ReactNode[]
  heading?: string
  showIcon?: boolean
  slim?: boolean
  className?: string
}

export type SiteAlertProps = BaseSiteAlertProps &
  JSX.IntrinsicElements['section']

const SiteAlert = ({
  variant,
  children,
  heading,
  showIcon = true,
  slim = false,
  className,
  ...sectionProps
}: SiteAlertProps): React.ReactElement => {
  const classes = classnames(
    'usa-site-alert',
    {
      'usa-site-alert--info': variant === 'info',
      'usa-site-alert--emergency': variant === 'emergency',
      'usa-site-alert--no-heading': heading === undefined && !slim,
      'usa-site-alert--no-icon': !showIcon,
      'usa-site-alert--slim': slim,
    },
    className
  )

  const isValidation = typeof children !== 'string'

  return (
    <section
      data-testid="siteAlert"
      className={classes}
      aria-label="Site alert"
      {...sectionProps}>
      <Alert headingLevel="h3" heading={heading} validation={isValidation}>
        {children}
      </Alert>
    </section>
  )
}

export default SiteAlert
