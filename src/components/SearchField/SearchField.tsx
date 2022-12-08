import React from 'react'
import classnames from 'classnames'

import { OptionalFormProps } from '../forms/Form/Form'
import { FormGroup } from '../forms/FormGroup/FormGroup'

import { Label } from '../forms/Label/Label'
import { TextInput } from '../forms/TextInput/TextInput'

type SearchLocalization = {
  buttonText: string
}

type SearchInputProps = {
  size?: 'big' | 'small'
  className?: string
  inputName?: string
  inputId?: string
  placeholder?: string
  label?: React.ReactNode
  i18n?: SearchLocalization
}

export const Search = ({
  size,
  className,
  placeholder,
  inputName = 'search',
  label = 'Search',
  inputId = 'search-field',
  ...formProps
}: SearchInputProps & OptionalFormProps): React.ReactElement => {

  // const isBig = size === 'big'
  // const isSmall = size === 'small'
  // const classes = classnames(
  //   'usa-search',
  //   {
  //     'usa-search--small': isSmall,
  //     'usa-search--big': isBig,
  //   },
  //   className
  // )

  return (
    <FormGroup>
      <Label srOnly={true} htmlFor={inputId}>
        {label}
      </Label>
      <TextInput
        id={inputId}
        type="search"
        name={inputName}
        placeholder={placeholder}
        defaultValue={formProps.defaultValue}
      />
    </FormGroup>
  )
}

export default Search
