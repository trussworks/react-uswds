import React from 'react'
import classnames from 'classnames'

import Form, { FormProps } from '../../forms/Form/Form.js'
import SearchField, { SearchFieldProps } from '../SearchField/SearchField.js'
import SearchButton from '../SearchButton/SearchButton.js'

export type SearchLocalization = {
  buttonText: string
}

export type BaseSearchProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  size?: 'big' | 'small'
  className?: string
  inputName?: string
  inputId?: string
  placeholder?: string
  label?: React.ReactNode
  i18n?: SearchLocalization
  buttonAriaLabel?: string
  inputProps?: SearchFieldProps['inputProps']
}

export type SearchProps = BaseSearchProps & FormProps

const Search = ({
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
  defaultValue,
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
        isBig={size == 'big'}
        inputId={inputId}
        placeholder={placeholder}
        label={label}
        defaultValue={defaultValue}
        inputProps={inputProps}
        inputName={inputName}
      />
      <SearchButton size={size} i18n={i18n} buttonAriaLabel={buttonAriaLabel} />
    </Form>
  )
}

export default Search
