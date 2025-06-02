import React, { type JSX } from 'react'
import classnames from 'classnames'

export type ValidationChecklistProps = JSX.IntrinsicElements['ul']

export const ValidationChecklist = ({
  children,
  className,
  ...ulProps
}: ValidationChecklistProps): JSX.Element => {
  const classes = classnames(className, 'usa-checklist')
  return (
    <ul className={classes} data-testid="validationChecklist" {...ulProps}>
      {children}
    </ul>
  )
}

export default ValidationChecklist
