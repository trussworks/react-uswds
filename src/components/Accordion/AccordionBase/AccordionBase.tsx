import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseAccordionBaseProps = {
  bordered?: boolean
  className?: string
}

export type AccordionBaseProps = React.ComponentPropsWithRef<
  typeof AccordionBase
>

export type AccordionBaseRef = React.ComponentRef<typeof AccordionBase>

export const AccordionBaseForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseAccordionBaseProps & React.ComponentPropsWithoutRef<'div'>
> = ({ bordered, className, ...props }, ref): React.ReactElement => {
  const classes = classnames(
    'usa-accordion',
    {
      'usa-accordion--bordered': bordered,
    },
    className
  )

  return (
    <div ref={ref} className={classes} data-testid="accordion" {...props} />
  )
}

const AccordionBase = forwardRef(AccordionBaseForwardRef)

export default AccordionBase
