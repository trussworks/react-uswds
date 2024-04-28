import React from 'react'
import classnames from 'classnames'

export interface BaseAccordionButtonProps {
  expanded: boolean
  id: string
  className?: string
}

export type AccordionButtonProps = BaseAccordionButtonProps &
  JSX.IntrinsicElements['button']

const AccordionButton = ({
  children,
  id,
  expanded,
  className,
  ...props
}: AccordionButtonProps): React.ReactElement => {
  const classes = classnames('usa-accordion__button', className)

  return (
    <button
      type="button"
      className={classes}
      aria-expanded={expanded}
      aria-controls={id}
      data-testid={`accordionButton_${id}`}
      {...props}>
      {children}
    </button>
  )
}

export default AccordionButton
