import React from 'react'
import classnames from 'classnames'
import { ValidationLiveRegion } from './ValidationLiveRegion'

type ValidationChecklistProps = {
  id: string
  children: React.ReactNode
  enableLiveRegion?: boolean
}

export const ValidationChecklist = ({
  children,
  className,
  enableLiveRegion = false,
  ...ulProps
}: ValidationChecklistProps &
  JSX.IntrinsicElements['ul']): React.ReactElement => {
  const classes = classnames(className, 'usa-checklist')
  return (
    <>
      <ul className={classes} data-testid="validationChecklist" {...ulProps}>
        {children}
      </ul>
      {enableLiveRegion && <ValidationLiveRegion />}
    </>
  )
}

export default ValidationChecklist
