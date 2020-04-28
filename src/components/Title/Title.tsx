import React from 'react'
import classnames from 'classnames'

interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps): React.ReactElement => {
  const classes = classnames('usa-logo')

  return (
    <div className={classes}>
      <em className="usa-logo__text">{children}</em>
    </div>
  )
}

export default Title
