import React from 'react'
import classnames from 'classnames'

export type AccordionButtonProps = {
  expanded: boolean
  id: string
  className?: string
} & JSX.IntrinsicElements['button']

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
