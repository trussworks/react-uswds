import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type CardGroupProps = JSX.IntrinsicElements['ul']

export const CardGroupForwardRef: React.ForwardRefRenderFunction<
  HTMLUListElement,
  CardGroupProps
> = ({ children, className, ...ulProps }, ref): React.ReactElement => {
  const classes = classnames('usa-card-group', className)

  return (
    <ul ref={ref} className={classes} data-testid="CardGroup" {...ulProps}>
      {children}
    </ul>
  )
}

export const CardGroup = forwardRef(CardGroupForwardRef)

export default CardGroup
