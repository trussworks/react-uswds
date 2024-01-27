import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type TitleProps = JSX.IntrinsicElements['div']

export const TitleFowardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  TitleProps
> = ({ className, children, ...divProps }, ref): React.ReactElement => {
  const classes = classnames('usa-logo', className)

  return (
    <div ref={ref} className={classes} {...divProps}>
      <em className="usa-logo__text">{children}</em>
    </div>
  )
}

const Title = forwardRef(TitleFowardRef)

export default Title
