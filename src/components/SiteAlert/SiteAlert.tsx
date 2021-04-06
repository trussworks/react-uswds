import React from 'react'
import classnames from 'classnames'

// import {Link} from '../Link/Link'

interface SiteAlertProps {
  heading?: string
  variant: 'info' | 'emergency'
  showIcon?: boolean
  slim?: boolean
  className?: string
  children: React.ReactNode
}

export const SiteAlert = ({
  heading,
  variant,
  showIcon,
  slim = false,
  className,
  children,
  ...props
}: SiteAlertProps & JSX.IntrinsicElements['section']): React.ReactElement => {
  const classes = classnames(
    'usa-site-alert',
    {
      'usa-site-alert--no-heading': !!heading,
      'usa-site-alert-info': variant === 'info',
      'usa-site-alert-emergency': variant === 'emergency',
      'usa-site-alert--no-icon': !!showIcon,
      'usa-site-alert--slim': slim,
    },
    className
  )
  return (
    <section data-testid="siteAlert" className={classes} {...props}>
      <div className="usa-alert">
        <div className="usa-alert__body">
          {heading && <h3 className="usa-alert__heading">{heading}</h3>}
          {children}
        </div>
      </div>
    </section>
  )
}

export default SiteAlert
