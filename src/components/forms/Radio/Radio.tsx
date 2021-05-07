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
  tile?: boolean
  labelDescription?: React.ReactNode
}

export const Radio = ({
  id,
  name,
  className,
  label,
  inputRef,
  tile,
  labelDescription,
  ...inputProps
}: RadioProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const classes = classnames('usa-radio', className)
  const radioClasses = classnames('usa-radio__input', {
    'usa-radio__input--tile': tile,
  })

  return (
    <div data-testid="radio" className={classes}>
      <input
        className={radioClasses}
        id={id}
        type="radio"
        name={name}
        ref={inputRef}
        {...inputProps}
      />
      <label className="usa-radio__label" htmlFor={id}>
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

export default Radio
