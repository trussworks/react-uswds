import React from 'react'

import { Label } from '../forms/Label/Label'
import { TextInput, OptionalTextInputProps } from '../forms/TextInput/TextInput'


type SearchFieldProps = {
  className?: string
  inputName?: string
  inputId?: string
  placeholder?: string
  defaultValue?: React.ReactNode
  label?: React.ReactNode
}

export const SearchField = ({
  className,
  placeholder,
  defaultValue,
  inputName = 'search',
  label = 'Search',
  inputId = 'search-field',
  ...inputProps
}: SearchFieldProps & OptionalTextInputProps): React.ReactElement => {

  return (
    <div className={className}>
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
