import React from 'react'
import classnames from 'classnames'

import { Form, OptionalFormProps } from '../../forms/Form/Form'
import { SearchField } from '../SearchField/SearchField'
import { SearchButton } from '../SearchButton/SearchButton'
import { OptionalTextInputProps } from '../../forms/TextInput/TextInput'

type SearchLocalization = {
  buttonText: string
}

type SearchInputProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  size?: 'big' | 'small'
  className?: string
  inputName?: string
  inputId?: string
  placeholder?: string
  label?: React.ReactNode
  i18n?: SearchLocalization
  inputProps?: OptionalTextInputProps
}

export const Search = ({
  onSubmit,
  size,
  className,
  placeholder,
  inputName = 'search',
  label = 'Search',
  inputId = 'search-field',
  i18n,
  inputProps,
  ...formProps
}: SearchInputProps & OptionalFormProps): React.ReactElement => {

  const classes = classnames(
    'usa-search',
    className
  )

  return (
    <Form
      onSubmit={onSubmit}
      className={classes}
      role="search"
      search={true}
      {...formProps}>
      <SearchField 
        {...inputProps}
        inputId={inputId}
        placeholder={placeholder}
        name={inputName}
        label={label}
        defaultValue={formProps.defaultValue}
      />
      <SearchButton size={size} i18n={i18n} />
    </Form>
  )
}

export default Search
