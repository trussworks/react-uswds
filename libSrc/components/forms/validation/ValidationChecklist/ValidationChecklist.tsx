import React from 'react'
import classnames from 'classnames'

export type ValidationChecklistProps = {
  id: string
  children: React.ReactNode
} & JSX.IntrinsicElements['ul']

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
