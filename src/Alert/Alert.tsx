/* eslint react/prop-types: 0 */
import React from 'react'
import classnames from 'classnames'

interface AlertProps {
  type?: 'success' | 'warning' | 'error' | 'info'
  heading?: React.ReactNode
  children?: React.ReactNode
}

export const Alert = (props: AlertProps): React.ReactElement => {
  const { type, heading, children } = props

  const classes = classnames('usa-alert', {
    'usa-alert--success': type === 'success',
    'usa-alert--warning': type === 'warning',
    'usa-alert--error': type === 'error',
    'usa-alert--info': type === 'info',
  })

  return (
    <div className={classes}>
      <div className="usa-alert__body">
        {heading && <h3 className="usa-alert__heading">{heading}</h3>}
        {children && <p className="usa-alert__text">{children}</p>}
      </div>
    </div>
  )
}

export default Alert
