import React, { forwardRef } from 'react'
import classnames from 'classnames'

import Form, { BaseFormProps } from '../../forms/Form/Form'
import SearchField, { SearchFieldProps } from '../SearchField/SearchField'
import SearchButton from '../SearchButton/SearchButton'

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
  inputProps?: SearchFieldProps
}

export type SearchProps = React.ComponentPropsWithRef<typeof Search>

export type SearchRef = React.ComponentRef<typeof Search>

export const SearchForwardRef: React.ForwardRefRenderFunction<
  HTMLFormElement,
  SearchInputProps & BaseFormProps & React.ComponentPropsWithoutRef<'form'>
> = (
  {
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
  },
  ref
): React.ReactElement => {
  const classes = classnames('usa-search', className)

  return (
    <Form
      ref={ref}
      onSubmit={onSubmit}
      className={classes}
      role="search"
      search={true}
      {...formProps}>
      <SearchField
        isBig={size == 'big'}
        inputId={inputId}
        placeholder={placeholder}
        name={inputName}
        label={label}
        defaultValue={formProps.defaultValue}
        {...inputProps}
      />
      <SearchButton size={size} i18n={i18n} />
    </Form>
  )
}

const Search = forwardRef(SearchForwardRef)

export default Search
