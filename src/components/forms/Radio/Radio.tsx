import React from 'react'
import classnames from 'classnames'

interface RadioProps {
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
}

export const Radio = ({ 
  id, name, className, label, inputRef, ...inputProps 
}: RadioProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const classes = classnames('usa-radio', className)

  return (
    <div data-testid="radio" className={classes}>
      <input
        className="usa-radio__input"
        id={id}
        type="radio"
        name={name}
        ref={inputRef}
        {...inputProps}
      />
      <label className="usa-radio__label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Radio
