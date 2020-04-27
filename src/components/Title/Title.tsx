import React from 'react'
import classnames from 'classnames'

interface TitleProps {
  title: React.ReactNode
}

export const Title = ({ title }: TitleProps): React.ReactElement => {
  const classes = classnames('usa-logo')

  return (
    <div className={classes}>
      <h1 className="usa-logo__text">{title}</h1>
    </div>
  )
}

export default Title
