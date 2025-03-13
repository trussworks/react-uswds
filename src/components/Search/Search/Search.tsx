import React, { type JSX } from 'react'
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
  buttonAriaLabel?: string
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
  buttonAriaLabel,
  inputProps,
  ...formProps
}: SearchInputProps & OptionalFormProps): JSX.Element => {
  const classes = classnames('usa-search', className)

  return (
    <Form
      onSubmit={onSubmit}
      className={classes}
      role="search"
      search={true}
      {...formProps}>
      <SearchField
        {...inputProps}
        isBig={size == 'big'}
        inputId={inputId}
        placeholder={placeholder}
        name={inputName}
        label={label}
        defaultValue={formProps.defaultValue}
      />
      <SearchButton size={size} i18n={i18n} buttonAriaLabel={buttonAriaLabel} />
    </Form>
  )
}

export default Search
