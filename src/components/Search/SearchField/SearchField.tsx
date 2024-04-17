import React from 'react'
import classnames from 'classnames'

import Label from '../../forms/Label/Label'
import TextInput, {
  OptionalTextInputProps,
} from '../../forms/TextInput/TextInput'

export type SearchFieldProps = {
  isBig?: boolean
  className?: string
  inputName?: string
  inputId?: string
  placeholder?: string
  defaultValue?: React.ReactNode
  label?: React.ReactNode
  inputProps?: JSX.IntrinsicElements['input']
} & OptionalTextInputProps

const SearchField = ({
  isBig,
  className,
  placeholder,
  defaultValue,
  inputName = 'search',
  label = 'Search',
  inputId = 'search-field',
  inputProps,
}: SearchFieldProps): React.ReactElement => {
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

export default SearchField
