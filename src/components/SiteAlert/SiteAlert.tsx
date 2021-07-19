import React from 'react'
import classnames from 'classnames'

interface SiteAlertProps {
  variant: 'info' | 'emergency'
  children: string | React.ReactNode | React.ReactNode[]
  heading?: string
  showIcon?: boolean
  slim?: boolean
  className?: string
}

export const SiteAlert = ({
  variant,
  children,
  heading,
  showIcon = true,
  slim = false,
  className,
  ...sectionProps
}: SiteAlertProps & JSX.IntrinsicElements['section']): React.ReactElement => {
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

  let content = children
  if (typeof children === 'string') {
    content = <p className="usa-alert__text">{children}</p>
  }

  return (
    <section
      data-testid="siteAlert"
      className={classes}
      aria-label="Site alert"
      {...sectionProps}>
      <div className="usa-alert">
        <div className="usa-alert__body">
          {heading && <h3 className="usa-alert__heading">{heading}</h3>}
          {content}
        </div>
      </div>
    </section>
  )
}

export default SiteAlert
