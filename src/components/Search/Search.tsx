import React from 'react'
import classnames from 'classnames'

import searchImg from '@uswds/uswds/src/img/usa-icons-bg/search--white.svg'

import { Button } from '../Button/Button'
import { Form, OptionalFormProps } from '../forms/Form/Form'
import { SearchField } from '../SearchField/SearchField'
import { OptionalTextInputProps } from '../forms/TextInput/TextInput'

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
  const buttonText = i18n?.buttonText || 'Search'

  const isBig = size === 'big'
  const isSmall = size === 'small'
  const classes = classnames(
    'usa-search',
    {
      'usa-search--small': isSmall,
      'usa-search--big': isBig,
    },
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
        label={label}
        inputId={inputId}
        placeholder={placeholder}
        name={inputName}
        defaultValue={formProps.defaultValue}
      />
      <Button type="submit">
        {!isSmall && (
          <span className="usa-search__submit-text">{buttonText}</span>
        )}
        <img
          src={searchImg}
          className="usa-search__submit-icon"
          alt={buttonText}
        />
      </Button>
    </Form>
  )
}

export default Search
