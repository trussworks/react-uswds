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
}

export const Radio = ({
  id,
  name,
  className,
  label,
  inputRef,
  tile,
  ...inputProps
}: RadioProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const classes = classnames('usa-radio', className)
  const radioClass = classnames('usa-radio__input', {
    'usa-radio__input--tile': tile,
  })

  return (
    <div data-testid="radio" className={classes}>
      <input
        className={radioClass}
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
