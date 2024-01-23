import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type CheckboxPropsBase = {
  id: string
  name: string
  className?: string
  label: React.ReactNode
  inputRef?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined
  tile?: boolean
  labelDescription?: React.ReactNode
}

export type CheckboxProps = CheckboxPropsBase & JSX.IntrinsicElements['input']

export const CheckboxForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CheckboxProps
> = (
  {
    id,
    name,
    className,
    label,
    inputRef,
    tile,
    labelDescription,
    ...inputProps
  },
  ref
): React.ReactElement => {
  const classes = classnames('usa-checkbox', className)
  const checkboxClasses = classnames('usa-checkbox__input', {
    'usa-checkbox__input--tile': tile,
  })

  return (
    <div ref={ref} data-testid="checkbox" className={classes}>
      <input
        className={checkboxClasses}
        id={id}
        type="checkbox"
        name={name}
        ref={inputRef}
        {...inputProps}
      />
      <label className="usa-checkbox__label" htmlFor={id}>
        {label}
        {labelDescription && (
          <span className="usa-checkbox__label-description">
            {labelDescription}
          </span>
        )}
      </label>
    </div>
  )
}

export const Checkbox = forwardRef(CheckboxForwardRef)

export default Checkbox
