import React from 'react'
import classnames from 'classnames'

export interface BaseValidationChecklistProps {
  id: string
  children: React.ReactNode
}

export type ValidationChecklistProps = BaseValidationChecklistProps &
  JSX.IntrinsicElements['ul']

const ValidationChecklist = ({
  children,
  className,
  ...ulProps
}: ValidationChecklistProps): React.ReactElement => {
  const classes = classnames(className, 'usa-checklist')
  return (
    <ul className={classes} data-testid="validationChecklist" {...ulProps}>
      {children}
    </ul>
  )
}

export default ValidationChecklist
