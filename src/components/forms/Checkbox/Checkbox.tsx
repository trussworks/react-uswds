import React from 'react'
import classnames from 'classnames'

interface CheckboxProps {
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
}

export const Checkbox = ({
  id,
  name,
  className,
  label,
  inputRef,
  tile,
  ...inputProps
}: CheckboxProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const classes = classnames('usa-checkbox', className)
  const checkboxClasses = classnames('usa-checkbox__input', {
    'usa-checkbox__input--tile': tile,
  })

  return (
    <div data-testid="checkbox" className={classes}>
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
      </label>
    </div>
  )
}

export default Checkbox
