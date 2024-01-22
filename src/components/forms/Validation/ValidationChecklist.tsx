import React from 'react'
import classnames from 'classnames'

export interface BaseValidationChecklistProps {}

export type RequiredValidationChecklistProps = Required<
  Pick<JSX.IntrinsicElements['ul'], 'id' | 'children'>
>

export type ValidationChecklistProps = BaseValidationChecklistProps &
  RequiredValidationChecklistProps &
  Omit<JSX.IntrinsicElements['ul'], 'id' | 'children'>

export const ValidationChecklist = ({
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
