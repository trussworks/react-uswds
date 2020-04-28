import React from 'react'
import classnames from 'classnames'

interface TitleProps {
  children: React.ReactNode
  logo?: boolean
  text?: boolean
}

export const Title = (props: TitleProps): React.ReactElement => {
  const { children, logo, text } = props
  const classes = classnames({
    'usa-logo__logo': logo,
    'usa-logo__text': text,
  })

  return (
    <div className="usa-logo">
      <em className={classes}>{children}</em>
    </div>
  )
}

export default Title
