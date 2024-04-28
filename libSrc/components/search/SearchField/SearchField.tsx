import React from 'react'
import classnames from 'classnames'
import type { SetOptional } from 'type-fest'

import Label from '../../forms/label/Label/Label.js'
import TextInput, {
  type TextInputProps,
} from '../../forms/TextInput/TextInput.js'

export interface BaseSearchFieldProps {
  isBig?: boolean
  className?: string
  inputName?: string
  inputId?: string
  placeholder?: string
  defaultValue?: React.ReactNode
  label?: React.ReactNode
  inputProps?: SetOptional<TextInputProps, 'id' | 'name'>
}

export type SearchFieldProps = BaseSearchFieldProps &
  JSX.IntrinsicElements['div']

const SearchField = ({
  isBig,
  className,
  placeholder,
  defaultValue,
  inputName = 'search',
  label = 'Search',
  inputId = 'search-field',
  inputProps,
  ...props
}: SearchFieldProps): React.ReactElement => {
  const classes = classnames(
    {
      'usa-search--big': isBig,
    },
    className
  )

  return (
    <div className={classes} data-testid="searchField" {...props}>
      <Label srOnly={true} htmlFor={inputId}>
        {label}
      </Label>
      <TextInput
        id={inputId}
        name={inputName}
        type="search"
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...inputProps}
      />
    </div>
  )
}

export default SearchField
