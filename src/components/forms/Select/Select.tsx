import React from 'react'
import classnames from 'classnames'

type SelectProps = {
  id: string
  name: string
  className?: string
  children: React.ReactNode
  inputRef?:
    | string
    | ((instance: HTMLSelectElement | null) => void)
    | React.RefObject<HTMLSelectElement>
    | null
    | undefined
}

export const Select = ({
  id,
  name,
  className,
  inputRef,
  children,
  ...inputProps
}: SelectProps & JSX.IntrinsicElements['select']): React.ReactElement => {
  const classes = classnames('usa-select', className)

  return (
    <select
      data-testid="Select"
      className={classes}
      id={id}
      name={name}
      ref={inputRef}
      {...inputProps}>
      {children}
    </select>
  )
}

export default Select
