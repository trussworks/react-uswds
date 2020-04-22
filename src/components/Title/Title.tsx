import React from 'react'
import classnames from 'classnames'

interface TitleProps {
  title: React.ReactNode
  link?: string
}

export const Title = ({ title, link }: TitleProps): React.ReactElement => {
  const classes = classnames('usa-logo')

  return (
    <div className={classes}>
      <em className="usa-logo__text">
        <a href={link}>{title}</a>
      </em>
    </div>
  )
}

export default Title
