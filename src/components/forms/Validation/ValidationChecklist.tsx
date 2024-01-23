import React, { forwardRef } from 'react'
import classnames from 'classnames'

export interface BaseValidationChecklistProps {}

export type RequiredValidationChecklistProps = Required<
  Pick<JSX.IntrinsicElements['ul'], 'id' | 'children'>
>

export type ValidationChecklistProps = BaseValidationChecklistProps &
  RequiredValidationChecklistProps &
  Omit<JSX.IntrinsicElements['ul'], 'id' | 'children'>

export const ValidationChecklistForwardRef: React.ForwardRefRenderFunction<HTMLUListElement, ValidationChecklistProps> = ({
  children,
  className,
  ...ulProps
}, ref): React.ReactElement => {
  const classes = classnames(className, 'usa-checklist')
  return (
    <ul ref={ref} className={classes} data-testid="validationChecklist" {...ulProps}>
      {children}
    </ul>
  )
}

export const ValidationChecklist = forwardRef(ValidationChecklistForwardRef)

export default ValidationChecklist
