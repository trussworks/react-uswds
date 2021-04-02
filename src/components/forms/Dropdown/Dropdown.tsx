import React from 'react'
import classnames from 'classnames'

interface DropdownProps {
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

export const Dropdown = ({
  id,
  name,
  className,
  inputRef,
  children,
  ...inputProps
}: DropdownProps & JSX.IntrinsicElements['select']): React.ReactElement => {
  const classes = classnames('usa-select', className)

  return (
    <select
      data-testid="dropdown"
      className={classes}
      id={id}
      name={name}
      ref={inputRef}
      {...inputProps}>
      {children}
    </select>
  )
}

export default Dropdown
