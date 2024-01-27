import React, { forwardRef } from 'react'
import classnames from 'classnames'

import Label from '../../forms/Label/Label'
import TextInput, { BaseTextInputProps } from '../../forms/TextInput/TextInput'

export type BaseSearchFieldProps = {
  isBig?: boolean
  className?: string
  inputName?: string
  inputId?: string
  placeholder?: string
  defaultValue?: React.ReactNode
  label?: React.ReactNode
  inputProps?: React.ComponentPropsWithRef<'input'>
}

export type SearchFieldProps = React.ComponentPropsWithRef<typeof SearchField>

export type SearchFieldRef = React.ComponentRef<typeof SearchField>

export const SearchFieldForwardRef: React.ForwardRefRenderFunction<
  HTMLInputElement,
  BaseSearchFieldProps &
    BaseTextInputProps &
    React.ComponentPropsWithoutRef<'input'>
> = (
  {
    isBig,
    className,
    placeholder,
    defaultValue,
    inputName = 'search',
    label = 'Search',
    inputId = 'search-field',
    inputProps,
  },
  ref
): React.ReactElement => {
  const classes = classnames(
    {
      'usa-search--big': isBig,
    },
    className
  )

  return (
    <div className={classes} data-testid="searchField">
      <Label srOnly={true} htmlFor={inputId}>
        {label}
      </Label>
      <TextInput
        ref={ref}
        {...inputProps}
        id={inputId}
        name={inputName}
        type="search"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  )
}

const SearchField = forwardRef(SearchFieldForwardRef)

export default SearchField
