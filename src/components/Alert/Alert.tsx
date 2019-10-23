import React from 'react'
import classnames from 'classnames'

import styles from './Alert.module.css'

interface AlertProps {
  type?: 'success' | 'warning' | 'error' | 'info'
  heading?: React.ReactNode
  children?: React.ReactNode
  cta?: React.ReactNode
}

export const Alert = (props: AlertProps): React.ReactElement => {
  const { type, heading, cta, children } = props

  const classes = classnames('usa-alert', {
    'usa-alert--success': type === 'success',
    'usa-alert--warning': type === 'warning',
    'usa-alert--error': type === 'error',
    'usa-alert--info': type === 'info',
    [styles.alertWithCTA]: !!cta,
  })

  return (
    <div className={classes} data-testid="alert">
      <div className="usa-alert__body">
        {heading && <h3 className="usa-alert__heading">{heading}</h3>}
        {children && <p className="usa-alert__text">{children}</p>}
      </div>
      {cta && <div>{cta}</div>}
    </div>
  )
}

export default Alert
