import classNames from 'classnames'
import React from 'react'

export interface BaseRequiredMarkerProps {}

export type RequiredMarkerProps = BaseRequiredMarkerProps &
  JSX.IntrinsicElements['abbr']

const RequiredMarker = ({
  className,
  ...props
}: RequiredMarkerProps): React.ReactElement => {
  const classes = classNames('usa-hint usa-hint--required', className)

  return (
    <abbr title="required" className={classes} {...props}>
      *
    </abbr>
  )
}

export default RequiredMarker
