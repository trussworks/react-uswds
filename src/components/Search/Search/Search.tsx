import React from 'react'
import classnames from 'classnames'

import { Form, BaseFormProps } from '../../forms/Form/Form'
import { SearchField } from '../SearchField/SearchField'
import { SearchButton } from '../SearchButton/SearchButton'
import { BaseTextInputProps } from '../../forms/TextInput/TextInput'

export type SearchLocalization = {
  buttonText: string
}

export type SearchInputProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  size?: 'big' | 'small'
  className?: string
  inputName?: string
  inputId?: string
  placeholder?: string
  label?: React.ReactNode
  i18n?: SearchLocalization
  inputProps?: BaseTextInputProps & JSX.IntrinsicElements['input']
}

export type SearchProps = SearchInputProps &
  BaseFormProps &
  JSX.IntrinsicElements['form']

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
}: SearchProps): React.ReactElement => {
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
      <SearchButton size={size} i18n={i18n} />
    </Form>
  )
}

export default Search
