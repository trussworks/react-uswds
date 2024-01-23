import React, { forwardRef } from 'react'
import classnames from 'classnames'

export type BaseRadioProps = {
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

export type RadioProps = BaseRadioProps & JSX.IntrinsicElements['input']

export const RadioForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, RadioProps> = ({
  id,
  name,
  className,
  label,
  inputRef,
  tile,
  labelDescription,
  ...inputProps
}, ref): React.ReactElement => {
  const classes = classnames('usa-radio', className)
  const radioClasses = classnames('usa-radio__input', {
    'usa-radio__input--tile': tile,
  })

  return (
    <div ref={ref} data-testid="radio" className={classes}>
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

export const Radio = forwardRef(RadioForwardRef)

export default Radio
